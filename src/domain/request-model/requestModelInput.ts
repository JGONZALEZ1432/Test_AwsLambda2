export interface IDataAccessLayer {
    createItem(id: string, brand: string, model: string, series: string, color: string): Promise<any>;
  }