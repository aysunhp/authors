"use client";
import Navbar from "@/app/components/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Cards from "@/app/components/Cards";
import Grid from "@mui/material/Grid";
import app from "./../../firbase/config";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type Props = {};

const Authors = (props: Props) => {
  const router = useRouter();
  const [authors, setAuthors] = useState([]);
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const getRealTimeData = async () => {
    const db = getDatabase(app);
    const studentRef = ref(db, "authors");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setAuthors(data);
    });
  };

  useEffect(() => {
    getRealTimeData();
  }, []);

  const deleteData = async (id) => {
    const db = getDatabase(app);
    remove(ref(db, "authors/" + id));
    console.log(id);
  };

  return (
    <>
      <Navbar />
      <Container maxWidth="xl">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Gender"
              onChange={handleChange}
            >
              <MenuItem value={10}>Male</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          {authors &&
            authors.map((item) => {
              return (
                <Grid item xs={4} key={item.id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia sx={{ height: 240 }} image={item.image} />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        onClick={() => router.push("/pages/authors/"+{item.id})}
                      >
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.year} years old
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Genre: {item.genre}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gender:{item.gender}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        variant="contained"
                        color="error"
                        style={{ margin: "auto" }}
                        onClick={() => {
                          deleteData(item.id);
                        }}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default Authors;
