import { Component } from 'react';
import { Link } from 'react-router-dom';
import { favorit, library, search } from '../app/img';



export default class FooterNav extends Component {
  render() {
    return (
      <div
        className=' flex-grow-0 flex-shrink-0 basis-auto'
      >
        <div className=' h-14 bg-gray-200 flex items-center justify-around'>
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

