import React from 'react';

interface Props {
  actionBook: any,
  toogleModal: any,
  title: string,
  textModal: string,
}

export class ModalView extends React.Component<Props> {

  render() {
    return (
      <>
        <div className="flex bg-slate-600 bg-opacity-50 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                <h3 className="text-3xl font=semibold">{this.props.title}</h3>
                <button
                  className="bg-transparent border-0 text-black float-right "
                  onClick={this.props.toogleModal}
                >
                  <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                    x
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                {this.props.textModal}
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-white bg-blue-600 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-6 mb-1"
                  type="button"
                  onClick={this.props.actionBook}
                >
                  YES
                </button>
                <button
                  className="text-white bg-red-600 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                  onClick={this.props.toogleModal}
                >
                  NO
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
