import React from 'react';
import Controller from '../controllers/InfoBookController';
import ViewModel from '../view-models/InfoBookViewModel';

export default class InfoBook extends React.Component{
  private viewModel: any;

  constructor(props: any) {
    super(props);

    this.viewModel = new ViewModel();
  }

  render() {

    return <Controller
      viewModel={this.viewModel}
    />;
  }
}
