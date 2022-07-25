import React from 'react';
import Controller from '../controllers/SettingsController';


interface Props {
  navigate: any,
}

export default class SettingsApp extends React.Component<Props>{

  render() {

    return <Controller
      navigate={this.props.navigate}
    />;
  }
}
