import React from 'react';
import FooterNav from '../../../components/FooterNav';
import Header from '../../../components/Header';
import ReactLoading from 'react-loading';
import '../../style/style.scss';
import Radio from '@mui/material/Radio';
import { ButtonView } from '../../../components/ButtonView';
import { connect } from 'react-redux';


interface Props {
  searchBook: any,
  handleChange: any,
  state: any,
  clearInput: any,
  radioToggle: any,
  goOut: any,
  them: any,
}

class Settings extends React.Component<Props>{

  

  render() {
    return (
      <div
        className={`container ${this.props.them === 'dark' ? 'backgroundDark' : null}`}
      >
        <Header type={true} title={'Settings'} searchBook={this.props.searchBook} handleChange={this.props.handleChange} state={this.props.state} clearInput={this.props.clearInput} />

        <main className='infoBook pt-28 m-auto'>

          {this.props.state.statusLoading ? <ReactLoading type='balls' color='#5C426C' height='100%' width='100%' /> : null}

          <Radio
            checked={this.props.them === 'light'}
            onChange={(e) => this.props.radioToggle(e)}
            value="light"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'A' }}
            sx={{
              color: 'white',
              '&.Mui-checked': {
                color: 'black',
              },
            }}
          />
          <Radio
            checked={this.props.them === 'dark'}
            onChange={(e) => this.props.radioToggle(e)}
            value="dark"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
            sx={{
              color: 'black',
              '&.Mui-checked': {
                color: 'white',
              },
            }}
          />
          <div className={`infoBook__bookAuthors ${this.props.them === 'light' ? 'backgroundDark' : null }`}>
            Тема
          </div>

        </main>
        <ButtonView
            className={`login__button ${this.props.them === 'light' ? 'blueButton' : 'skyButton' }`}
            onClick={this.props.goOut}
            dataTitle={'GO OUT'}
          />
        <FooterNav />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    them: state.them,
  }
}

export default connect(mapStateToProps)(Settings)
