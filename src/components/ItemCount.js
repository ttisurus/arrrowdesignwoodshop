import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import "./ItemCount.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  const [numero, setNumero] = useState(0);

  const handleUp = () => {
    setNumero(numero + 1);
  };

  const handleDown = () => {
    setNumero(numero - 1);
  };

  return (
    <div className="count-container">
      <div className="counter">
        <p>{numero}</p>
      </div>
      <div className={classes.root}>
        <Button onClick={handleDown} variant="outlined">
          -
        </Button>

        <Button variant="outlined" color="primary">
          Agregar al carrito
        </Button>
        <Button onClick={handleUp} variant="outlined">
          +
        </Button>
      </div>
    </div>
  );
}
