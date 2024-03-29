import { handler as listAccountActivity } from './listAccountActivity'
import {
  createMockEvent,
  mockUserData,
  setUserId,
  toMockedFunction,
} from '@/utils/test'
import { APIGatewayProxyEventV2 } from 'aws-lambda'
import fs = require('fs')
import path = require('path')
import { getLogEvents } from '@/utils/logstream'

jest.mock('@/config')
jest.mock('@/utils/database')
jest.mock('@/utils/logstream')
jest.mock('@/services/users')
jest.mock('@/services/users/authorization')

const mockData = JSON.parse(
  fs
    .readFileSync(path.join(__dirname, '__mocks__', 'activity.json'))
    .toString('utf-8'),
) as any[]

describe('listAccountActivity', () => {
  const userId = 'myUserId'
  let event: APIGatewayProxyEventV2

  beforeEach(() => {
    mockUserData(userId)
    event = setUserId(
      userId,
      createMockEvent({
        pathParameters: {
          userId,
        },
      }),
    )
  })

  it('returns mock data', async () => {
    toMockedFunction(getLogEvents).mockImplementationOnce(async () => {
      return {
        events: mockData.reverse().map((d) => ({
          message: JSON.stringify(d),
        })),
        nextToken: 'backwards',
      }
    })
    expect(await listAccountActivity(event)).toMatchInlineSnapshot(`
      Object {
        "body": "{\\"activity\\":[{\\"date\\":\\"2020-11-10T12:43:00.000Z\\",\\"principal\\":{\\"id\\":\\"83B7646C-0275-41BC-8800-DC0246BEE3E7\\",\\"name\\":\\"sharon.harrison@cbo.org\\"},\\"requestId\\":\\"53A95AB4-CE20-4E07-924D-18D472A6A26D\\",\\"type\\":\\"COLLECTION.CREATED\\",\\"resource\\":{\\"type\\":\\"COLLECTION\\",\\"id\\":\\"910E0555-0C0D-404A-8A35-AFB031CCD786\\",\\"name\\":\\"Shared Files 10 Nov 2020\\"},\\"relatedResources\\":[{\\"id\\":\\"01347969-4511-4C7F-A0D2-6395839DD2CF\\",\\"name\\":\\"Social security card\\",\\"type\\":\\"DOCUMENT\\"},{\\"id\\":\\"BC1032DC-9ED6-4C01-AF47-F909FACAB9F0\\",\\"name\\":\\"Water bill\\",\\"type\\":\\"DOCUMENT\\"},{\\"id\\":\\"D64C50F4-FFB2-4B51-A1D0-4D45DA4EA82B\\",\\"name\\":\\"mycityagent2@nyc.gov\\",\\"type\\":\\"COLLECTION.INDIVIDUAL_EMAIL_GRANT\\"}]},{\\"date\\":\\"2020-10-30T15:43:00.000Z\\",\\"principal\\":{\\"id\\":\\"694052A1-8E17-46AA-92BB-35F2AB2144EB\\",\\"name\\":\\"felix@ny.gov\\"},\\"requestId\\":\\"BC9DFD18-A001-4462-A7FD-4571F6598B50\\",\\"type\\":\\"DOCUMENT.ACCESSED\\",\\"resource\\":{\\"id\\":\\"01347969-4511-4C7F-A0D2-6395839DD2CF\\",\\"name\\":\\"Social security card\\",\\"type\\":\\"DOCUMENT\\"}},{\\"date\\":\\"2020-10-30T15:43:00.000Z\\",\\"principal\\":{\\"id\\":\\"694052A1-8E17-46AA-92BB-35F2AB2144EB\\",\\"name\\":\\"felix@ny.gov\\"},\\"requestId\\":\\"11471E8F-9DF5-4016-812B-601FA631A390\\",\\"type\\":\\"DOCUMENT.ACCESSED\\",\\"resource\\":{\\"id\\":\\"BC1032DC-9ED6-4C01-AF47-F909FACAB9F0\\",\\"name\\":\\"Water bill\\",\\"type\\":\\"DOCUMENT\\"},\\"relatedResources\\":[{\\"id\\":\\"2E9430A6-0045-4C1F-83FF-5701EA717177\\",\\"name\\":\\"page1.png\\",\\"type\\":\\"DOCUMENT.FILE\\"}]},{\\"date\\":\\"2020-10-30T15:43:00.000Z\\",\\"principal\\":{\\"id\\":\\"694052A1-8E17-46AA-92BB-35F2AB2144EB\\",\\"name\\":\\"felix@ny.gov\\"},\\"requestId\\":\\"FB605889-4E76-4E4F-A42F-FD2B4E084040\\",\\"type\\":\\"DOCUMENT.ACCESSED\\",\\"resource\\":{\\"id\\":\\"BC1032DC-9ED6-4C01-AF47-F909FACAB9F0\\",\\"name\\":\\"Water bill\\",\\"type\\":\\"DOCUMENT\\"},\\"relatedResources\\":[{\\"id\\":\\"2E9430A6-0045-4C1F-83FF-5701EA717177\\",\\"name\\":\\"page2.png\\",\\"type\\":\\"DOCUMENT.FILE\\"}]},{\\"date\\":\\"2020-09-28T04:12:00.000Z\\",\\"principal\\":{\\"id\\":\\"myUserId\\",\\"name\\":\\"jcitizen@example.com\\"},\\"requestId\\":\\"B94A9045-E141-46F8-9541-76224B1A7C8C\\",\\"type\\":\\"COLLECTION.CREATED\\",\\"resource\\":{\\"type\\":\\"COLLECTION\\",\\"id\\":\\"910E0555-0C0D-404A-8A35-AFB031CCD786\\",\\"name\\":\\"Shared Files 10 Nov 2020\\"},\\"relatedResources\\":[{\\"id\\":\\"01347969-4511-4C7F-A0D2-6395839DD2CF\\",\\"name\\":\\"Social security card\\",\\"type\\":\\"DOCUMENT\\"},{\\"id\\":\\"BC1032DC-9ED6-4C01-AF47-F909FACAB9F0\\",\\"name\\":\\"Water bill\\",\\"type\\":\\"DOCUMENT\\"},{\\"id\\":\\"D64C50F4-FFB2-4B51-A1D0-4D45DA4EA82B\\",\\"name\\":\\"mycityagent1@nyc.gov\\",\\"type\\":\\"COLLECTION.INDIVIDUAL_EMAIL_GRANT\\"}]},{\\"date\\":\\"2020-09-15T06:20:00.000Z\\",\\"principal\\":{\\"id\\":\\"83B7646C-0275-41BC-8800-DC0246BEE3E7\\",\\"name\\":\\"sharon.harrison@cbo.org\\"},\\"requestId\\":\\"CE304856-934A-4D69-BD21-9BDBB747BC68\\",\\"type\\":\\"DOCUMENT.CREATED\\",\\"resource\\":{\\"id\\":\\"BC1032DC-9ED6-4C01-AF47-F909FACAB9F0\\",\\"name\\":\\"Water bill\\",\\"type\\":\\"DOCUMENT\\"}},{\\"date\\":\\"2020-09-15T06:15:00.000Z\\",\\"principal\\":{\\"id\\":\\"83B7646C-0275-41BC-8800-DC0246BEE3E7\\",\\"name\\":\\"sharon.harrison@cbo.org\\"},\\"requestId\\":\\"20367095-6E95-4553-B938-469D99243608\\",\\"type\\":\\"DOCUMENT.EDITED\\",\\"resource\\":{\\"id\\":\\"01347969-4511-4C7F-A0D2-6395839DD2CF\\",\\"name\\":\\"SSN\\",\\"type\\":\\"DOCUMENT\\",\\"changes\\":[{\\"field\\":\\"name\\",\\"newValue\\":\\"Social security card\\",\\"oldValue\\":\\"SSN\\"}]}},{\\"date\\":\\"2020-09-15T06:10:00.000Z\\",\\"principal\\":{\\"id\\":\\"myUserId\\",\\"name\\":\\"jcitizen@example.com\\"},\\"requestId\\":\\"AFED2B60-90A5-4F2D-BDE9-8B448FB22A45\\",\\"type\\":\\"DOCUMENT.CREATED\\",\\"resource\\":{\\"id\\":\\"01347969-4511-4C7F-A0D2-6395839DD2CF\\",\\"name\\":\\"SSN\\",\\"type\\":\\"DOCUMENT\\"}}],\\"nextToken\\":\\"backwards\\"}",
        "cookies": Array [],
        "headers": Object {
          "Content-Type": "application/json",
        },
        "isBase64Encoded": false,
        "statusCode": 200,
      }
    `)
  })
})
