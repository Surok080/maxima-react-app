export default class BookModel {

  urlBackEnd = 'https://internsapi.public.osora.ru/api/book/';

  async searchBook(data: string | any, category: string) {
    if (!data) {
      data = `startIndex=${Math.floor(Math.random() * 100)}&`;
    }
    if (category) {
      data += `,subject=${category}`
    }
    const urlLog = `https://www.googleapis.com/books/v1/volumes?q=${data}`;
    return this.fetchRequest(urlLog);
  }

  async getListBook() {
    let accessToken: any = localStorage.getItem('Access_token');
    if (!accessToken) {
      accessToken = sessionStorage.getItem('Access_token');
    }
    const parseToken: string | null = await JSON.parse(accessToken);
    const urlAllBookUser = `${this.urlBackEnd}list`;

    return this.fetchRequest(urlAllBookUser, `Bearer ${parseToken}`);
  }

  async addBook(data: any) {
    let accessToken: any = localStorage.getItem('Access_token');
    if (!accessToken) {
      accessToken = sessionStorage.getItem('Access_token');
    }
    const urlAddBook = `${this.urlBackEnd}add`;
    const parseToken: string | null = JSON.parse(accessToken);

    return await this.fetchRequest(urlAddBook, `Bearer ${parseToken}`, 'POST', JSON.stringify(data));
  }

  async deleteBook(id: string) {
    let accessToken: any = localStorage.getItem('Access_token');
    if (!accessToken) {
      accessToken = sessionStorage.getItem('Access_token');
    }
    const parseToken: string | null = JSON.parse(accessToken);
    const urlDelBookUser = `${this.urlBackEnd}destroy/${id}`;

    return this.fetchRequest(urlDelBookUser, `Bearer ${parseToken}`, 'GET');
  }

  async addFavoriteBook(id: string, toogle: any) {
    let accessToken: any = localStorage.getItem('Access_token');
    if (!accessToken) {
      accessToken = sessionStorage.getItem('Access_token');
    }
    const parseToken: string | null = JSON.parse(accessToken);
    const urlDelBookUser = `${this.urlBackEnd}update/${id}?`;
    const data = {
      favorite: toogle,
    };
    return (
      this.fetchRequest(urlDelBookUser, `Bearer ${parseToken}`, 'POST', JSON.stringify(data))
    );
  }

  async getBookInfo() {
    let accessToken: any = localStorage.getItem('Access_token');
    if (!accessToken) {
      accessToken = sessionStorage.getItem('Access_token');
    }
    const parseToken: string | null = JSON.parse(accessToken);
    const idBook: any = localStorage.getItem('id-book-info');
    const parseIdBook: string | null = JSON.parse(idBook);
    const favoriteBook: any = localStorage.getItem('favorite');
    const parseFavoriteBook: string | null = JSON.parse(favoriteBook);

    const urlDelBookUser = `${this.urlBackEnd}update/${parseIdBook}?`;
    const data = {
      favorite: parseFavoriteBook,
    };

    return this.fetchRequest(urlDelBookUser, `Bearer ${parseToken}`, 'POST', JSON.stringify(data));
  }

  async fetchRequest(url: string, token?: any, method: any = 'GET', bodyJson?: any) {
    const response = await fetch(url, {
      method: method,
      body: bodyJson,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Authorization": token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
          return false;
        } else {
          return data;
        }
      });
    return response;
  }
}

