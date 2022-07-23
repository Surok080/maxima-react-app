import BookModel from '../models/BookModel';

export default class SettingsViewModel {
  private bookModel: any;

  constructor() {
    this.bookModel = new BookModel();
  }
  
  async getBookInfo() {
    const resultBookList = await this.bookModel.getBookInfo();
    return resultBookList;
  }
}

