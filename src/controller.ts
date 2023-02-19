import { APIGatewayProxyEvent} from 'aws-lambda';
import { ICreateItemUseCase } from './domain/caseUsePricing/use-case';
import { Message } from './utils/Constants';

class CreateItemController {
  private createItemUseCase: ICreateItemUseCase;

  constructor(createItemUseCase: ICreateItemUseCase) {
    this.createItemUseCase = createItemUseCase;
  }

  async handle(event: APIGatewayProxyEvent): Promise<any> {
    try {
      const { id, brand, model, series, color } = event.queryStringParameters;
      const item = await this.createItemUseCase.execute(id, brand, model, series, color );

      return {
        statusCode: 200,
        body: JSON.stringify(item),
      };
    } catch (error) {
      console.error(error);      
      return Message._500_UNCONTROLLED_ERROR;
    }
  }
}

export { CreateItemController };
