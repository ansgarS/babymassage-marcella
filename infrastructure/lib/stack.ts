import * as cdk from 'aws-cdk-lib';
import { Stack } from 'aws-cdk-lib';
import { 
  // aws_apigateway as ApiGateway, 
  aws_s3 as s3 
} from 'aws-cdk-lib';
// import { LambdaIntegration } from 'aws-cdk-lib/aws-apigateway';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
  CloudFrontWebDistribution,
  OriginProtocolPolicy,
  SecurityPolicyProtocol,
  SSLMethod,
} from 'aws-cdk-lib/aws-cloudfront';
import * as iam from 'aws-cdk-lib/aws-iam';
// import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as route53 from 'aws-cdk-lib/aws-route53';
import { ARecord, CnameRecord, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import * as ssm from 'aws-cdk-lib/aws-ssm';
// import { RecaptchaAuthorizer, SecretKey } from 'cdk-recaptcha-authorizer';

export class AppStack extends Stack {
  constructor(
    scope: cdk.App,
    id: string,
    domainName: string,
    deployEnv: string,
    props?: cdk.StackProps
  ) {
    super(scope, id, props);

    // this.createBackend();
    this.createFrontend(domainName, deployEnv);
  }

  private createFrontend(domainName: string, deployEnv: string) {
    const zone = route53.HostedZone.fromLookup(this, 'hostedzone', {
      domainName,
    });

    const appBucket = new s3.Bucket(this, 'zwergenstube-app-bucket', {
      versioned: false,
      bucketName: domainName,
      removalPolicy:
        deployEnv === 'prod' || deployEnv === 'int'
          ? cdk.RemovalPolicy.RETAIN
          : cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: deployEnv !== 'prod' && deployEnv !== 'int',
      publicReadAccess: true,
      blockPublicAccess: {
        blockPublicAcls: true,
        blockPublicPolicy: false,
        ignorePublicAcls: true,
        restrictPublicBuckets: false,
      },
      websiteErrorDocument: 'index.html',
      websiteIndexDocument: 'index.html',
    });

    // create oia which will be used by cloudfront to fetch the index file
    // const oia = new OriginAccessIdentity(
    //   this,
    //   'lisa-and-seb-app-originaccessidentity',
    //   {
    //     comment: `${domainName}-access-id`,
    //   }
    // );

    // create and add resource policy to s3 bucket
    appBucket.addToResourcePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        principals: [new iam.AnyPrincipal()],
        actions: ['s3:GetObject'],
        resources: [appBucket.bucketArn],
      })
    );

    // get acm certificate from ssm
    const dnsValidatedCertificate = Certificate.fromCertificateArn(
      this,
      `app-cert`,
      ssm.StringParameter.valueForStringParameter(
        this,
        '/zwergenstube/global/de-certificate-arn'
      )
    );

    // create a new cloudfront distribution
    const subdomainName = `www.${domainName}`;
    const distribution = new CloudFrontWebDistribution(
      this,
      `s3-${domainName}`,
      {
        viewerCertificate: {
          aliases: [domainName, subdomainName],
          props: {
            acmCertificateArn: dnsValidatedCertificate.certificateArn,
            sslSupportMethod: SSLMethod.SNI,
            minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_1_2016,
          },
        },
        originConfigs: [
          {
            customOriginSource: {
              domainName: appBucket.bucketWebsiteDomainName,
              originProtocolPolicy: OriginProtocolPolicy.HTTP_ONLY,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
      }
    );

    new ARecord(this, 'SiteAliasRecord', {
      recordName: domainName,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
      zone,
    });

    // Route53 alias record for a subdomain's CloudFront distribution
    new CnameRecord(this, 'SiteCnameRecord', {
      recordName: subdomainName,
      domainName: distribution.distributionDomainName,
      zone,
    });
  }

  // private createBackend() {
  //   const api = new ApiGateway.RestApi(this, 'crs-api', {
  //     restApiName: 'Customer Request Service',
  //     description: 'This service notifies about customer requests.',
  //     defaultCorsPreflightOptions: {
  //       allowOrigins: ApiGateway.Cors.ALL_ORIGINS,
  //       allowMethods: ['POST'],
  //       allowHeaders: [
  //         ...ApiGateway.Cors.DEFAULT_HEADERS,
  //         'x-recaptcha-token',
  //         'X-reCAPTCHA-Token',
  //       ],
  //     },
  //   });

  //   const authorizer = new RecaptchaAuthorizer(this, 'reCaptchaAuthorizer', {
  //     allowedActions: ['form_submit'],
  //     reCaptchaSecretKey: SecretKey.fromPlainText(
  //       '6LcfJPYkAAAAAJrXqHVsSoTjnRy45g6W9qCdh7Um'
  //     ),
  //   });

  //   const handler = new lambda.Function(this, 'WidgetHandler', {
  //     runtime: lambda.Runtime.NODEJS_14_X,
  //     code: lambda.Code.fromAsset('backend/requestSupport'),
  //     handler: 'handler.main',
  //     environment: {},
  //   });

  //   handler.addToRolePolicy(
  //     new iam.PolicyStatement({
  //       actions: ['ses:SendEmail', 'SES:SendRawEmail'],
  //       resources: ['*'],
  //       effect: iam.Effect.ALLOW,
  //     })
  //   );

  //   api.root.addMethod(
  //     'POST',
  //     new LambdaIntegration(handler, {
  //       proxy: true,
  //       allowTestInvoke: false,
  //     }),
  //     {
  //       authorizer: authorizer,
  //     }
  //   );
  // }
}
