import React from "react";

const Modal = ( props ) => (
  <div class="modal fade" tabindex="-1" role="dialog" id='myModal'>
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content text-center" >
        <div class="modal-body">
          <div class='row'><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="white glyphicon glyphicon-remove" aria-hidden="true"></span></button></div>

          <div class='row' id="modal-content">
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;

