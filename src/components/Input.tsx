import React from 'react';
import '../app/style/style.scss';
import { connect } from 'react-redux';

interface Props {
  input: any,
  dataState: any,
  placeholder: any,
  name: any,
  type: any,
  them: any,
}

class Input extends React.Component<Props> {

  render() {
    return (
      <input
        type={this.props.type}
        className={`input ${this.props.them === 'dark' ? 'backgroundGrey' : null }`}
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

const mapStateToProps = (state: any) => {
  return {
    them: state.them,
  }
}

export default connect(mapStateToProps)(Input)
