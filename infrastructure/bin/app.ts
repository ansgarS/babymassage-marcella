import * as cdk from 'aws-cdk-lib';

import { AppStack } from '../lib/stack';

const deployEnv = process.env.DEPLOY_ENV ?? 'prod';
if (!deployEnv || !deployEnv.length) {
  throw new Error('deploy environment is undefined or null');
}

let domain: string;
if (deployEnv === 'prod') {
  domain = 'zwergenstube-lahnstein.de';
} else {
  domain = `${process.env.DEPLOY_ENV}.zwergenstube-lahnstein.de`;
}

const app = new cdk.App();

new AppStack(
  app,
  `${deployEnv}-zwergenstube-app`,
  domain,
  deployEnv,
  {
    env: { account: process.env.AWS_ACCOUNT, region: process.env.AWS_REGION },
  }
);
