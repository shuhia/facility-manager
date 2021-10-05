import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { Facility } from "./Facility";
import { EditFacilityModal } from "./EditFacilityModal";
import * as React from "react";
import { axios } from "../../controller/axios";
import { Pagination } from "@mui/material";
import { sliceData } from "../../utils/data";

function Facilities() {
  const [page, setPage] = useState(0);
  const handleChangePage = (event, value) => {
    if (typeof value === "number") {
      const index = value - 1;
      setPage(index);
    }
  };
  const [open, setOpen] = useState(false);
  const [facilities, setFacilities] = useState([]);
  const [facilitiesGroup, setFacilitiesGroup] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState({});

  const maxItems = 30;

  const handleOpen = (id) => {
    const facility = facilities.find((facility) => facility.id === id);
    setSelectedFacility(facility);
    setOpen(true);
  };

  const deleteFacility = (id) => {
    setFacilities((prev) => prev.filter((facility) => facility.id !== id));
    setOpen(false);
  };
  const handleClose = () => setOpen(false);
  const handleSave = (facility) => {
    setFacilities((prev) =>
      prev.map((prevFacility) => {
        if (prevFacility.id === facility.id) {
          return facility;
        } else {
          return prevFacility;
        }
      })
    );
  };

  useEffect(() => {
    axios.get("/facilities").then((facilities) => {
      setFacilities(facilities);
      setFacilitiesGroup(sliceData(facilities, maxItems));
    });
    return () => {};
  }, []);

  useEffect(() => {}, [page, facilitiesGroup]);
  useEffect(() => {
    setFacilitiesGroup(sliceData(facilities, maxItems));
  }, [facilities]);

  return (
    <Box sx={{ margin: 1 }}>
      <EditFacilityModal
        open={open}
        handleClose={handleClose}
        facility={selectedFacility}
        handleSave={handleSave}
        deleteFacility={deleteFacility}
      ></EditFacilityModal>
      <Typography
        textAlign="center"
        variant="h4"
        sx={{ marginBottom: 3, fontWeight: "bold" }}
      >
        Facilities
      </Typography>
      <Pagination
        count={facilitiesGroup.length}
        onChange={handleChangePage}
        sx={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minMax(300px, 350px))",
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
          justifyItems: "center",
        }}
      >
        {facilitiesGroup.length > 0 &&
          facilitiesGroup[page].map((facility) => (
            <Facility facility={facility} handleOpen={handleOpen}></Facility>
          ))}
      </Box>
    </Box>
  );
}

export default Facilities;
