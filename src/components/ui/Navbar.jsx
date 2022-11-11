import { useContext } from 'react';

import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

import { UIContext } from '../../context';

export const Navbar = () => {

  const { changeThemeDark, changeThemeLight, themeUI } = useContext( UIContext )

  return (
    <AppBar color="" sx={{ padding: 2 }}>

      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
        
        <Typography 
          variant="h1" 
          sx={{ fontSize: 18, fontWeight: "600" }}
        >Where in the world?</Typography>

        <Box display="flex" alignItems="center" gap={ 1 }>
          <IconButton>
            {
              themeUI === 'light'
              ? <DarkModeOutlinedIcon onClick={ () => changeThemeDark() }/>
              : <LightModeOutlinedIcon onClick={ () => changeThemeLight() } />
            }
          </IconButton>
          
          {
            themeUI === 'light'
            ? <Typography>Dark Mode</Typography>
            : <Typography>Light Mode</Typography>
          }
        </Box>
        
      </Toolbar>
    </AppBar>
  )
}
