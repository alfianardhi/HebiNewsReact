import React from "react";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {fetchHealthDatas} from '../Redux/actions.js';
import { connect } from 'react-redux';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  mainStyle: {
    paddingRight: theme.spacing.unit * 8,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 42,
    marginBottom: 5,
    marginTop: 60,
    maxWidth: '45%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 5,
    maxWidth: '100%',
  },
  img: {
    width: 135,
    height: 140,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

//let healthNewsDatas=[];

class HealthNews extends React.Component{

  /*componentDidMount() {
      axios
        .get("https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=5b68d64f98c7483a8dcde98a42ba0494")
        .then(response => {
          
          healthNewsDatas = response.data.articles;
          console.log('hasil rumah sakit var ------------- ', healthNewsDatas);  
        });
  }*/

  componentDidMount() {
    this.props.fetchHealthDatas();
  }

   render(){
        const { classes, theme } = this.props;

  return (
    
    <div className={classes.mainStyle}>
       <div style={{ marginTop: 20, padding: 30 }}>
        <Grid container spacing={40} justify="center">
        {this.props.healthNewsDatas.map(healthnews => (
            <Grid item key={healthnews.description}>
            <Paper className={classes.paper}>
              <Grid container spacing={16}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src={healthnews.urlToImage} />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                  <Typography gutterBottom component="h4" variant="3">
                      <a href={healthnews.url} style={{ color: '#000',textDecoration: 'none' }} target="_blank" title={healthnews.description}>
                        {healthnews.title}
                      </a>
                    </Typography>
                    
                    <Grid container >
                      <Grid item xs={6} sm={12}>
                        <Typography gutterBottom color="textSecondary">
                          {healthnews.content}
                        </Typography>
                      </Grid>
                      
                    </Grid>
                    <Grid container >
                      
                    </Grid>
                    <br/>
                    <Grid container >
                      <Typography gutterBottom color="textSecondary">
                        {healthnews.publishedAt}
                      </Typography>       
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            </Grid>
          ))}
        </Grid>
    </div>
    </div>  
    );
    }
}

const mapStateToProps = (state) => ({    
  healthNewsDatas:state.healthdata
});

const mapDispatchToProps = ({  
  fetchHealthDatas
})

export default connect(mapStateToProps,mapDispatchToProps) (withStyles(styles, { withTheme: true })(HealthNews));