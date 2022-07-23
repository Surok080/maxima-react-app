import React from 'react';
import View from '../views/Search/index';

interface Props {
  viewModel: any,
}

interface IState {
  nameBook: string,
  bookList: any,
  statusLoading: any,
  modal: any,
  modalResult: any,
  bookAdd: any,
  addBookError: boolean,
  addBookcomplete: boolean,
}

export default class SearchBookController extends React.Component<Props
  , IState
> {
  state = {
    nameBook: '',
    bookList: '',
    statusLoading: false,
    modal: false,
    modalResult: false,
    bookAdd: '',
    addBookError: true,
    addBookcomplete: false,
  };

  private searchBook = async (e: any) => {
    this.setState({
      addBookError: true,
      addBookcomplete: false
    });
    e.preventDefault();
    this.setState({ statusLoading: true });
    const result = await this.props.viewModel.searchBook(this.state.nameBook);
    this.setState({
      bookList: result,
      statusLoading: false
    });
  };

  private handleChange = (value: string) => {
    this.setState({
      addBookError: true,
      addBookcomplete: false,
      nameBook: value
    });
  };

  private clearInput = () => {
    this.setState({
      nameBook: '',
      bookList: ''
    });
  };

  private toogleModal = () => {
    this.setState({
      modal: !this.state.modal,
      bookAdd: '',
    });
  };

  private modalResult = (data: any) => {
    this.setState({
      modal: !this.state.modal,
      bookAdd: data
    });
  };

  private addBook = async () => {
    this.toogleModal();

    const data: any = this.state.bookAdd;
    const dataBook = {
      title: data.dataset.title,
      authors: data.dataset.authors,
      description: data.dataset.description,
      favorite: 0,
      uid: data.dataset.uid,
    };

    this.setState({ statusLoading: true });
    const statusAddBook = await this.props.viewModel.addBook(dataBook);
    this.setState({
      modalResult: false,
      bookAdd: '',
      statusLoading: false,
      addBookError: statusAddBook.status,
      addBookcomplete: statusAddBook.status
    });
  };

  render() {

    return (
      <View
        searchBook={this.searchBook}
        handleChange={this.handleChange}
        clearInput={this.clearInput}
        toogleModal={this.toogleModal}
        modalResult={this.modalResult}
        addBook={this.addBook}
        state={this.state}
      />
    );
  }
}

