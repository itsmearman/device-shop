'use client'
import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, CssBaseline, Typography, Box } from '@mui/material';

type Event = {
  [key: string]: any
}
type UserProps = {
  id: number;
  firstName: string;
  Lastname: number;
  description: string;
  email: string;
  username: string;
}
const Login = () => {
  const [user,setUser] = useState<UserProps[]>([]); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const dataf = await fetch("https://dummyjson.com/users");
  //     const data = await dataf.json();
  //     setUser(data);
  //   };
    
  //   fetchUser();
  // }, []);

  // console.log(user);
  
  const handleSubmit = (event: Event) => {
    
    if (email === '' || password === '') {
      setError('All fields are required');
    } else {
      setError('');
      console.log("Logged in with: ", { email, password });
    }
  };
  
  return (
    
  <Container component="main" maxWidth="xs">
  <CssBaseline />
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 8
    }}
  >
    <Typography component="h1" variant="h5">
      Login
    </Typography>
    {error && <Typography color="error">{error}</Typography>}
    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        label="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete="email"
        autoFocus
        />
      <TextField
        margin="normal"
        required
        fullWidth
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        >
        Login
      </Button>
    </Box>
  </Box>
</Container>
    );
  };

  export default Login;











//   <Container component="main" maxWidth="xs">
//   <CssBaseline />
//   <Box
//     sx={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       marginTop: 8
//     }}
//   >
//     <Typography component="h1" variant="h5">
//       Login
//     </Typography>
//     {error && <Typography color="error">{error}</Typography>}
//     <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         label="Email Address"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         autoComplete="email"
//         autoFocus
//         />
//       <TextField
//         margin="normal"
//         required
//         fullWidth
//         label="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         autoComplete="current-password"
//         />
//       <Button
//         type="submit"
//         fullWidth
//         variant="contained"
//         sx={{ mt: 3, mb: 2 }}
//         >
//         Login
//       </Button>
//     </Box>
//   </Box>
// </Container>
