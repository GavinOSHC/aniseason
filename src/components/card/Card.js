import React, { useState, useRef } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";

import "./Card.scss";

export default function AnimeCard({ name, image, des }) {
  const [openModal, setModal] = useState(false);
  const rootRef = useRef(null);

  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);

  return (
    <Card className="media-card" ref={rootRef}>
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
          {des}
        </Typography>
      </div>
      <div className="watch-trailer" onClick={handleOpen}>
        <Typography variant="body2" color="textSecondary" component="p">
          Watch Trailer
        </Typography>
        <PlayCircleOutlineIcon />
      </div>
      <Modal
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open={openModal}
        onClose={handleClose}
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        container={() => rootRef.current}
      >
        <div>
          <h2 id="server-modal-title">Server-side modal</h2>
          <p id="server-modal-description">
            If you disable JavaScript, you will still see me.
          </p>
        </div>
      </Modal>
    </Card>
  );
}
