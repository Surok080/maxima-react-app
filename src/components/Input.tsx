import React from 'react';
import '../app/style/style.scss';

interface Props {
  input: any,
  dataState: any,
  placeholder: any,
  name: any,
  type: any,
}

export class Input extends React.Component<Props> {



  render() {
    return (
      <input
        type={this.props.type}
        className='input'
        onChange={(e) => this.handleChange(e, this.props.name)}
        value={this.props.dataState}
        placeholder={this.props.placeholder}
      />
    );
  }

  handleChange = (e: any, stateName: string) => {
    this.props.input(e.target.value, stateName);
  };

}
