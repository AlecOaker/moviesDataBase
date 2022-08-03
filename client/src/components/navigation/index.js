import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  ListItemIcon,
  Hidden,
  Menu,
  MenuItem,
  Button,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const list = (anchor) => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <Link
          component={RouterLink}
          to="settings"
          sx={{ textDecoration: "none" }}
        >
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" style={{ color: "grey" }} />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Hidden only={["lg", "xl"]}>
            <IconButton
              onClick={() => setDrawerOpen(true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Link
            component={RouterLink}
            to="/"
            sx={{ flexGrow: 1, color: "white", textDecoration: "none" }}
          >
            <Typography variant="h6" component="div">
              Movies recommendation
            </Typography>
          </Link>
          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            <Link component={RouterLink} to="settings">
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Settings
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navigation;
