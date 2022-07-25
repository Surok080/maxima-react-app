import React from 'react';
import View from '../views/Login/index';

interface Props {
  navigate: any,
}

interface IState {
  email: any,
  password: any,
  status: any,
  alerMessage: any,
  errorReg: any,
  checked: boolean,
}

export default class LoginController extends React.Component<Props, IState> {

  state = {
    email: '',
    password: '',
    status: true,
    alerMessage: '',
    errorReg: false,
    checked: false,
  };

  componentDidMount = () => {
    this.getAccount()
  }

  private getAccount = async () => {
    const tokenLocal = await localStorage.getItem('Access_token');
    const tokenSession = await sessionStorage.getItem('Access_token');
    if (tokenLocal || tokenSession) {
      this.props.navigate("/search");
    }
  }

  private handleChange = (value: string, nameState: string) => {
    this.setState({
      [nameState]: value,
      errorReg: false,
      alerMessage: '',
    } as Pick<IState, keyof IState>);
  };

  private checkboxChange = (e: any) => {
    this.setState({ checked: e.target.checked });
  };

  private handleSubmit = (e: any) => {
    const regExpEmail = /\S+@\S+\.\S+/;
    const urlLog = 'https://internsapi.public.osora.ru/api/auth/login';

    e.preventDefault();
    this.setState({
      status: false,
      errorReg: false,
      alerMessage: ''
    });

    if (!regExpEmail.test(this.state.email)) {
      this.loginReg();
      this.setState({
        alerMessage: 'ERROR-email',
        errorReg: true
      });
      return;
    }

    this.loginApiUser(this.setStateUser(), urlLog);
  };

  private loginApiUser = (userData: any, urlLog: string) => {
    fetch(urlLog, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status) {
          this.setState({ status: true });
          if (this.state.checked) {
            localStorage.setItem('Access_token', JSON.stringify(data.data.access_token));
          } else {
            sessionStorage.setItem('Access_token', JSON.stringify(data.data.access_token));
          }
          
          this.props.navigate("/search");

        } else {
          this.loginReg();
          this.setState({
            alerMessage: data.errors,
            errorReg: true
          });
        }
      });
  };

  private setStateUser = () => {
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    return data;
  };

  private loginReg = () => {
    this.setState({
      status: true,
      email: '',
      password: '',
    });
  };

  goToRegistration = () => {
    this.props.navigate("/registration");
  };

  render() {
    return (
      <View
        navigate={this.props.navigate}
        handleSubmit={this.handleSubmit}
        checkboxChange={this.checkboxChange}
        handleChange={this.handleChange}
        goToRegistration={this.goToRegistration}
        state={this.state}
      />
    );
  }
}
