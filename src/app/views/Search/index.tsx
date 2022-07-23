import React from 'react';
import FooterNav from '../../../components/FooterNav';
import Header from '../../../components/Header';
import ReactLoading from 'react-loading';
import { ModalView } from '../../../components/ModalView';
import Alert from '@mui/material/Alert';

interface Props {
  searchBook: any,
  handleChange: any,
  state: any,
  clearInput: any,
  addBook: any,
  toogleModal: any,
  modalResult: any,
}

export default class Search extends React.Component<Props>{

  render() {
    const itemsBook = this.props.state.bookList.items;
    let bookList = '';

    if (this.props.state.bookList.totalItems) {
      bookList = itemsBook.map((item: any, key: any) => {
        return <div key={key} className='flex w-full bg-slate-200 px-5 py-3 justify-between border-l-4 border-gray-300 active:border-green-500 border mb-px'>
          <div>
            {key}
          </div>
          <div className='truncate mx-5'>
            {item.volumeInfo.title}
          </div>
          <button
            className={this.props.state.statusLoading ? 'py-1 px-6 bg-green-500 rounded-lg text-white font-semibold animate-pulse' : 'py-1 px-6 bg-green-500 rounded-lg text-white font-semibold'}
            type="button"
            data-title={item.volumeInfo.title}
            data-authors={item.volumeInfo.authors}
            data-description={item.volumeInfo.description}
            data-uid={item.id}
            onClick={(e) => this.props.modalResult(e.target)}
          >
            ADD
          </button>
        </div>;
      });
    }
    return (
      <div
        className="bg-slate-200 h-screen"
      >
        <div className='flex flex-col h-full'>
          <Header title={'Search'} type={false} searchBook={this.props.searchBook} handleChange={this.props.handleChange} state={this.props.state} clearInput={this.props.clearInput} />
          {!this.props.state.addBookError ?
            <Alert variant="filled" severity="error">
              К сожалению данную книгу невозможно добавить в библиотеку
            </Alert> :
            null}
          {this.props.state.addBookcomplete ?
            <Alert variant="filled" severity="success">
            This is a success alert — check it out!
          </Alert> :
            null}

          <main className=' flex-grow flex-shrink-0 basis-auto p-px'>
            {bookList}
            {this.props.state.statusLoading ? <ReactLoading type='balls' color='#5C426C' height='100%' width='100%' /> : ''}
          </main>

          {this.props.state.modal ? (
            <ModalView
              actionBook={this.props.addBook}
              toogleModal={this.props.toogleModal}
              title={'Add book'}
              textModal={'Are you sure you want to add this book?'}
            />
          ) : null}
          <FooterNav />
        </div>
      </div>
    );
  }
}
