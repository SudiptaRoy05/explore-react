import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const handleAddPlayers=()=>{
        const newTeam = team+1;
        setTeam(newTeam);
    }

    const handleReducePlayers =()=>{
        const newTeam = team-1;
        setTeam(newTeam);
    }


    const teamStyle = {
        border:'2px solid tomato',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }


    return(
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={handleAddPlayers}>Add Players</button>
            <button onClick={handleReducePlayers}>Remove Players</button>
        </div>
    )
}