import React from 'react';
import '../app/style/style.scss';

interface Props {
  actionBook: any,
  toogleModal: any,
  title: string,
  textModal: string,
}

export class ModalView extends React.Component<Props> {

  render() {
    return (
      <div className='modalView'>
        <div className="modalView__content">
          <div className="modalView__window">
            <div className="modalView__window-header">
              <h3 className="text-3xl">{this.props.title}</h3>
              <button
                className="modalView__button-close"
                onClick={this.props.toogleModal}
              >
                <span className="modalView__button-item">
                  x
                </span>
              </button>
            </div>
            <div className="modalView__window-main">
              {this.props.textModal}
            </div>
            <div className="modalView__window-footer">
              <button
                className="modalView__button-apply"
                type="button"
                onClick={this.props.actionBook}
              >
                YES
              </button>
              <button
                className="modalView__button-apply modalView__button-reject"
                type="button"
                onClick={this.props.toogleModal}
              >
                NO
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
