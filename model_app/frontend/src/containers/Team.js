import React, { Component }  from 'react';

import leaders from '../const/leader.js';
import members from '../const/member.js';
import TeamGridList from '../components/TeamGridList.js'
import SupGridList from '../components/SupGridList.js'
import LeadGridList from '../components/LeaderGridList.js'
import { makeStyles } from '@material-ui/core/styles';
import TeamFilter from '../components/TeamFilter'
import FunctionClick from '../components/FunctionClick'
import Grid from '@material-ui/core/Grid';
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core';




import './Team.css';


const Button = styled(MuiButton)(spacing);

function Team(props){
  let supervisorList = [];
  let list = [];
  let memberlist = [];

  members.forEach(member => {
    memberlist.push(member);
  })

  leaders.forEach(leader => {
    if (leader.designation === 'Research Supervisor') {
      supervisorList.push(leader);
    }
    else {
      list.push(leader);
    }
  });


  const styles = {
    button: {
        borderColor: '#66FCF1',
        backgroundColor: '#66FCF1',
        border: '1px solid',
        "&:hover": {
            backgroundColor: '#222629',
            color: '#66FCF1',
            borderColor: '#66FCF1',
        },
    },

    buttonContainer: {
        width: '100%'
    },

    SuperCard: {
      padding: '0px 0px 0px 0px',   
      textAlign: 'center',
      
    },

    CardBackground: {
      backgroundColor: '#222629',
      maxHeight: '100%',
      maxWidth: '100%',
      margin: '25px',
    },

    CardGreenBackground1: {
      maxWidth: ' 100%',
      maxHeight: '100%',
      backgroundColor: '#1b4441c2',
      alignItems: 'center'
    },

      

    Inner: {
      padding: '0px 0px 0px 0px', 
      maxHeight: '100%',
      maxWidth: '100%',
    },

    LeaderName: {
      textAlign: 'center',
      maxHeight: '100%',
    },

    Text: {
      textAlign: 'center',
    },

    header: {
      paddingTop: '30px',
        textAlign: 'center',
    },

    h2:{
      fontSize: '18px',
      marginTop: '1rem',
      marginBottom: '2rem',
    },



};



class Team extends Component {

  //error below with the classes
  const {classes} = this.props;

  return(

    <div className = {classes.CardGreenBackground}>

      <div className={classes.MainHeader}>
        <h2 className="heading">Meet The Team</h2>
      </div>        

      <div className = {classes.CardGreenBackground1}>
        <h3 align="left">Research Supervisor</h3>
        <SupGridList>
        </SupGridList>
      </div>

      

      <div className={classes.about-section}>
      
                   <Grid container spacing={0}>
                       <Grid item xs={13}>
                           <Typography variant="h5" component="h3" gutterBottom>
                               Team description
                       </Typography>
                           <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ligula, auctor ut dictum ac, malesuada et arcu. Vestibulum ut commodo enim, in pulvinar magna. Mauris est enim, pretium id porta ut, maximus at felis. Donec aliquam, velit a tempus accumsan, lorem metus viverra augue, ac convallis quam enim quis lacus. Aliquam ipsum orci, ullamcorper vel erat in, semper posuere tortor. Vestibulum consequat ante nec mauris iaculis ultrices. Vivamus non sagittis sem. Duis a laoreet ante, in facilisis nisl. Quisque tempor non orci id accumsan. Ut nulla augue, ultricies vel odio sed, porta finibus massa. Nunc auctor ante sit amet mi fermentum accumsan. Phasellus fermentum sed lacus id ornare. Curabitur congue, neque sed porta faucibus, risus orci aliquet ex, id fermentum nisl sapien vel sem. Nunc sodales, elit et hendrerit consectetur, sem mauris tempus ligula, sed faucibus quam libero a nibh. Sed orci ex, imperdiet dignissim urna ac, egestas bibendum tortor.
                       </p>
                           <div className={classes.button-container}>
 
                               <Button className="Button" variant="contained" color="inherit" href="#top">
                                   Learn More
                       </Button>
                           </div>
                       </Grid>
                      
                   </Grid>
               </div>




      <div className = {classes.CardGreenBackground1}>
        <h3 align="left">Team Leaders</h3>
        <LeadGridList></LeadGridList>
      </div>

      <div className = {classes.CardGreenBackground1} >
        <h3 align="left">Team Members</h3>
        <TeamGridList></TeamGridList>
      </div>

   </div>


 );
}

}



export default Team;
