import BookModel from '../models/BookModel';

export default class LibraryViewModel {
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
    return (
      await this.bookModel.addFavoriteBook(id, toogle)
    );
  }
}
