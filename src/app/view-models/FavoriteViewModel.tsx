import BookModel from '../models/BookModel';

export default class FavoriteViewModel {
  private bookModel: any;

  constructor() {
    this.bookModel = new BookModel();
  }

  async getListBook() {
    const resultBookList = await this.bookModel.getListBook();
    return resultBookList;
  }

  async deleteBook(id: string) {
    await this.bookModel.deleteBook(id);
  }

  async addFavoriteBook(id: string, toogle: any) {
    await this.bookModel.addFavoriteBook(id, toogle);
  }

}
