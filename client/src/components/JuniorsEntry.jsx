import React, { Component } from 'react'
import axios from 'axios'
import Juniors from './Juniors'
import Loading from './Loading'
import Create from './Create';


class JuniorsEntry extends Component {

  constructor (props) {
    super(props);

    this.state = {
      playerData: this.props.juniors,
      player: '',
      wins: null,
      losses: null,
      skunks: null
    }

    this.savePlayer = this.savePlayer.bind(this);
    this.saveWins = this.saveWins.bind(this);
    this.saveLosses = this.saveLosses.bind(this);
    this.saveSkunks = this.saveSkunks.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  

  savePlayer(player) {
    this.setState({
      player: player
    })
  }

  saveWins(wins) {
    this.setState({
      wins: wins
    })
  }

  saveLosses(losses) {
    this.setState({
      losses: losses
    })
  }

  saveSkunks(skunks) {
    this.setState({
      skunks: skunks
    })
  }

  onSubmit () {
    console.log('submit button clicked')
    console.log('this is the state after clicking submit: ', this.state);
    //make sure all fields are filled out
    const {player, wins, losses, skunks} = this.state;

    if(!player || !wins || !losses || !skunks) {
      alert('Pleae make sure all fields are completed!')
    } else {
      axios.post('/api/players', {
        player: this.state.player,
        wins: this.state.wins,
        losses: this.state.losses,
        skunks: this.state.skunks
      })
        .then(() => {
          console.log('refreshing page')
          document.getElementById('player').value = '';
          document.getElementById('wins').value = '';
          document.getElementById('losses').value = '';
          document.getElementById('skunks').value = '';
          this.props.refresh();
        })
        .catch(err => console.log('error in posting', err));
    }

  }
  
  
  render() {
    console.log('TEST', this.props.juniors)
    
    return (
      <div>
        <div>
          <Create player={this.savePlayer} losses={this.saveLosses} wins={this.saveWins} skunks={this.saveSkunks} submit={this.onSubmit}/>
        </div>
        <div>
          <table className="table">
            <thead>
            <tr>
              <th></th>
              <th>Player Name</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Win %</th>
              <th>Skunks</th>
            </tr>
            </thead>
            
              {!this.props.juniors
              ? <Loading />
              : 
                this.props.juniors.map(player => 
                  <Juniors player={player} remove={this.props.remove}/>
                )
              }
          </table>
        </div>
      </div>
      
    )
  }

}

export default JuniorsEntry;
