import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Typography from "@material-ui/core/Typography";
import ModalContainer from "../../components/modal/modal";

import "./Card.scss";

export default function AnimeCard({ name, image, des, videoID }) {
	const [openModal, setModal] = useState(false);

	const handleOpen = () => setModal(true);
	const handleClose = () => setModal(false);

	return (
		<Card className="media-card">
			<CardMedia className="card-image" image={image}>
				<CardContent className="card-image-label">
					<Typography variant="body2" color="textSecondary" component="p">
						{name}
					</Typography>
				</CardContent>
			</CardMedia>
			<div className="card-right-side">
				<Typography variant="h6" color="textSecondary" component="h2">
					Synopsis:
				</Typography>
				<Typography
					className="des"
					variant="body2"
					color="textSecondary"
					component="p"
				>
					{des ? des : "No Synopsis"}
				</Typography>
			</div>
			<div className="watch-trailer" onClick={handleOpen}>
				<Typography variant="body2" color="textSecondary" component="p">
					Watch Trailer
				</Typography>
				<PlayCircleOutlineIcon />
			</div>
			<ModalContainer
				open={openModal}
				onClose={handleClose}
				videoID={videoID}
			/>
		</Card>
	);
}
