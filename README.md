# Marcellas Babymassage

## Build Command

```
S3_BUCKET="zwergenstube-lahnstein.de" ASSETS_PREFIX="https://zwergenstube-lahnstein.de" APP_URL="https://zwergenstube-lahnstein.de" BASEPATH="" APP_BRANCH=main ENV=main AWS_PROFILE=private AWS_ACCOUNT=032419643434 AWS_REGION=eu-central-1 DEPLOY_ENV=prod yarn build
```

## Deploy Command

```
S3_BUCKET="zwergenstube-lahnstein.de" ASSETS_PREFIX="https://zwergenstube-lahnstein.de" APP_URL="https://zwergenstube-lahnstein.de" BASEPATH="" APP_BRANCH=main ENV=main AWS_PROFILE=private AWS_ACCOUNT=032419643434 AWS_REGION=eu-central-1 DEPLOY_ENV=prod yarn cdk deploy --all --require-approval never
```

## Sync Command

```
AWS_PROFILE=private AWS_ACCOUNT=032419643434 aws s3 sync out "s3://zwergenstube-lahnstein.de" --delete

AWS_PROFILE=private AWS_ACCOUNT=032419643434 aws cloudfront create-invalidation --distribution-id "E2D1E4PP57ZLTK" --paths "/*"
```

Introducing Tailwind App Presentation Page, a sleek and feature-rich app presentation template built on the foundation of Tailwind CSS and Material Tailwind.

Are you in search of a professionally designed and highly customizable app presentation template tailored for app developers, startups, and businesses to showcase your mobile or web application in a captivating way? Look no further! We are excited to present to you our Free App Presentation Page Template, meticulously crafted to cater to the needs of app developers like you.

This template, designed with Tailwind CSS and Material Tailwind, offers effortless customization to align perfectly with your app's unique branding. The free app presentation template includes essential features such as hero, features, FAQ, stats, and testimonial sections.

**Documentation built by Developers**

Each element is well presented in very complex documentation.

You can read more about the [documentation here](https://www.material-tailwind.com/docs/react/installation).


## Quick start

Quick start options:

- Download from [Creative Tim](https://www.creative-tim.com/product/nextjs-tailwind-app-presentation-page?ref=readme-ntapp).

## Terminal Commands

1. Download and Install NodeJs LTS version from [NodeJs Official Page](https://nodejs.org/en/download/).
2. Navigate to the root ./ directory of the product and run `npm install` to install our local dependencies.

## Documentation

The documentation for the Material Dashboard is hosted at our [website](https://www.material-tailwind.com/docs/react/installation?ref=readme-ntapp).


