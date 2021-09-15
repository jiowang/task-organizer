import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import Backdrop from './Backdrop';

import './Modal.css';

const ModalOverlay = props => {
    const content = (
         <div className="custom-modal modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                    <button type="button" className="close" aria-label="Close" onClick={props.onCancel}>
                    <span aria-hidden="false">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    {props.children}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={props.onCancel}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => alert('To be implemented...')}>Save changes</button>
                </div>
            </div>
        </div>
    );
    return ReactDOM.createPortal(content, document.getElementById('modal'));
}

// Requires: props.title, props.children (the body itself), props.onCancel, props.show

const Modal = props => {
    return (
        <React.Fragment>
            {props.show && <Backdrop onClick={props.onCancel} />}
            <CSSTransition
                in={props.show}
                mountOnEnter
                unmountOnExit
                timeout={200}
                classNames="custom-modal"
            >
                <ModalOverlay {...props} />
            </CSSTransition>
        </React.Fragment>
    );
};

export default Modal;