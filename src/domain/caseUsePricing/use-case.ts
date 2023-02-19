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
    await this.dataAccessLayer.createItem(id, brand, model, series, color);
  }
}

export { ICreateItemUseCase, CreateItemUseCase };
