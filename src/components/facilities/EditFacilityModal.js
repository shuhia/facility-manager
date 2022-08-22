import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField } from "@mui/material";
import { RadioGroup, Radio } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { DeleteFacilityModal } from "./DeleteFacilityModal";
import { useState, useEffect } from "react";

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

export const EditFacilityModal = (props) => {
  const { handleClose, open, facility, handleSave, deleteFacility } = props;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("");

  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpenDelete = () => {
    setOpenDelete(true);
  };
  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleSubmit = () => {
    console.log("submit");
    const updatedFacility = { ...facility, name, address, type };
    handleSave(updatedFacility);
    handleClose();
  };

  const handleDelete = () => {
    const id = facility.id;
    deleteFacility(id);
    setOpenDelete(false);
  };

  // Set initial state
  useEffect(() => {
    setName(facility.name);
    setAddress(facility.address);
    setType(facility.type);
    return () => {};
  }, [facility]);

  console.log(type);
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
              Edit Facility
            </Typography>
            <Box marginLeft="auto">
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </Box>
          </Box>
          <Divider />
          <Box textAlign="right">
            <Button
              variant=""
              endIcon={<DeleteIcon />}
              onClick={handleOpenDelete}
            >
              Delete Facility
            </Button>
          </Box>
          <Box sx={{ padding: 2 }}>
            <TextField
              sx={{ width: "100%" }}
              id="filled-basic"
              label="Name of the facility"
              value={name}
              onChange={({ target }) => setName(target.value)}
              variant="filled"
              required
            />
            <RadioGroup
              row
              aria-label="Facility Type"
              name="col-radio-buttons-group"
              sx={{
                marginTop: 4,
                justifyContent: "center",
                gap: 5,
              }}
              value={type}
              onChange={({ target }) => setType(target.value)}
            >
              <Button variant="outlined">
                <FormControlLabel
                  value="indoor"
                  control={<Radio checked={type === "indoor"} />}
                  label="Indoor"
                />
              </Button>

              <Button variant="outlined">
                <FormControlLabel
                  value="range"
                  control={<Radio checked={type === "range"} />}
                  label="Range"
                />
              </Button>
            </RadioGroup>
            <TextField
              sx={{ width: "100%", marginTop: 4 }}
              id="filled-basic"
              label="Adress"
              variant="filled"
              value={address}
              onChange={({ target }) => setAddress(target.value)}
              required
            />
          </Box>
          <Divider></Divider>
          <Box
            display="grid"
            gridTemplateColumns="1fr 1fr"
            sx={{ height: "20%", padding: 2, gap: 2 }}
          >
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              type="submit"
              variant="contained"
              color="warning"
              onClick={handleSubmit}
            >
              Save changes
            </Button>
          </Box>
        </Box>
      </Modal>
      <DeleteFacilityModal
        open={openDelete}
        handleClose={handleCloseDelete}
        handleDelete={handleDelete}
      ></DeleteFacilityModal>
    </div>
  );
};
