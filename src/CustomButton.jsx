import { Button } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
const CustomButton = () => {
  return (
    <div>
      <h3>Button variants</h3>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="text">Text</Button>

      <h3> Button color</h3>
      <Button variant="contained" color="success">
        success
      </Button>

      <Button variant="contained" color="error">
        error
      </Button>

      <Button variant="contained" color="warning">
        warning
      </Button>

      <Button variant="contained" color="primary">
        primary
      </Button>

      <Button variant="contained" color="secondary">
        secondary
      </Button>

      <h3> Icon button</h3>

      <Button variant="contained" color="error" startIcon={<EditIcon />}>
        Edit
      </Button>
    </div>
  );
};

export default CustomButton;
