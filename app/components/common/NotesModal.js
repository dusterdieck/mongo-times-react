import React from "react";

const NotesModal = ( props ) => (
  <div className="modal fade" tabindex="-1" role="dialog" id='myModal'>
    <div className="modal-dialog modal-sm" role="document">
      <div className="modal-content text-center" >
        <div className="modal-body">
          <div className='row'><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="white glyphicon glyphicon-remove" aria-hidden="true"></span></button></div>   
          <div className='row' id="modal-content">
            <form className='form-group'>
              <label for='note-input'>Note:</label>
              <textarea className='form-control' row='2' id='note-input' />
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

