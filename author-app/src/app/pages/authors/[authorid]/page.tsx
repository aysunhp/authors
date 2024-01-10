import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Navbar from "@/app/components/Navbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useParams } from "next/navigation";

const AuthorDet = () => {
  const params = useParams<{ authorid: string }>();
  console.log(params.authorid);
  return (
    <>
      <h1>Salam</h1>
      {/* <Navbar /> */}
      {/* <Container maxWidth="xl">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
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
              <Button
                variant="contained"
                color="error"
                style={{ margin: "auto" }}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Container> */}
    </>
  );
};

export default AuthorDet;
