import React from "react";

const NotesModal = ( props ) => (
  <div className="modal fade" tabIndex="-1" role="dialog" id='myModal' hidden={props.hideModal}>
    <div className="modal-dialog modal-sm" role="document">
      <div className="modal-content text-center" >
        <div className="modal-body">
          <div className='row'><button type="button" className="close" dataDismiss="modal" ariaLabel="Close"><span className="white glyphicon glyphicon-remove" ariaHidden="true"></span></button></div>   
          <div className='row' id="modal-content">
            <form className='form-group'>
              <label htmlFor='note-input'>Note:</label>
              <textarea className='form-control' id='note-input' />
              <button className='btn btn-success save-note pull-right' articleId={props.articleId}>
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NotesModal;

