import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  Link,
  Button,

} from "@material-ui/core";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, countryName, theme) {
  return {
    fontWeight:
      countryName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function CreateAccount() {

  const theme = useTheme();
  const [countryName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 600,
    margin: "20px auto",
  };

  const avatarStyle = {
    backgroundColor: "#98b4aa",
    width: "100px",
    height: "100px",
  };

  const buttonStyle = {
    margin: "25px 0",
    backgroundColor: "#98b4aa",
    color: "white",

  };


  const iconStyle = {
    fontSize: "50px",
  };

  const companyName = {
    fontFamily: "Julius Sans One",
    justifyContent: "center",
    color: "#495371",
    fontSize: "50px",
  };

 

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <CleaningServicesIcon style={iconStyle} />
          </Avatar>
          <h1 style={companyName}>upKeeper</h1>

          <h3>Where do you clean?</h3>
        </Grid>
        <div>
      <FormControl sx={{ m: 1, width: 580 }}>
        <InputLabel id="demo-multiple-chip-label">Select your city...</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={countryName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {cities.map((city) => (
            <MenuItem
              key={city}
              value={city}
              style={getStyles(city, countryName, theme)}
            >
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    <Button type="submit" fullWidth style={buttonStyle} color="primary">
          BACK
        </Button>
        <Button type="submit" fullWidth style={buttonStyle} color="primary">
          NEXT
        </Button>
        <Typography align="center">
          Already have an account?
          <Link href="/login">Sign in here.</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}


const cities = [
  "Toronto",
  "Vancouver",
  "Calgary",
  "Edmonton",
  "Ottawa",
  "Montreal",
  "Windsor",
  "Sarnia",
  "London",
  "Victoria",
  "St.Johns",
  "Moncton",
  "Fredericton",
  "Halifax",
  "Quebec City",
  "Winnipeg",
  "Hamilton",
  "Kingston",
  "Charlottetown",
  "Regina",
  "Thunder Bay",
  "Surrey",
];