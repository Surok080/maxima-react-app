import React from 'react';
import FooterNav from '../../../components/FooterNav';
import Header from '../../../components/Header';
import ReactLoading from 'react-loading';
import ModalView from '../../../components/ModalView';
import '../../style/style.scss';
import { connect } from 'react-redux';
import { Backdrop, CircularProgress } from '@mui/material';

interface Props {
  searchBook: any,
  handleChange: any,
  state: any,
  clearInput: any,
  toogleModal: any,
  modalResult: any,
  addFavoriteBook: any,
  deleteBook: any,
  infoBook: any,
  favorite: boolean,
  them: any,
}

interface IState {
  searchTerm: any,
  carList: any,
}

class Library extends React.Component<Props, IState>{

  render() {
    const itemsBook = this.props.state?.bookListUser;
    let bookList = '';

    if (this.props.state.bookListUser) {
      bookList = itemsBook.map((item: any, key: any) => {
        if (this.props.favorite || (!this.props.favorite && item.favorite)) {
          return (<div key={key} className={`${!item.favorite ? 'libraryBook__item' : 'libraryBook__item favoriteBookLibrary'} ${this.props.them === 'dark' ? 'backgroundLightGrey' : null}`} >
            <div>
              {key}
            </div>
            <div className='libraryBook__title'>
              {item.title}
            </div>
            <button
              className={`libraryBook__button greenButton`}
              type="button"
              data-id={item.id}
              data-favorite={item.favorite}
              onClick={(e) => this.props.addFavoriteBook(e.target)}
            >
              F
            </button>
            <button
              className={`libraryBook__button redButton`}
              type="button"
              data-id={item.id}
              onClick={(e) => this.props.modalResult(e.target)}
            >
              D
            </button>
            <button
              className={`libraryBook__button blueButton`}
              type="button"
              data-id={item.id}
              data-favorite={item.favorite}
              onClick={(e) => this.props.infoBook(e.target)}
            >
              I
            </button>
          </div>);
        }
        return null;
      });
    }
    return (
      <div
        className={`container ${this.props.them === 'dark' ? 'backgroundDark' : null}`}
      >
        <Header type={false} title={'Library'} searchBook={this.props.searchBook} handleChange={this.props.handleChange} state={this.props.state} clearInput={this.props.clearInput} />
        <main className='libraryBook'>
          {!this.props.state.bookListUser ? <ReactLoading type='balls' color='#5C426C' height='100%' width='100%' /> : bookList}
          {this.props.state.modal ? (
            <ModalView
              actionBook={this.props.deleteBook}
              toogleModal={this.props.toogleModal}
              title={'Delete book'}
              textModal={'Are you sure you want to delete this book?'}
            />
          ) : null}
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={this.props.state.statusLoading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </main>
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

export default connect(mapStateToProps)(Library)
