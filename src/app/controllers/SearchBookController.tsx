import React from 'react';
import View from '../views/Search/index';

interface Props {
  viewModel: any,
  navigate: any,
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
  statusLoadingEasy: boolean,
  select: number | string,
}

export default class SearchBookController extends React.Component<Props
  , IState
> {
  state = {
    nameBook: '',
    bookList: '',
    statusLoading: false,
    statusLoadingEasy: false,
    modal: false,
    modalResult: false,
    bookAdd: '',
    addBookError: true,
    addBookcomplete: false,
    select: '',
  };

  componentDidMount = () => {
    this.searchBook(null);
    this.getAccount()
  }

  private getAccount = async () => {
    const tokenLocal = await localStorage.getItem('Access_token');
    const tokenSession = await sessionStorage.getItem('Access_token');
    if (!tokenLocal && !tokenSession) {
      this.props.navigate("/");
    }
  }

  private searchBook = async (e: any) => {
    this.setState({
      addBookError: true,
      addBookcomplete: false,
      bookList: '',
    });
    e?.preventDefault();
    this.setState({ statusLoading: true });
    const result = await this.props.viewModel.searchBook(this.state.nameBook, this.state.select);
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

  private select = async (e: any) => {
    await this.setState({ select: e.target.value })
    this.searchBook(null)
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

    this.setState({ statusLoadingEasy: true });
    const statusAddBook = await this.props.viewModel.addBook(dataBook);
    this.setState({
      modalResult: false,
      bookAdd: '',
      statusLoadingEasy: false,
      addBookError: statusAddBook.status,
      addBookcomplete: statusAddBook.status
    });

    setTimeout(() => {
      this.setState({
        addBookError: true,
        addBookcomplete: false
      });
    }, 5000);
  };

  render() {
    return (
      <View
        searchBook={this.searchBook}
        select={this.select}
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

