import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Cards = (props) => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const {player} = props;

    return (
        <div>
            <li>
                    <img className="fut" src={player.image} alt="avatar"/>
                    <Button  color="success" className="card" variant="contained" onClick={handleOpen}>Détails</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Matchs: {player.gamesPlayed}
                            </Typography>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Goals: {player.goals}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Assists: {player.assists}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            MOTM: {player.manOfTheMatch}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Carton Rouge: {player.redCards}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Poste: {player.favoritePosition}
                            </Typography>
                        </Box>
                    </Modal>
            </li>
        </div>
    );
};

export default Cards;