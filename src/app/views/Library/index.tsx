import React from 'react';
import FooterNav from '../../../components/FooterNav';
import Header from '../../../components/Header';
import ReactLoading from 'react-loading';
import { ModalView } from '../../../components/ModalView';
import '../../style/style.scss';

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
}

export default class Library extends React.Component<Props>{

  render() {
    const itemsBook = this.props.state?.bookListUser.data;
    let bookList = '';

    if (this.props.state.bookListUser.status) {
      bookList = itemsBook.map((item: any, key: any) => {
        if (this.props.favorite || (!this.props.favorite && item.favorite)) {
          return (<div key={key} className={!item.favorite ? 'libraryBook__item' : 'libraryBook__item favoriteBookLibrary'} >
            <div>
              {key}
            </div>
            <div className='libraryBook__title'>
              {item.title}
            </div>
            <button
              className={this.props.state.statusLoading ? 'libraryBook__button animateAddFavorite greenButton' : 'libraryBook__button greenButton'}
              type="button"
              data-id={item.id}
              data-favorite={item.favorite}
              onClick={(e) => this.props.addFavoriteBook(e.target)}
            >
              F
            </button>
            <button
              className={this.props.state.statusLoading ? 'libraryBook__button animateAddFavorite redButton' : 'libraryBook__button redButton'}
              type="button"
              data-id={item.id}
              onClick={(e) => this.props.modalResult(e.target)}
            >
              D
            </button>
            <button
              className={this.props.state.statusLoading ? 'libraryBook__button animateAddFavorite blueButton' : 'libraryBook__button blueButton'}
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
        className="container"
      >

          <Header type={true} title={'Library'} searchBook={this.props.searchBook} handleChange={this.props.handleChange} state={this.props.state} clearInput={this.props.clearInput} />

          <main className='libraryBook'>

            {!this.props.state.bookListUser.status ? <ReactLoading type='balls' color='#5C426C' height='100%' width='100%' /> : bookList}

            {this.props.state.modal ? (
              <ModalView
                actionBook={this.props.deleteBook}
                toogleModal={this.props.toogleModal}
                title={'Delete book'}
                textModal={'Are you sure you want to delete this book?'}
              />
            ) : null}

          </main>

          <FooterNav />
      </div>
    );
  }
}
