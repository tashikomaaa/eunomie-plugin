import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from "./static/images/logo.png";
import { useReactMediaRecorder } from "react-media-recorder";
import TextField from '@mui/material/TextField';
import StopIcon from '@mui/icons-material/Stop';
import { Fab, Paper } from '@mui/material';
import Dashboard from './Dashboard/Dashboard';
import Profil from './Profil/Profil';

const settings = ['Profile', 'Dashboard'];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [nav, setNAV] = React.useState<string>("DASHBOARD");
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  // const { status, startRecording, stopRecording, mediaBlobUrl } =
  //   useReactMediaRecorder({ screen: true });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleNav = (key: string) => {
    switch (key) {
      case 'Profile':
        setNAV("PROFIL")
        break;
      case 'Dashboard':
        setNAV("DASHBOARD")
        break;
      default:
        break;
    }
  }
  return (
    <div>
      <AppBar position="static" color='default'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Avatar
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width: 56, height: 56 }}
              src={logo}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              interceptor
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/profil.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => handleNav(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {nav === "DASHBOARD" && <Dashboard />}
      {nav === "PROFIL" && <Profil />}
      <div>
        {/* <p>{status}</p>
        <button onClick={startRecording}>Start Recording</button>
        <button onClick={stopRecording}>Stop Recording</button> */}
      </div>
      <Fab style={{
        position: 'absolute',
        bottom: 16,
        right: 16,
      }} color="error" aria-label="add">
        <StopIcon />
      </Fab>
    </div >
  );
}

export default App;
