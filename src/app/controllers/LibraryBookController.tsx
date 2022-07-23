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
}

export default class LibraryBookController extends React.Component<Props, IState> {

  state = {
    bookListUser: '',
    modal: false,
    bookDelId: '',
    statusLoading: false,
  };

  componentDidMount() {
    this.getListBook();
  }

  private getListBook = async () => {
    const result = await this.props.viewModel.getListBook();
    this.setState({ 
      bookListUser: result,
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
    console.log('test');
  };

  handleChange = () => {
    console.log('test');
  };

  clearInput = () => {
    console.log('test');
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
