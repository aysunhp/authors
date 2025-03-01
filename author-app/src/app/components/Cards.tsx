import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          years old
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gender:
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="error" style={{ margin: "auto" }}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
