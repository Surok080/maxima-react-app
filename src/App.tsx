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

class App extends React.Component<Props> {

  componentDidMount() {
    this.getThemLocal();
  }

  private getThemLocal = async () => {
    let themLocal = await localStorage.getItem('them');
    themLocal = JSON.parse(`${themLocal}`);
    this.props.toogleThema(themLocal);
  }

  render() {
    return (
      <Routing />
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

