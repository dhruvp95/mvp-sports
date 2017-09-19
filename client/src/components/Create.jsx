import React, { Component } from 'react'

const Create = ({ player, wins, losses, skunks, submit }) => (
    <div className="row">
        <div>
          <input type="text" placeholder="Name" id="player" onChange={(e) => player(e.target.value)}></input>
        </div>
        <div>
          <input type="text" placeholder="Wins" id="wins" onChange={(e) => wins(e.target.value)}></input>
        </div>
        <div>
          <input type="text" placeholder="Losses" id="losses" onChange={(e) => losses(e.target.value)}></input>
        </div>
        <div>
          <input type="text" placeholder="Skunks" id="skunks" onChange={(e) => skunks(e.target.value)}></input>
        </div>
        <div>
          <button type="submit" className="btn" onClick={submit}>Submit</button>
        </div>
    </div>
)


export default Create;
