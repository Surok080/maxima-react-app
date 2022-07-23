import React from 'react';
import View from '../views/Settings/index';
import { connect } from 'react-redux';
import { user } from '../redux/actionTypes';
import { slaiderContent } from '../redux/actionTypes';

interface Props {
  viewModel: any,
  navigate: any,
  url: any,
  slaiderContent:any,
}

interface IState {
  statusLoading: boolean,
  bookName: string,
  bookAuthors: string,
  bookText: string,
}

class SettingsController extends React.Component<Props, IState> {

  state = {
    statusLoading: false,
    bookName: '',
    bookAuthors: '',
    bookText: '',
  };

  componentDidMount() {
    this.props.slaiderContent(1111111111);
    this.getAccount();
    console.log(this.props.url);
  }

  private getAccount = async () => {
    const tokenLocal = await localStorage.getItem('Access_token');
    const tokenSession = await sessionStorage.getItem('Access_token');
    if (!tokenLocal && !tokenSession) {
      this.props.navigate("/");
    }
  }

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

const mapStateToProps = (state: any) => {
  return {
    url: state.urlArray,
  }
}

const mapDispatchToProps = () => {
  return {
    slaiderContent
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(SettingsController)
