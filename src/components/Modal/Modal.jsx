import { Component } from 'react';
import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';
import { Overlay, ModalContainer } from './Modal.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {

	componentDidMount() {
		window.addEventListener('keydown', this.onKeyDown)
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.onKeyDown);
	}

	onKeyDown = event => {
		const { onClose } = this.props;

		if (event.code === 'Escape') {
			onClose();
		}
	}

	onkBackdropClick = ({ target, currentTarget }) => {
		const { onClose } = this.props;

		if (target === currentTarget) {
			onClose();
		}
	}

	render() {
		const { children } = this.props;
		return createPortal (
			<Overlay onClick={this.onkBackdropClick}>
				<ModalContainer>
					{children}
				</ModalContainer>
			</Overlay>,
			modalRoot
		);
	}
};

Modal.propTypes = {
	onClose: PropTypes.func
}

export default Modal;