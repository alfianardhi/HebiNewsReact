import React, { Component } from 'react';
import MainContent from './MainContent.js';
import { connect } from 'react-redux';

class Home extends Component {

  constructor(props){
    super(props)
  }

  render() {
    console.log("CEK -->",this.props.contenttitle);
    return (
        <React.Fragment>
          <MainContent contenttitle={this.props.contenttitle} datecontent={this.props.contenttitle} greating={this.props.greating} datecontent={this.props.datecontent} content={this.props.content} closing={this.props.closing}/>
        </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({    
  contenttitle: state.contenttitle,
  datecontent:state.datecontent,
  greating:state.greating,
  datecontent:state.datecontent,
  content:state.content,
  closing:state.closing
});

const mapDispatchToProps = ({  
})

export default connect(mapStateToProps,mapDispatchToProps) (Home);
