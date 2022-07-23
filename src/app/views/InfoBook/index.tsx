import React from 'react';
import FooterNav from '../../../components/FooterNav';
import Header from '../../../components/Header';
import ReactLoading from 'react-loading';
import '../../style/style.scss';

interface Props {
  searchBook: any,
  handleChange: any,
  state: any,
  clearInput: any,
}

export default class InfoBook extends React.Component<Props>{

  render() {

    return (
      <div
        className="container"
      >
        <Header type={true} title={'Library-info'} searchBook={this.props.searchBook} handleChange={this.props.handleChange} state={this.props.state} clearInput={this.props.clearInput} />

        <main className='infoBook'>

          {this.props.state.statusLoading ? <ReactLoading type='balls' color='#5C426C' height='100%' width='100%' /> : null}

          <div className='infoBook__bookName'>
            {this.props.state.bookName}
          </div>
          <div className='infoBook__bookAuthors'>
            {this.props.state.bookAuthors}
          </div>
          <div className='infoBook__bookText'>
            {this.props.state.bookText}
          </div>

        </main>
        <FooterNav />
      </div>
    );
  }
}
