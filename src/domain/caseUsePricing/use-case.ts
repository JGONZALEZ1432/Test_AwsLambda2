import { IDataAccessLayer } from '../../repositoryService/data-access-layer';

interface ICreateItemUseCase {
  execute(id: string, brand: string, model: string, series: string, color: string): Promise<any>;
}

class CreateItemUseCase implements ICreateItemUseCase {
  private dataAccessLayer: IDataAccessLayer;

  constructor(dataAccessLayer: IDataAccessLayer) {
    this.dataAccessLayer = dataAccessLayer;
  }

  async execute(id: string, brand: string, model: string, series: string, color: string): Promise<any> {
    const item = await this.dataAccessLayer.createItem(id, brand, model, series, color);

    if (!item) {
      throw new Error('Item not found');
    }

    return item;
  }
}

export { ICreateItemUseCase, CreateItemUseCase };
