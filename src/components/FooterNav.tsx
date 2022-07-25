import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { favorit, library, search, settings } from '../app/img';
import '../app/style/style.scss';
import { connect } from 'react-redux';

interface Props {
  them: any,
}

class FooterNav extends Component<Props> {
  
  render() {

    return (
      <div
        className='footerNav'
      >
        <div className={`footerNav__items ${this.props.them === 'light' ? null : 'backgroundGrey' }`}>
          <Link to='/library'>
            <img className='footerNav__item' src={library} alt="library" />
          </Link>
          <Link to='/search'>
            <img className='footerNav__item' src={search} alt="search" />
          </Link>
          <Link to='/favorite'>
            <img className='footerNav__item' src={favorit} alt="favorit" />
          </Link>
          <Link to='/settings'>
            <img className='footerNav__item' src={settings} alt="settings" />
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    them: state.them,
  }
}

export default connect(mapStateToProps)(FooterNav)
