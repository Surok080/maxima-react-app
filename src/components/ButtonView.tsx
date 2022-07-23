import React from 'react';

interface Props {
  dataTitle: string,
  className: string,
  onClick: any,
}

export class ButtonView extends React.Component<Props> {

  render() {
    return (
      <button
      className={this.props.className}
      onClick={this.props.onClick}
      type="button"
    >
      {this.props.dataTitle}
    </button>
    );
  }
}



