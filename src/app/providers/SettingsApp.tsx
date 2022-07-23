import React from 'react';
import Controller from '../controllers/SettingsController';
import ViewModel from '../view-models/SettingsViewModel';

interface Props {
  navigate: any,
}

export default class SettingsApp extends React.Component<Props>{
  private viewModel: any;

  constructor(props: any) {
    super(props);
    this.viewModel = new ViewModel();
  }

  render() {

    return <Controller
      viewModel={this.viewModel}
      navigate={this.props.navigate}
    />;
  }
}
