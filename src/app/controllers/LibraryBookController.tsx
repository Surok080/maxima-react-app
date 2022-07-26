import React from 'react';
import View from '../views/Library/index';

interface Props {
  navigate: any,
  viewModel: any,
  favorite: boolean,
}

interface IState {
  bookListUser: string,
  modal: boolean,
  bookDelId: object | string,
  statusLoading: boolean,
  nameBook: string,
  bookListUserAll: any,
}

export default class LibraryBookController extends React.Component<Props, IState> {

  state = {
    bookListUser: '',
    modal: false,
    bookDelId: '',
    statusLoading: false,
    nameBook: '',
    bookListUserAll: '',
  };

  componentDidMount() {
    this.getAccount()
    this.getListBook();
  }

  private getAccount = async () => {
    const tokenLocal = await localStorage.getItem('Access_token');
    const tokenSession = await sessionStorage.getItem('Access_token');
    if (!tokenLocal && !tokenSession) {
      this.props.navigate("/");
    }
  }

  private getListBook = async () => {
    const result = await this.props.viewModel.getListBook();
    this.setState({
      bookListUser: result.data,
      bookListUserAll: result.data,
      statusLoading: false
    });
  };

  private toogleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  private infoBook = (data: any) => {
    localStorage.setItem('id-book-info', JSON.stringify(data.dataset.id));
    localStorage.setItem('favorite', JSON.stringify(data.dataset.favorite));
    this.props.navigate("/info");
  };

  private modalResult = (data: any) => {
    this.setState({
      modal: !this.state.modal,
      bookDelId: data,
    });
  };

  private deleteBook = async () => {
    this.setState({ statusLoading: true });
    this.toogleModal();
    const bookDelId: any = this.state.bookDelId;
    await this.props.viewModel.deleteBook(bookDelId.dataset.id);
    this.setState({ bookDelId: '' });
    this.getListBook();
  };

  private addFavoriteBook = async (item: any) => {
    this.setState({ statusLoading: true });
    const bookFavoriteID: string = item.dataset.id;
    let bookFavoriteToggle: number = +item.dataset.favorite;

    bookFavoriteToggle ? bookFavoriteToggle = 0 : bookFavoriteToggle = 1;
    await this.props.viewModel.addFavoriteBook(bookFavoriteID, bookFavoriteToggle);
    this.setState({ bookDelId: '' });
    this.getListBook();
  };

  searchBook = () => {
    const Debounce = setTimeout(() => {
      const filteredBooks = this.filterBooks(this.state.nameBook, this.state?.bookListUser);
      this.setState({ bookListUser: filteredBooks })
    }, 300);
    return () => clearTimeout(Debounce);
  };

  private filterBooks = (searchText: string, listOfBooks: any) => {
    if (!searchText) {
      return this.state.bookListUserAll;
    };
    return listOfBooks.filter(({ title }) =>
      title.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  handleChange = (e: string) => {
    this.setState({
      nameBook: e,
    })

    const Debounce = setTimeout(() => {
      const filteredBooks = this.filterBooks(this.state.nameBook, this.state?.bookListUserAll);
      this.setState({ bookListUser: filteredBooks })
    }, 100);
    return () => clearTimeout(Debounce);
  };

  clearInput = () => {
    this.setState({
      nameBook: '',
      bookListUser: this.state.bookListUserAll,
    })
  };

  render() {

    return (
      <View
        favorite={this.props.favorite}
        searchBook={this.searchBook}
        handleChange={this.handleChange}
        toogleModal={this.toogleModal}
        modalResult={this.modalResult}
        infoBook={this.infoBook}
        addFavoriteBook={this.addFavoriteBook}
        deleteBook={this.deleteBook}
        clearInput={this.clearInput}
        state={this.state}
      />
    );
  }
}
