import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  mainStyle: {
    paddingRight: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 3,
    marginBottom: 5,
    marginTop: 100,
    maxWidth: '100%',
  },
});

class About extends React.Component{
    render(){
        const { classes, theme } = this.props;

  return (
    <div className={classes.mainStyle}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom component="h3" variant="h4" align="center">
                Daftar Berita Kesehatan dan Bisnis (HEBI) built dengan ReactJS
              </Typography>
              <br/><br/>
              <Typography variant="body3" gutterBottom>
                Source Code :    
                <a href="https://github.com/alfianardhi/HebiNewsReact.git" style={{ color: '#000'}} target="_blank">
                https://github.com/alfianardhi/HebiNewsReact.git
                </a>
              </Typography>
              <br/>
              <Typography variant="body3" gutterBottom>
                Sumber Data :    
                <a href="https://newsapi.org/" style={{ color: '#000' }} target="_blank">
                    https://newsapi.org/
                </a>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>  
    );
    }
}

export default withStyles(styles, { withTheme: true })(About);
