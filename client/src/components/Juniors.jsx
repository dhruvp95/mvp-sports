import React, { Component } from 'react'
import axios from 'axios'
// import JuniorsEntry from './JuniorsEntry'

class Juniors extends Component {

  constructor (props) {
    super(props);

  }

  

  render() {
    const { player } = this.props;
    // console.log('player props', this.props.player)
      return (
      
        
          <tbody className="table table-striped">
            <tr className="item-row" >
              <td> 
                <button type="button" className="btn btn-danger" onClick={() => this.props.remove(player.id)}>x</button>  
              </td>
              <td>{player.player}</td>
              <td>{player.wins}</td>
              <td>{player.losses}</td>
              <td>{player.percentage}</td>
              <td>{player.skunks}</td>
            </tr>
          </tbody>
        
      )
    } 
}



export default Juniors;