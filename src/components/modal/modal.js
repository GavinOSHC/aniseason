import React from "react";
import Modal from "react-modal";

import "./modal.scss";

export default function ModalContainer({ open, onClose, videoID }) {
	if (!open) return null;

	const renderVideo = () => {
		return (
			<iframe
				title={videoID}
				src={`https://www.youtube.com/embed/${videoID}`}
			></iframe>
		);
	};

	return (
		<Modal
			className="main-modal"
			isOpen={open}
			onRequestClose={onClose}
			appElement={document.getElementById("portal")}
		>
			<div>
				{videoID ? (
					renderVideo()
				) : (
					<div className="modal-inner">No Trailer</div>
				)}
			</div>
		</Modal>
	);
}
