import React from 'react';
import  Input  from '../../../components/Input';
import { ButtonView } from '../../../components/ButtonView';
import Checkbox from '@mui/material/Checkbox';
import { icon } from '../../img';
import '../../style/style.scss';
import { connect } from 'react-redux';

interface Props {
  navigate: any,
  handleSubmit: any,
  checkboxChange: any,
  handleChange: any,
  goToRegistration: any,
  state: any,
  them: any,
}

class LoginView extends React.Component<Props>{
  render() {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
      <div className={`login ${this.props.them === 'dark' ? 'backgroundDark' : null}`}>
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
          <div>
            <Checkbox {...label}
              sx={{
                color: `${this.props.them === 'dark' ? 'white' : 'black'}`,
                '&.Mui-checked': {
                  color: `${this.props.them === 'dark' ? 'orange' : 'black'}`,
                },
              }}
              defaultChecked={false}
              onChange={(e) => this.props.checkboxChange(e)
              }
            />
            Оставаться в системе
          </div>

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

const mapStateToProps = (state: any) => {
  return {
    them: state.them,
  }
}

export default connect(mapStateToProps)(LoginView)
