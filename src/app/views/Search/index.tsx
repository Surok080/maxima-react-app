import React from 'react';
import FooterNav from '../../../components/FooterNav';
import Header from '../../../components/Header';
import ReactLoading from 'react-loading';
import ModalView from '../../../components/ModalView';
import Alert from '@mui/material/Alert';
import '../../style/style.scss';
import { connect } from 'react-redux';
import { Backdrop, CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

interface Props {
  searchBook: any,
  handleChange: any,
  state: any,
  clearInput: any,
  addBook: any,
  toogleModal: any,
  modalResult: any,
  them: any,
  select: any,
}

class Search extends React.Component<Props>{

  render() {
    const itemsBook = this.props.state.bookList.items;
    let bookList = '';

    if (this.props.state.bookList.totalItems) {
      bookList = itemsBook.map((item: any, key: any) => {
        return <div key={key} className={`search__items ${this.props.them === 'dark' ? 'backgroundLightGrey' : null}`}>
          <div>
            {key}
          </div>
          <div className='truncate mx-5'>
            {item.volumeInfo.title}
          </div>
          <button
            className={`search__item ${this.props.state.statusLoading ? 'animate-pulse' : null}`}
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

      <div className={`container ${this.props.them === 'dark' ? 'backgroundDark' : null}`}>
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

        <main className='search__main'>
          {bookList}
          {this.props.state.statusLoading ? <ReactLoading type='balls' color='#5C426C' height='100%' width='100%' /> : ''}
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={this.props.state.statusLoadingEasy}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </main>

        {this.props.state.modal ? (
          <ModalView
            actionBook={this.props.addBook}
            toogleModal={this.props.toogleModal}
            title={'Add book'}
            textModal={'Are you sure you want to add this book?'}
          />
        ) : null}
        <div style={{width:'100%', padding:10,  background: 'white'}}>
          <FormControl fullWidth
            sx={{ background: 'white' }}
          >
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select

              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.props.state.select}
              label="Category"
              onChange={(e) => this.props.select(e)}

            >
              <MenuItem value={'Computers'}>Computers</MenuItem>
              <MenuItem value={'History'}>History</MenuItem>
              <MenuItem value={'Science'}>Science</MenuItem>
            </Select>
          </FormControl>
        </div>


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

export default connect(mapStateToProps)(Search)
