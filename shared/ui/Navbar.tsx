'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const drawerWidth = '240px';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNavigation = (page: string) => {
    if (page.toLowerCase() === 'home') {
      router.push('/');
    } else {
      router.push(`/${page.toLowerCase()}`);
    }
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <Box className="flex">
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open menu"
            onClick={handleDrawerOpen}
            edge="start"
            className={`mr-2 ${open ? 'hidden' : ''}`}
          >
            <MenuIcon />
          </IconButton>
          <ListItemText primary="MENU" />
        </Toolbar>
      </AppBar>
      <Box
        className={`fixed left-0 top-0 h-full transition-transform duration-300 ease-in-out transform ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          width: drawerWidth,
          backgroundColor: 'white',
          boxShadow: '2px 0 5px rgba(0,0,0,0.5)',
          zIndex: 1300,
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="flex-end" className="p-1">
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </Box>
        <List>
          {['Home', 'Songs', 'Albums'].map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => handleNavigation(text)}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      <Box
        component="main"
        className={`flex-grow p-3 transition-margin duration-300 ease-in-out ${open ? `ml-[${drawerWidth}]` : 'ml-0'}`}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
