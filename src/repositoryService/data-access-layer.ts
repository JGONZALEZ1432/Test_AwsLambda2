import { DynamoDB } from 'aws-sdk';
import { IDataAccessLayer } from '../domain/request-model/requestModelInput';

class DynamoDataAccessLayer implements IDataAccessLayer {
  private dynamoClient: DynamoDB.DocumentClient;
  private tableName: string;

  constructor(tableName: string) {
    this.dynamoClient = new DynamoDB.DocumentClient();
    this.tableName = tableName;
  }

  async createItem(id: string, brand: string, model: string, series: string, color: string ): Promise<any> {
    const params = {
      TableName: this.tableName,
      Item :{'id':id,'brand':brand,'model':model,'series':series,'color':color}
    };
     await this.dynamoClient.put(params).promise();
  }
}
export { IDataAccessLayer, DynamoDataAccessLayer };
