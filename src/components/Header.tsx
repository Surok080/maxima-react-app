import React from 'react';
import { iconDelete, iconSearch } from '../app/img';


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
        className=" bg-slate-900 h-16 p-3 flex-grow-0 flex-shrink-0 basis-auto"
      >

        <div className='  mh-9 rounded overflow-hidden'>
          {!this.props.type ? <form
            onSubmit={this.props.searchBook}
            className="flex bg-white "
          >
            <button
              className=" p-2"
              type="button"
              onClick={this.props.searchBook}
            >
              <img src={iconSearch} alt="search" />
            </button>
            <input
              className="p-2 w-full h-full focus:outline-none"
              placeholder="API"
              type="text"
              onChange={(e) => this.props.handleChange(e.target.value)}
              value={this.props.state.nameBook}
            />
            <button
              className=" p-2 focus:outline-none"
              type="button"
              onClick={this.props.clearInput}
            >
              <img src={iconDelete} alt="search" />
            </button>
          </form> : <h3 className='text-white text-center font-bold text-lg'>{this.props.title}</h3>}
        </div>
      </div>
    );
  }
}

