import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { CreateItemController } from './src/controller';
import { DynamoDataAccessLayer } from './src/repositoryService/data-access-layer';
import { CreateItemUseCase } from './src/domain/caseUsePricing/use-case';
import { Constants } from './src/utils/Constants';

const tableName = Constants.TABLE_NAME;

const dataAccessLayer = new DynamoDataAccessLayer(tableName);
const createItemUseCase = new CreateItemUseCase(dataAccessLayer);
const createItemController = new CreateItemController(createItemUseCase);

export async function handler(
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> {
  return createItemController.handle(event);
}
