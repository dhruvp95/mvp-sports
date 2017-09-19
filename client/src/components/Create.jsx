import React, { Component } from 'react'

const Create = ({ player, wins, losses, skunks, submit }) => (
    <div>
        <div>
          <input type="text" placeholder="Name" onChange={(e) => player(e.target.value)}></input>
        </div>
        <div>
          <input type="text" placeholder="Wins" onChange={(e) => wins(e.target.value)}></input>
        </div>
        <div>
          <input type="text" placeholder="Losses" onChange={(e) => losses(e.target.value)}></input>
        </div>
        <div>
          <input type="text" placeholder="Skunks" onChange={(e) => skunks(e.target.value)}></input>
        </div>
        <div>
          <button type="submit" className="btn" onClick={submit}>Submit</button>
        </div>
    </div>
)


export default Create;
