import React from 'react';
import { Input } from '../../../components/Input';
import { ButtonView } from '../../../components/ButtonView';
import { icon } from '../../img';

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
      <div className='flex-1 h-full pt-7 relative px-11 h-screen'>
        {this.props.state.errorReg ? <div className='bg-red-700 w-4/5 max-w-xs m-auto absolute top-7 left-0 right-0 p-3 flex text-white'>
          <img className='object-contain mr-3' src={icon} alt="" />
          {this.props.state.alerMessage}
        </div> : ''}
        <h1 className=" text-4xl font-normal font-encode mt-44 text-left">
          Login
        </h1>
        <form
          className="flex flex-col mt-12"
        >
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
          <ButtonView
            className={" mb-5 bg-sky-600 p-3 rounded text-white mt-12"}
            onClick={this.props.handleSubmit}
            dataTitle={this.props.state.status ? 'SUBMIT' : 'Loading'}
          />
          <ButtonView
            className={" mb-5 bg-sky-900 p-3 rounded text-white"}
            onClick={this.props.goToRegistration}
            dataTitle={'REGISTRATION'}
          />
        </form>
      </div>

    );
  }
}
