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

class MainContent extends React.Component{
    render(){
        const { classes, theme } = this.props;

  return (
    <div className={classes.mainStyle}>
      <Grid container spacing={16}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom component="h3" variant="h4" align="center">
                {this.props.contenttitle}
              </Typography>
              <Typography gutterBottom color="textSecondary">
                {this.props.datecontent}
              </Typography>
              <Typography variant="body2" gutterBottom>
                
              </Typography>
              <Typography variant="h2" variant="headline">
                {this.props.greating}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {this.props.content}
              </Typography>
              <br/>
             <Typography variant="body2" gutterBottom>
                {this.props.closing}
             </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>  
    );
    }
}

export default withStyles(styles, { withTheme: true })(MainContent);
