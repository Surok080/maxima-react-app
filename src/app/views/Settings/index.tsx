import React from 'react';
import FooterNav from '../../../components/FooterNav';
import Header from '../../../components/Header';
import ReactLoading from 'react-loading';
import '../../style/style.scss';
import Radio from '@mui/material/Radio';


interface Props {
  searchBook: any,
  handleChange: any,
  state: any,
  clearInput: any,
  radioToggle: any,
}

export default class Settings extends React.Component<Props>{

  

  render() {

    return (
      <div
        className={`container ${this.props.state.radio === 'b' ? 'bgThemaDark' : null}`}
      >
        <Header type={true} title={'Library-info'} searchBook={this.props.searchBook} handleChange={this.props.handleChange} state={this.props.state} clearInput={this.props.clearInput} />

        <main className='infoBook'>

          {this.props.state.statusLoading ? <ReactLoading type='balls' color='#5C426C' height='100%' width='100%' /> : null}

          <div className='infoBook__bookName'>
            Settings
          </div>
          <Radio
            checked={this.props.state.radio === 'a'}
            onChange={(e) => this.props.radioToggle(e)}
            value="a"
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
            checked={this.props.state.radio === 'b'}
            onChange={(e) => this.props.radioToggle(e)}
            value="b"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
            sx={{
              color: 'black',
              '&.Mui-checked': {
                color: 'white',
              },
            }}
          />
          <div className={`infoBook__bookAuthors ${this.props.state.radio === 'a' ? 'redButton' : 'greenButton'}`}>
            Settings
          </div>
          <div className='infoBook__bookText'>
            Settings
          </div>

        </main>
        <FooterNav />
      </div>
    );
  }
}
