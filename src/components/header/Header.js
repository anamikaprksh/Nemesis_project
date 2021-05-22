// import React from "react";
// import "./Header.css";


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    // position: screenLeft,
    // marginRight: theme.spacing(2),
    alignContent: "left",
    
  },
  outer:{
    display:"flex",
    justifyContent:"space-between",
  },
}));

export default function Head() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        
        <Toolbar  className={classes.outer}>
         
           <div>
          <Typography variant="h5" className={classes.title}>
            NEMESIS
          </Typography>
          </div>
          <div>
          <Button color="inherit" href="/">Login</Button>
          <Button color="inherit" href="/signup">SignUp</Button>
          <Button color="inherit" href="/">Logout</Button>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}







// export default function Head(){
// return(
//     <div>
//         hi
//     </div>
// );
// }