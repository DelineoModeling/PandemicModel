import React, { Component }  from 'react';


import { Button } from 'reactstrap';
import leaders from '../const/leader.js';
import members from '../const/member.js';
import TeamGridList from '../components/TeamGridList.js'
import SupGridList from '../components/SupGridList.js'
import LeadGridList from '../components/LeaderGridList.js'
import { makeStyles } from '@material-ui/core/styles';
import FunctionClick from '../components/FunctionClick'
import Grid from '@material-ui/core/Grid';
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import MuiButton from "@material-ui/core/Button";

class TeamFilter extends Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.

  constructor(props) {
    super(props);
    this.state = {
      all: true,
      fs: false,
      sim: false,
      ml: false,
      info: false
    }
  this.changeDiv= this.changeDiv.bind(this);
}
  changeDiv() {
    this.setState({
      all: false,
      fs: false,
      sim: false,
      ml: false,
      info: false
  })
}



  render() {
    const { all } = this.state
    const { fs } = this.state
    const { sim } = this.state
    const { ml } = this.state
    const { info } = this.state

    const { showing} = this.state
    return (
      <div>
          <Button mt={2} variant="contained" color="primary" onClick={() => this.setState({ all: !all, fs: false, sim: false, ml: false, info: false })}>all</Button>

          <Button mt={2} variant="contained" color="primary"  onClick={() => this.setState({ all: false, fs: !fs, sim: false, ml: false, info: false})}>full stack</Button>

          <Button mt={2} variant="contained" color="primary"  onClick={() => this.setState({ all: false, fs: false, sim: !sim, ml: false, info: false })}>simulation</Button>

          <Button mt={2} variant="contained" color="primary"  onClick={() => this.setState({ all: false, fs: false, sim: false, ml: !ml, info: false })}>machine learning</Button>

          <Button mt={2} variant="contained" color="primary"  onClick={() => this.setState({ all: false, fs: false, sim: false, ml: false, info: !info })}>infop</Button>

          { all
              ?  <div>
                    <br></br>
                    <div className = 'CardGreenBackground1' >
                      <h3 align="left">Team Members</h3>
                      <TeamGridList></TeamGridList>
                    </div>
                </div>

              : null
          }
          { fs
            ?  <div>
                  <div className = 'TeamAbout'>
                    <h3> Full Stack Team Description </h3>
                  </div>
                  <div className = 'CardGreenBackground1' >
                    <h3 align="left">Team Members</h3>
                    <TeamGridList></TeamGridList>
                  </div>
              </div>
              : null
          }
          { sim
            ?  <div>
                  <div className = 'TeamAbout'>
                    <h3> Simulation Team Description </h3>
                  </div>
                  <div className = 'CardGreenBackground1' >
                    <h3 align="left">Team Members</h3>
                    <TeamGridList></TeamGridList>
                  </div>
              </div>
              : null
          }
          { ml
            ?  <div>
                  <div className = 'TeamAbout'>
                    <h3> Machine Learning Team Description </h3>
                  </div>
                  <div className = 'CardGreenBackground1' >
                    <h3 align="left">Team Members</h3>
                    <TeamGridList></TeamGridList>
                  </div>
              </div>
              : null
          }
          { info
            ?  <div>
                  <div className = 'TeamAbout'>
                    <h3> Information Team Descripiton </h3>
                  </div>
                  <div className = 'CardGreenBackground1' >
                    <h3 align="left">Team Members</h3>
                    <TeamGridList></TeamGridList>
                  </div>
              </div>
              : null
          }

      </div>
    );
  }
}
export default TeamFilter
