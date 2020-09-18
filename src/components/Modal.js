import React from 'react';
import ReactDOM from 'react-dom'; //we need ReactDOM for portals
import '../streamstyle.css';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className = "modal">
			<div className = "modal-content">
				<h3>{props.content}</h3>
				<div className = "modal-buttons">
					<button onClick= {props.onAccept}>{props.action1}</button>&nbsp;
					&nbsp;<button onClick = {props.onDismiss}>{props.action2}</button>
				</div>
			</div>
		</div>,
        document.querySelector('#modalhere')
    );
};

export default Modal;