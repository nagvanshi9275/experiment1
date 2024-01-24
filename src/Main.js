


import React from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google'; // Import the Google icon

import { initializeApp } from "firebase/app";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function Main() {

  const[show, setshow] = React.useState(true)

  const[blank, setblank] = React.useState(false)


  const firebaseConfig = {
    
    apiKey: "AIzaSyCyiRYExTy7v6MttDHcogPu0WP8pg1Hi-o",
authDomain: "prototype-8064e.firebaseapp.com",
projectId: "prototype-8064e",
storageBucket: "prototype-8064e.appspot.com",
messagingSenderId: "524754609863",
appId: "1:524754609863:web:2584c9ee0f303bda2080e2"




};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth(app);



      function Google(){

        console.log("Google")

        signInWithPopup(auth, provider)
        .then((result) => {
       
          setshow(false)

          setblank(true)


        }).catch((error) => {
          console.error(error.message)

        });











      }







  return (
    <Container maxWidth="xs">
     {show && <Grid container spacing={2} justifyContent="center" alignItems="center" direction="column">
        <Grid item>
          <Typography variant="h4">Login</Typography>
        </Grid>
        <Grid item>
          <TextField label="Name" type="text" variant="outlined" placeholder="Name" />
        </Grid>
        <Grid item>
          <TextField label="Password" type="password" variant="outlined" />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Create account
          </Button>
        </Grid>
        <Grid item>
          <Button
            
            onClick={Google}
            variant="contained"
            color="secondary"
            startIcon={<GoogleIcon />} // Add the Google icon here
          >
            Sign in with Google
          </Button>
        </Grid>
      </Grid>}

     {blank && <h1>login ho gya</h1>}




    </Container>
  );
}






