import React from 'react';
import  Input from '../../../components/Input';
import { ButtonView } from '../../../components/ButtonView';
import { icon } from '../../img';
import '../../style/style.scss';
import { connect } from 'react-redux';

interface Props {
  handleChange: any,
  handleSubmit: any,
  goToLogin: any,
  state: any,
  them: any,
}

class RegistrationView extends React.Component<Props>{

  render() {

    return (
      <div className={`registration ${this.props.them === 'dark' ? 'backgroundDark' : null}`}>
        {this.props.state.errorReg ? <div className='errorAuthoraze'>
          <img className='errorAuthoraze__image' src={icon} alt="" />
          {this.props.state.alerMessage}
        </div> : null}
        <h1 className="registration__title">
          Registration
        </h1>
        <form
          className="registration__form"
        >
          <Input
            type='text'
            placeholder="username"
            name="username"
            dataState={this.props.state.username}
            input={this.props.handleChange}
          />
          <Input
            type='email'
            placeholder="email"
            name='email'
            dataState={this.props.state.email}
            input={this.props.handleChange}
          />
          <Input
            type='password'
            placeholder="пароль"
            name='password'
            dataState={this.props.state.password}
            input={this.props.handleChange}
          />
          <Input
            type='password'
            placeholder="пароль еще раз"
            name='password_confirmation'
            dataState={this.props.state.password_confirmation}
            input={this.props.handleChange}
          />
          <ButtonView
            className={"registration__button blueButton mt-12"}
            onClick={this.props.handleSubmit}
            dataTitle={this.props.state.status ? 'SUBMIT' : 'Loading'}
          />
          <ButtonView
            className={"registration__button skyButton"}
            onClick={this.props.goToLogin}
            dataTitle={'LOGIN'}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    them: state.them,
  }
}

export default connect(mapStateToProps)(RegistrationView)
