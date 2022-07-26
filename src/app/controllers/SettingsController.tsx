import React from 'react';
import View from '../views/Settings/index';
import { connect } from 'react-redux';
import { toogleThema } from '../redux/actionTypes';

interface Props {
  navigate: any,
  them: any,
  toogleThema: any,
}

interface IState {
  statusLoading: boolean,
  bookName: string,
  bookAuthors: string,
  bookText: string,
  radio: any,
}

class SettingsController extends React.Component<Props, IState> {

  state = {
    statusLoading: false,
    bookName: '',
    bookAuthors: '',
    bookText: '',
    radio: '',
  };

  componentDidMount() {
    this.getAccount();
    this.setState({ radio: this.props.them })
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

  radioToggle = (e: any) => {
    this.setState({ radio: e.target.value });
    this.props.toogleThema(e.target.value);
  };

  goOut = () => {
    localStorage.removeItem('Access_token');
    sessionStorage.removeItem('Access_token');
    this.props.navigate("/");
  };

  render() {

    return (
      <View
        searchBook={this.searchBook}
        handleChange={this.handleChange}
        clearInput={this.clearInput}
        state={this.state}
        radioToggle={this.radioToggle}
        goOut={this.goOut}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    them: state.them,
  }
}

const mapDispatchToProps = () => {
  return {
    toogleThema
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(SettingsController)
