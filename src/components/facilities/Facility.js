import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

export const Facility = function (props) {
  const { handleOpen } = props;
  const { name, address, id, createAd, type } = props.facility;

  const handleClick = () => {
    handleOpen(id);
  };

  return (
    <Card
      sx={{ width: 349, height: 152 }}
      onClick={props.onClick}
      elevation={4}
    >
      <Tooltip title="Click for more information">
        <CardActionArea
          sx={{
            width: "inherit",
            height: "inherit",
          }}
          onClick={handleClick}
        >
          <CardContent sx={{ height: "100%", position: "relative" }}>
            <Typography variant="h5" fontWeight="bold" component="div">
              {name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="orange">
              {type}
            </Typography>
            <Typography
              sx={{
                position: "absolute",
                marginTop: "auto",
                bottom: 20,
              }}
              variant="body2"
              color="text.secondary"
            >
              {address}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Tooltip>
    </Card>
  );
};
