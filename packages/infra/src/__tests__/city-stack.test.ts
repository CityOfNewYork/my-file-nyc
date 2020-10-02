import { expect as expectCDK, haveResource } from '@aws-cdk/assert'
import { InstanceClass, InstanceSize, InstanceType } from '@aws-cdk/aws-ec2'
import * as cdk from '@aws-cdk/core'
import { AuthStack } from '../auth-stack'
import { CityStack } from '../city-stack'
import { DataStoreStack } from '../data-store-stack'

test('Fails validation for auth stack', () => {
  const app = new cdk.App()
  // WHEN
  const authStack = new AuthStack(app, 'MyTestAuthStack', {
    userPoolName: 'MyTestAuthStack'
  })
  const dataStoreStack = new DataStoreStack(app, 'MyTestDataStoreStack', {})
  expect(() => {
    new CityStack(app, 'MyTestStack1', {
      dataStoreStack,
      expectsAuthStack: true
    })
  }).toThrowError(/authStack must be provided when expectsAuthStack is true/)
  expect(() => {
    new CityStack(app, 'MyTestStack2', {
      dataStoreStack,
      authStack,
      expectsAuthStack: false
    })
  }).toThrowError(
    /authStack should not be provided when expectsAuthStack is false/
  )
})
test('Default Stack', () => {
  const app = new cdk.App()
  // WHEN
  const dataStoreStack = new DataStoreStack(app, 'MyTestDataStoreStack', {})
  const stack = new CityStack(app, 'MyTestStack', {
    dataStoreStack,
    expectsAuthStack: false
  })
  // THEN
  expectCDK(stack).to(haveResource('AWS::IAM::Role'))
  expectCDK(stack).to(
    haveResource('AWS::Lambda::Function', {
      Handler: 'index.handler',
      Role: {
        'Fn::GetAtt': ['HelloWorldFunctionServiceRole8E0BD458', 'Arn']
      },
      Runtime: 'nodejs12.x'
    })
  )
})
