import React from 'react';
import { iconDelete, iconSearch } from '../app/img';
import '../app/style/style.scss';

interface Props {
  searchBook: any,
  handleChange: any,
  state: any,
  clearInput: any,
  type: any,
  title: any,
}
interface IState {
  nameBook: string,
}

export default class Header extends React.Component<Props, IState> {
  state = {
    nameBook: "",
  };

  render() {
    return (
      <div
        className="header"
      >

        <div className='header__items'>
          {!this.props.type ? <form
            onSubmit={this.props.searchBook}
            className="header__form"
          >
            <button
              className="p-2"
              type="button"
              onClick={this.props.searchBook}
            >
              <img src={iconSearch} alt="search" />
            </button>
            <input
              className="header__form-input"
              placeholder="API"
              type="text"
              onChange={(e) => this.props.handleChange(e.target.value)}
              value={this.props.state.nameBook}
            />
            <button
              className="header__form-button"
              type="button"
              onClick={this.props.clearInput}
            >
              <img src={iconDelete} alt="search" />
            </button>
          </form> : <h3 className='header__title'>{this.props.title}</h3>}
        </div>
      </div>
    );
  }
}

