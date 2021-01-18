import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const {open , setOpen} = props;
  
//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    //   onClick={toggleDrawer(anchor, false)}
    //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
         
          <ListItem button key={'login'}>
            <NavLink exact to="/login"	><span><ListItemIcon> <VpnKeyIcon /></ListItemIcon>
            Login</span></NavLink>
          </ListItem>
          <ListItem button key={'signup'}>
           
            <NavLink exact to="/signup"	><span> <ListItemIcon> <AccountCircleIcon /></ListItemIcon>
            Signup</span></NavLink>
          </ListItem>
          <ListItem button key={'order'}>
            <NavLink exact to="/order"><span>
								<ListItemIcon> <DirectionsBikeIcon /></ListItemIcon>
                Order delivery</span>
             </NavLink>
          </ListItem>
          <ListItem button key={'about'}>
            <NavLink exact to="/about"	><span>
              <ListItemIcon> <HelpRoundedIcon /></ListItemIcon>
                About</span></NavLink>
          </ListItem>
      </List>
     
    </div>
  );

  return (
    <div>
      {
        <React.Fragment key={'top'}>
          <Drawer anchor={'top'} open={open} onClose={() =>setOpen(!open)}>
            {list('top')}
          </Drawer>
        </React.Fragment>
    }
    </div>
  );
}
