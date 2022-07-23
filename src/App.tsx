import React from 'react';
import Routing from './app/Routing/Routing';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import redux from './app/redux';
import { connect } from 'react-redux';
import { toogleThema } from './app/redux/actionTypes';

interface Props {
  them: any,
  toogleThema: any,
}

// const store = createStore(redux)

class App extends React.Component<Props> {

  componentDidMount() {
    this.getThemLocal();
  }

  private getThemLocal = async () => {
    let themLocal = await localStorage.getItem('them');
    themLocal = JSON.parse(`${themLocal}`);
    // console.log(themLocal);
    this.props.toogleThema(themLocal);

    // const tokenLocal = await localStorage.getItem('Access_token');
    // const tokenSession = await sessionStorage.getItem('Access_token');
    // if (tokenLocal || tokenSession) {
    //   this.props.navigate("/search");
    // }
  }

  render() {
    console.log(this.props.them);
    return (
      // <Provider store={store}>
      <Routing />
      // </Provider>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    them: state.them,
  }
}

const mapDispatchToProps = () => {
  return {
    toogleThema
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(App)

