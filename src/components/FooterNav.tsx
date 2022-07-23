import { Component } from 'react';
import { Link } from 'react-router-dom';
import { favorit, library, search } from '../app/img';
import '../app/style/style.scss';


export default class FooterNav extends Component {
  render() {
    return (
      <div
        className='footerNav'
      >
        <div className='footerNav__items'>
          <Link to='/library'>
            <img src={library} alt="library" />
          </Link>
          <Link to='/search'>
            <img src={search} alt="search" />
          </Link>
          <Link to='/favorite'>
            <img src={favorit} alt="favorit" />
          </Link>
        </div>
      </div>
    );
  }
}

