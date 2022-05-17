#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from '@aws-cdk/core'
import { CiCdStack, Props as CiCdStackProps } from './cicd-stack'
import fs = require('fs')
import cdkConfig from './cdk-config'

const app = new cdk.App()

// read in config - could do with some validation
const { pipeline: stackProps } = cdkConfig
new CiCdStack(app, 'CiCd', stackProps as CiCdStackProps)

// optionally, add all the same stacks to the current app for direct deployment
CiCdStack.buildApp(stackProps as CiCdStackProps, app)
