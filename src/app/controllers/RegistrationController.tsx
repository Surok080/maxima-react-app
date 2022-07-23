import React from 'react';
import View from '../views/Registration/index';

interface Props {
  navigate: any,
}

interface IState {
  username: string,
  email: string,
  password: string,
  password_confirmation: string,
  status: any,
  errorReg: any,
  alerMessage: string,
}

export default class RegistrationController extends React.Component<Props, IState> {
  state = {
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    status: true,
    errorReg: false,
    alerMessage: 'problem',
  };

  private handleChange = (value: string, nameState: string) => {
    this.setState({
      [nameState]: value,
      errorReg: false,
      alerMessage: 'problem',
    } as Pick<IState, keyof IState>);
  };

  private handleSubmit = (e: any) => {
    const urlReg = 'https://internsapi.public.osora.ru/api/auth/signup';
    const regExpEmail = /\S+@\S+\.\S+/;


    e.preventDefault();
    this.setState({
      status: false,
      errorReg: false,
      alerMessage: '',
    });

    if (!this.state.username || !(/[a-zA-Z]/.test(this.state.username)) || this.state.username.length < 3) {
      this.errorRegistration('ERROR-userName. Имя должно быть больше 3-х сиволов и не латиницей');
      return;
    }
    if (!regExpEmail.test(this.state.email)) {
      this.errorRegistration('ERROR-email');
      return;
    }
    if (!this.state.password || this.state.password.length > 3 || (this.state.password.toLocaleLowerCase() === this.state.password)) {
      this.errorRegistration('ERROR-password. Должна быть хоть одна заглавная и больше 3-х символов');
      return;
    }
    if (!(this.state.password === this.state.password_confirmation)) {
      this.errorRegistration('ERROR-password. Пароли не совпадают');
      return;
    }

    this.registrationApiUser(this.setStateUserInfo(), urlReg);
  };

  private registrationApiUser = (userData: any, urlReg: string) => {
    fetch(urlReg, {
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
          this.goToLogin();
        } else {
          const error = data.errors[Object.keys(data.errors)[0]];
          this.errorRegistration();
          this.setState({
            alerMessage: error[Object.keys(error)[0]],
            errorReg: true
          });
        }
      });
  };

  private errorRegistration = (textError = 'error registration') => {
    this.setState({
      status: true,
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errorReg: true,
      alerMessage: textError,
    });
  };

  private goToLogin = () => {
    this.props.navigate("/");
  };

  private setStateUserInfo = () => {
    const data = {
      name: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    };
    return data;
  };

  render() {

    return (
      <View
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        goToLogin={this.goToLogin}
        state={this.state}
      />
    );
  }
}

