import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';


const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
  },
  sidebarPaper: {
    width: '250px',
    maxWidth: '47vw',
    backgroundColor: 'black',
  },
  listItem: {
    textAlign: 'center',
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.3rem',
  },
});

const SidebarMenu = () => {
  const classes = useStyles();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  /////////hack to trigger sidebare close on route change///////////
  const route = useLocation();
  useEffect(() => {
    setSidebarOpen(false);
  }, [route]);
  /////////////////////////////////////////////////////////////////

  return (
    <>
      <div
        style={{ cursor: 'pointer', display: 'flex', marginLeft: '2rem', }}
      >
        <Menu onClick={() => setSidebarOpen(true)} />
      </div>
      <Drawer
        anchor="right"
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        classes={{ paper: classes.sidebarPaper }}
      >
        <List
        >
          <NavLink to='/' exact className={classes.link}
            activeStyle={{ cursor: 'default', fontWeight: 'bold', }}
          >
            <ListItem className={classes.listItem}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText disableTypography primary={'Home'} />
            </ListItem>
          </NavLink>
          {/* <NavLink to='/diagnoses' exact className={classes.link}
            activeStyle={{ cursor: 'default', fontWeight: 'bold', }}
          >
            <ListItem className={classes.listItem}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText disableTypography primary={'Gallery'} />
            </ListItem>
          </NavLink> */}
        </List>
      </Drawer>
    </>
  );
};

export default SidebarMenu;

/* servicesClickHandler = () => {
    window.scrollTo(0, window);
    this.onSetSidebarOpen(false);
    this.props.servicesClickHandler();
}

contactClickHandler = () => {
    window.scrollTo(0, window);
    this.onSetSidebarOpen(false);
    this.props.contactClickHandler();
} */
