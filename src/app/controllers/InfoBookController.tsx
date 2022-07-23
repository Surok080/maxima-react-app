import React from 'react';
import View from '../views/InfoBook/index';

interface Props {
  viewModel: any,
  navigate: any,
}

interface IState {
  statusLoading: boolean,
  bookName: string,
  bookAuthors: string,
  bookText: string,
}

export default class InfoBookController extends React.Component<Props, IState> {

  state = {
    statusLoading: false,
    bookName: '',
    bookAuthors: '',
    bookText: '',
  };

  componentDidMount() {
    this.getAccount();
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
    this.setState({ statusLoading: true });
    const infoBook = await this.props.viewModel.getBookInfo();
    this.setState({ 
      bookName: infoBook.data.title,
      bookAuthors: infoBook.data.authors,
      bookText: infoBook.data.description,
      statusLoading: false
    });
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
        searchBook={this.searchBook}
        handleChange={this.handleChange}
        clearInput={this.clearInput}
        state={this.state}
      />
    );
  }
}
