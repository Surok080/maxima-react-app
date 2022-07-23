import React from 'react';
import Controller from '../controllers/LibraryBookController';
import ViewModel from '../view-models/LibraryViewModel';

interface Props {
  navigate: any,
  favorite: boolean
}

export default class LibraryBook extends React.Component<Props> {
  private viewModel: any;

  constructor(props: any) {
    super(props);

  this.viewModel = new ViewModel();
  }

  render() {

    return <Controller
      favorite={this.props.favorite}
      navigate={this.props.navigate}
      viewModel={this.viewModel}
    />;
  }
}
