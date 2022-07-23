import React from 'react';
import Controller from '../controllers/SearchBookController';
import ViewModel from '../view-models/SearchViewModel';

interface Props {
  navigate: any,
}

export default class SearchBook extends React.Component<Props> {
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
