import BookModel from '../models/BookModel';

export default class SearchViewModel {
  private bookModel: any;

  constructor() {
    this.bookModel = new BookModel();
  }

  async searchBook(data: string) {
    const resultBookList = await this.bookModel.searchBook(data);
    return resultBookList;
  }

  async addBook(data: any) {
    return await this.bookModel.addBook(data);
  }
}
