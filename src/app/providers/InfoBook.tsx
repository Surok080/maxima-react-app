import React from 'react';
import Controller from '../controllers/InfoBookController';
import ViewModel from '../view-models/InfoBookViewModel';

interface Props {
  navigate: any,
}

export default class InfoBook extends React.Component<Props>{
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
