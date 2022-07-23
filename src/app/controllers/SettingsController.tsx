import React from 'react';
import View from '../views/Settings/index';
import { connect } from 'react-redux';
import { slaiderContent, toogleThema } from '../redux/actionTypes';

interface Props {
  viewModel: any,
  navigate: any,
  url: any,
  user: any,
  them: any,
  slaiderContent: any,
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
    radio: 'a',
  };

  componentDidMount() {
    this.getAccount();
    this.setState({radio: this.props.them})
    console.log(this.props.them);
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

  radioToggle = (e:any) => {
    this.setState({ radio : e.target.value});
    this.props.toogleThema(e.target.value);
    this.props.slaiderContent(e.target.value);
    console.log(this.props.url);
    console.log(this.props.them);
  };

  render() {

    return (
      <View
        searchBook={this.searchBook}
        handleChange={this.handleChange}
        clearInput={this.clearInput}
        state={this.state}
        radioToggle={this.radioToggle}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    url: state.urlArray,
    user: state.user,
    them: state.them,
  }
}

const mapDispatchToProps = () => {
  return {
    slaiderContent,
    toogleThema
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(SettingsController)
