import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import useStyles from "./ItemDetail.js";

const ItemDetail = ({ pictureUrl, title, description }) => {
  const classes = useStyles();
  return (
    <Card className={classes.Root}>
      <CardMedia className={classes.media} image={pictureUrl} title={title} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" m={2} color="textSecondary">
            {description}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemDetail;
