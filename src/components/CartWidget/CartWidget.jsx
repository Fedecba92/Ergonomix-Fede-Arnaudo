import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCartContext } from "../../Context/CartContext";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

export default function CartWidget() {
  const { prodInCart } = useCartContext();

  return (
    <div>
      {prodInCart && (
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={prodInCart} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      )}
    </div>
  );
}
