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

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    alignItemsAndJustifyContent: {
      width: 500,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
    },
  }));



  return(

    <div className = 'CardBackground'>

      <div className="MainHeader">
        <h2 className="heading">Meet The Team</h2>
      </div>        

      <div className = 'CardGreenBackground1'>
        <h3 align="left">Research Supervisor</h3>
        <SupGridList >
        </SupGridList>
      </div>

      

      <div className="about-section">
      
                   <Grid container spacing={0}>
                       <Grid item xs={13}>
                           <Typography variant="h5" component="h3" gutterBottom>
                               Team description
                       </Typography>
                           <p>
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ligula, auctor ut dictum ac, malesuada et arcu. Vestibulum ut commodo enim, in pulvinar magna. Mauris est enim, pretium id porta ut, maximus at felis. Donec aliquam, velit a tempus accumsan, lorem metus viverra augue, ac convallis quam enim quis lacus. Aliquam ipsum orci, ullamcorper vel erat in, semper posuere tortor. Vestibulum consequat ante nec mauris iaculis ultrices. Vivamus non sagittis sem. Duis a laoreet ante, in facilisis nisl. Quisque tempor non orci id accumsan. Ut nulla augue, ultricies vel odio sed, porta finibus massa. Nunc auctor ante sit amet mi fermentum accumsan. Phasellus fermentum sed lacus id ornare. Curabitur congue, neque sed porta faucibus, risus orci aliquet ex, id fermentum nisl sapien vel sem. Nunc sodales, elit et hendrerit consectetur, sem mauris tempus ligula, sed faucibus quam libero a nibh. Sed orci ex, imperdiet dignissim urna ac, egestas bibendum tortor.
                       </p>
                           <div className='button-container'>
 
                               <Button className="Button" variant="contained" color="inherit" href="#top">
                                   Learn More
                       </Button>
                           </div>
                       </Grid>
                      
                   </Grid>
               </div>




      <div className = 'CardGreenBackground1'>
        <h3 align="left">Team Leaders</h3>
        <LeadGridList></LeadGridList>
      </div>

      <div className = 'CardGreenBackground1' >
        <h3 align="left">Team Members</h3>
        <TeamGridList></TeamGridList>
      </div>

   </div>


 );
}


// function LeaderList(props){

//   const leaderCards = props.list.map(leader => {
//     return(
//       <TeamLeaderCardLeft key={leader.name} name={leader.name} description = {leader.major} />
//     );
//     }
//   );
//   return(<div>{leaderCards}</div>);
// }

// function MemberList(props){

//   const memberCards = props.list.map(member => {
//     return(
//       <MemberCardLeft key={member.name} name={member.name} description = {member.major} />
//     );
//     }
//   );
//   return(<div>{memberCards}</div>);
// }

// function SupervisorList(props) {
//   const supervisorCards = props.list.map(supervisor =>
//     <SupervisorCard key={supervisor.name} name={supervisor.name} description={supervisor.profession} image={supervisor.image}/>
//   );
//   return <div>{supervisorCards}</div>;
// }

// function TeamLeaderCardLeft(props){
//   return(
//     <div align= "left" className="LeaderCard">
//         <div className="Inner">
//           <h4 className="LeaderName">{props.name}</h4>
//           <h5 className="ProfessionText"> {props.description} </h5>
//         </div>
//     </div>

//   );

// }

// function MemberCardLeft(props){
//   return(
//     <div align= "left" className="LeaderCard">
//         <div className="Inner">
//           <h4 className="LeaderName">{props.name}</h4>
//           <h5 className="ProfessionText"> {props.description} </h5>
//         </div>
//     </div>

//   );

// }

// function SupervisorCard(props){
//   return(
//     <div align= "left" className="SuperCard">
//         <div className="Inner">
//           <h4 className="LeaderName">{props.name}</h4>
//           <h5 className="ProfessionText">{props.description}</h5>
//         </div>
//     </div>
//   );
// }



export default Team;
