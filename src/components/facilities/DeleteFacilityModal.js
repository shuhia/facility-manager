import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "360px",
  minHeight: "80px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  padding: 0,
  borderRadius: 4,
};

export const DeleteFacilityModal = (props) => {
  const { handleClose, open, handleDelete } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            width="100%"
            height="20%"
            display="flex"
            alignItems="center"
            alignContent="space-between"
            padding="20px"
          >
            <Typography
              textAlign="center"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              EDIT INFORMATION
            </Typography>
            <Box marginLeft="auto">
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </Box>
          </Box>
          <Divider />
          <Box textAlign="right"></Box>
          <Box sx={{ padding: 2 }} textAlign="center">
            <Typography>
              Are you sure you want to delete this facility?
            </Typography>
            <Typography> You won't be able to recover this data .</Typography>
          </Box>
          <Divider></Divider>
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr"
            sx={{ height: "20%", padding: 2, gap: 2 }}
          >
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
