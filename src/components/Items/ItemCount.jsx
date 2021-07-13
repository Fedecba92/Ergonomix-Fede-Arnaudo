import React, { useState } from "react";
import { Button, ButtonGroup, Box, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { AddShoppingCart } from "@material-ui/icons";

const ItemCount = ({ stock, onAdd }) => {
  const [toAdd, setToAdd] = useState(stock ? 1 : 0);

  return (
    <div mt={2}>
      <ButtonGroup variant="contained">
        <Button
          onClick={() => setToAdd(toAdd - 1 ? toAdd - 1 : toAdd)}
          color="secondary"
        >
          <RemoveIcon />
        </Button>
        <Box
          component="div"
          display="inline"
          p={1}
          m={1}
          bgcolor="background.paper"
          textAlign="center"
        >
          {toAdd}
        </Box>
        <Button
          onClick={() => setToAdd(toAdd === stock ? toAdd : toAdd + 1)}
          color="primary"
        >
          <AddIcon />
        </Button>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => {
            onAdd(toAdd);
            setToAdd(1);
          }}
        >
          <AddShoppingCart m={2} />
        </IconButton>
      </ButtonGroup>
      <Box component="label" m={1}>
        stock: {stock}
      </Box>
    </div>
  );
};

export default ItemCount;
