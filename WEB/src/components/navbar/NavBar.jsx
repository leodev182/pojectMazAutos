import * as React from 'react';
import {Box, Toolbar,IconButton, Typography, Menu, Container, Button, Tooltip, MenuItem} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/MazAutos.svg';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const pages = [
        {
            name:'Inicio',
            href:'login'
        },
        {
            name:'Ofertas',
            href:'pools'
        },
        {
            name:'Reservas',
            href:'booking'
        },
        {
            name:'Perfil',
            href:'profile'
        }
    ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{
        bgcolor: 'white', 
        boxShadow: 'none', 
        borderBottom: '0.5px solid', 
        borderColor: "#0090DF",
        height:'80',
        maxHeight:'80px'
    }}>

      <Container maxWidth="lg">
                <Toolbar disableGutters>
            
{/* Titulo de la web para desktop */}
                <Box
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex', width: '150px', height: '60px'},
                    }}
                >
                    <img src={Logo} alt="Logo" className='logo' />
                </Box>
                

{/* Titulo de la web para mobile */}
                <Box
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none', width: '150px', height: '60px' },
                    flexGrow: 1,
                    }}
                    >
                    <img src={Logo} alt="Logo" className='logo'/>        
                </Box>

{/* Menu desktop */}
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'right'}}}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'primary', display: 'block' }}
                    >
                        <NavLink to={page.href}>
                            {page.name}
                        </NavLink>
                    </Button>
                    ))}
                </Box>

{/* Menu mobile */}

                <Box sx={{ flexGrow: 0 }}>
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
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                    <Tooltip title="Open settings">
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="primary"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <NavLink to={page.href}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                        </NavLink>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Tooltip>
                </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;

