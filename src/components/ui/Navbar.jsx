import { useContext } from "react";

import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import { UIContext } from "../../context/ui";

export const Navbar = () => {
  
  const { changeThemeDark, changeThemeLight, themeUI } = useContext(UIContext);

  return (
    <AppBar
      color="primary"
      elevation={0}
      sx={{ padding: 2, boxShadow: "0 5px 5px rgba(0, 0, 0, 0.05)" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h1" sx={{ fontSize: 18, fontWeight: "600" }}>
          Where in the world?
        </Typography>

        <Box display="flex" alignItems="center" gap={1}>
          {themeUI === "light" ? (
            <IconButton color="secondary" onClick={changeThemeDark}>
              <DarkModeOutlinedIcon />
            </IconButton>
          ) : (
            <IconButton color="secondary" onClick={changeThemeLight}>
              <LightModeOutlinedIcon />
            </IconButton>
          )}

          {themeUI === "light" ? (
            <Typography>Dark Mode</Typography>
          ) : (
            <Typography>Light Mode</Typography>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
