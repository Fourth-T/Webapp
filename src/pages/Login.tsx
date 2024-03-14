import Grid from '@mui/material/Grid';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
  <Grid container spacing={2} sx={{width:'100%'}}>
    <Grid item lg={6} className='gradient' sx={{height:'100vh', display:'flex', alignItems:'center'}}>
      <Typography variant="h2" sx={{p:5, color:'#f6f6f6'}}>Accede a la plataforma de administración</Typography>
    </Grid>
    <Grid item xs={6} sx={{alignItems:'center', display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <FormControl sx={{maxWidth:'50%', display:'flex'}} fullWidth>
        <TextField id="outlined-basic" label="Usuario" variant="outlined" />
      </FormControl>
      <FormControl sx={{ mt: 1, maxWidth:'50%', display:'flex'}} size='medium' fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button variant="contained" sx={{mt:2}}>Iniciar sesión</Button>
    </Grid>
  </Grid>
  )
}
