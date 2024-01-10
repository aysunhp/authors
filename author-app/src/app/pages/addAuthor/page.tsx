"use client";
import Navbar from "@/app/components/Navbar";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getDatabase, ref, onValue, set, remove } from "firebase/database";
import app from "@/app/firbase/config";
type Props = {};

const AddAuthor = (props: Props) => {
  const [isDead, setIsDead] = React.useState<boolean>("");
  const [name, setName] = React.useState("");
  const [genre, setGenre] = React.useState("");
  const [year, setYear] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [image, setImage] = React.useState("");
  const [authors, setAuthors] = React.useState([]);

  const handleChange = (event: SelectChangeEvent) => {
    setIsDead(event.target.value as boolean);
  };

  const handleChangeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value as string);
  };

  const getRealTimeData = async () => {
    const db = getDatabase(app);
    const studentRef = ref(db, "authors");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      setAuthors(data);
    });
  };

  useEffect(() => {
    getRealTimeData();
  }, [name]);

  console.log(authors.length);
  const addData = async (obj) => {
    const db = getDatabase(app);
    set(ref(db, "authors/" + obj.id), obj);
    console.log(obj);
  };
  return (
    <>
      <Navbar />
      <Container
        maxWidth="xl"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontSize: "35px", fontWeight: "700" }}>Add Author</h1>
          <TextField
            id="standard-basic"
            label="Name*"
            variant="standard"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Birth Year*"
            variant="standard"
            onChange={(e) => {
              setYear(e.target.value);
            }}
          />
          <br />
          <TextField
            id="standard-basic"
            label="Genre*"
            variant="standard"
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          />
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">is Dead</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={isDead}
              label="is Dead"
              onChange={handleChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              onChange={handleChangeGender}
            >
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
            </Select>
          </FormControl>
          <br />
          <TextField
            id="standard-basic"
            label="ImageURL*"
            variant="standard"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <br />
          <button
            onClick={(e) => {
              e.preventDefault();
              let obj = {
                id: authors.length,
                name: name,
                genre: genre,
                gender: gender,
                year: year,
                isDead: isDead,
                image: image,
              };
              addData(obj);
            }}
          >
            Add
          </button>
        </Box>
      </Container>
    </>
  );
};

export default AddAuthor;
