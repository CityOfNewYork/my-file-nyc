# My File NYC Infrastructure

My File NYC is built on AWS cloud resources. Based on policies set forth by NYC OTI (Office of Technology & Information), there are some resources that must be created and managed by the OTI.

These include:

- Amazon SES instances
- Cloudfront Distributions
- ACM Certificates
- All Networking/Security resources (i.e. VPCs, Subnets, Route Tables, etc)

Outside of those OTI-controlled resources, we are free to create all other application-based resources (i.e. RDS databases, Lambdas, API Gateways, SQS Queues, SNS instances, S3 buckets, etc)

My File NYC creates all cloud resources with IaC (Infrustructure-as-Code) using the AWS Cloud Development Kit (CDK).

## Bootstrapping an account

>**IMPORTANT:** This is done once, and only once, for an AWS account. Regardless of the number of CDK stacks deployed to the account. Possible reasons to run bootstrap in addition to the first time, would be if upgrading a major version CDK or changing the asset bucket name.

In order to deploy a CDK project to build infrastructure resources in an AWS account, each AWS account where the CDK project is intended to be built, must first be "bootstrapped" for CDK.

## Environment Setup with `params.env`

Throughout the My File project, you will notice the presence of a `params.env` file in the root of each package that has direct deployment capabilities: **infra** & **frontend**.

The `params.env` file is simply a "source-able" file used to setup the necessary environment variables for any deployment-related activity.

It is very easy to follow and straightforward to maintain and use.

**Overview of file:**

```
export DEPLOYMENT_TARGET=${DEPLOYMENT_TARGET:='dev'}
export AWS_PAGER=""
export AWS_DEFAULT_REGION=${AWS_DEFAULT_REGION:='us-east-1'}


if [ $DEPLOYMENT_TARGET = 'dev' ]; then

  ... dev variable definitions

elif [ $DEPLOYMENT_TARGET = 'staging' ]; then

  ... staging variable definitions

elif [ $DEPLOYMENT_TARGET = 'production' ]; then

  ... production variable definitions

fi

```

At the beginning of the file, there are a few variables defined with defaults, as well as an assignment of an "already defined" variable.

`DEPLOYMENT_TARGET`, for example, is used to determine which environment is being deployed. Upon sourcing the file, if the `DEPLOYMENT_TARGET` variable is defined and present in the environment, then the same value will be used.

However, if there is no presence of an existing .`DEPLOYMENT_TARGET` variable, then the default value of `dev` will be assigned.

Inside of each "Deployment Target" section of the file, the specific values are assigned for the target environment.

A key AWS CLI environment variable, `AWS_PROFILE` is set with a default value in each of the deployment target sections. This sets the "named profile" to be used from the `~/.aws/credentials` file. The default value can be used so that all members of the team use the same value for the named profile, like so:

**params.env**
```
... dev if/else block ...

export AWS_PROFILE=${AWS_PROFILE:='nyc_hhs04'}

...
```

**~/.aws/credentials**
```
...

[nyc_hhs03]
aws_access_key_id=ASI........3HAH
aws_secret_access_key=EWbXvpo/Xm.......9lQn0Ai5
aws_session_token=9lQn0Ai5......EWbXvpo/Xm

[nyc_hhs04]
aws_access_key_id=ASI........3HAH
aws_secret_access_key=EWbXvpo/Xm.......9lQn0Ai5
aws_session_token=9lQn0Ai5......EWbXvpo/Xm

...
```

Above, if the developer's AWS credentials file contains named profiles that are aligned with the default value in the `params.env` file, then the default value will match the developer's environment.

**A WORD OF CAUTION:**

If you run deployments for multiple deployment targets (i.e. dev, staging, etc) while in the same terminal session, the previously set `$DEPLOYMENT_TARGET`, `$AWS_PROFILE`, etc variables will exist, and be re-used.

As good practice, when running the `npm` script for a given deployment, use "in line" environment variables to ensure the right context:

>`DEPLOYMENT_TARGET=staging AWS_PROFILE=nyc_hhs04 yarn infra cdk-deploy`

## Infra NPM Scripts

- `build` compile typescript to js
- `test` perform the jest unit tests
- `cdk-diff` compare deployed stack with current state
- `cdk-synth` emits the synthesized CloudFormation template
- `cdk-deploy` deploy this stack to the deployment target

Pre-set helper scripts:

- `synth-dev` - runs the `cdk-synth` script, but applies the inline DEPLOYMENT_TARGET=dev before executing
- `synth-staging` - runs the `cdk-synth` script, but applies the inline DEPLOYMENT_TARGET=staging-02 before executing
- `diff-dev` - runs the `cdk-diff` script, but applies the inline DEPLOYMENT_TARGET=dev before executing
- `diff-staging` - runs the `cdk-diff` script, but applies the inline DEPLOYMENT_TARGET=staging-02 before executing
- `deploy-dev` - runs the `cdk-deploy` script, but applies the inline DEPLOYMENT_TARGET=dev before executing
- `deploy-staging` - runs the `cdk-deploy` script, but applies the inline DEPLOYMENT_TARGET=staging-02 before executing


## Enhancements & Next Steps

The `params.env` file is an enhancement to a previously-used static json configuration file that had only hard-coded values. While many of the previously-defined static values were ported over, many variables were added that pull from cloud-defined parameters (SSM Parameters).

This enables the application to be setup without the need for developers having to copy and maintain static files locally. It also makes advancements to move any secret values outside the potential for being versioned or inadvertently misused.

The current approach makes use of retrieving SSM Parameter values defined in the respective AWS accounts, by setting environment variables pre-deployment from fetching them like so:

>`export CLOUDFRONT_DISTRIBUTION_ID=$(aws ssm get-parameter --name "/myfile/dev/cloudfront-distribution-id" --query "Parameter.Value" --output text)`

Further enhancements and hardening should include the use of AWS Secrets in addition to SSM Parameters to ensure properly-encrypted sensitive environment details.