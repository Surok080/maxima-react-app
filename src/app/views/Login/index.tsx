import React from 'react';
import { Input } from '../../../components/Input';
import { ButtonView } from '../../../components/ButtonView';
import { icon } from '../../img';
import '../../style/style.scss';

interface Props {
  navigate: any,
  handleSubmit: any,
  handleChange: any,
  goToRegistration: any,
  state: any,
}

export default class LoginView extends React.Component<Props>{
  render() {

    return (
      <div className='login'>
        {this.props.state.errorReg ? <div className='errorAuthoraze'>
          <img className='object-contain mr-3' src={icon} alt='' />
          {this.props.state.alerMessage}
        </div> : ''}
        <h1 className='login__title'>
          Login
        </h1>
        <form
          className='login__form'
        >
          <Input
            type='email'
            placeholder='email'
            name='email'
            dataState={this.props.state.email}
            input={this.props.handleChange}
          />
          <Input
            type='password'
            placeholder='пароль'
            name='password'
            dataState={this.props.state.password}
            input={this.props.handleChange}
          />
          <ButtonView
            className={'login__button blueButton mt-12'}
            onClick={this.props.handleSubmit}
            dataTitle={this.props.state.status ? 'SUBMIT' : 'Loading'}
          />
          <ButtonView
            className={'login__button skyButton'}
            onClick={this.props.goToRegistration}
            dataTitle={'REGISTRATION'}
          />
        </form>
      </div>

    );
  }
}
