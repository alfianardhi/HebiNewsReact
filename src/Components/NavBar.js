import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class NavBar extends React.Component{
    render(){
        const { classes } = this.props;
        console.log(this.props);
        return (
          <div className={classes.root}>
          <AppBar color="secondary">
            <Toolbar>
              <Toolbar>
                <Typography variant="headline" color="inherit">
                <Link style={{ color: '#FFF',textDecoration: 'none' }} to="/">{this.props.title}</Link>
              </Typography>
              </Toolbar>
              {this.props.menus.map(a => (
                <Toolbar key={a.id}>
                  <Typography className={classes.title} variant="subtitle1" color="inherit" noWrap>
                    <Link style={{ color: '#FFF',textDecoration: 'none' }} to={a.pathlink}>{a.menu}</Link>
                  </Typography>
                </Toolbar>
              ))}
 
            </Toolbar>
          </AppBar>
          </div>
        );
    }
}



export default withStyles(styles)(NavBar);