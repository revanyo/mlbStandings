import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const options = {
    method: "GET",
    url: "https://api-baseball.p.rapidapi.com/standings",
    params: { league: "1", season: "2020" },
    headers: {
      "x-rapidapi-key": "916506272cmshfc8573fdda60a55p133c1ajsnacc6487e2f26",
      "x-rapidapi-host": "api-baseball.p.rapidapi.com",
    },
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.request(options).then((res) => {
      setData(res.data.response[0]);
    });
  }, []);

  let nlWest = data.filter((team) => team.group.name === "NL West");
  let nlEast = data.filter((team) => team.group.name === "NL East");
  let nlCentral = data.filter((team) => team.group.name === "NL Central");
  let alWest = data.filter((team) => team.group.name === "AL West");
  let alEast = data.filter((team) => team.group.name === "AL East");
  let alCentral = data.filter((team) => team.group.name === "AL Central");

  console.log(nlCentral);
  return (
    <div>
      <p>NL West</p>
      <br></br>
      {nlWest.map((team) => (
        <p key={team.team.id}>
          {team.team.name}
          {team.games.win.total}
        </p>
      ))}
      <p>NL Central</p>
      <br></br>
      {nlEast.map((team) => (
        <p key={team.team.id}>
          {team.team.name}
          {team.games.win.total}
        </p>
      ))}
      <p>NL East</p>
      <br></br>
      {nlCentral.map((team) => (
        <p key={team.team.id}>
          {team.team.name}
          {team.games.win.total}
        </p>
      ))}
      <p>AL West</p>
      <br></br>
      {alWest.map((team) => (
        <p key={team.team.id}>
          {team.team.name}
          {team.games.win.total}
        </p>
      ))}
      <p>AL Central</p>
      <br></br>
      {alCentral.map((team) => (
        <p key={team.team.id}>
          {team.team.name}
          {team.games.win.total}
        </p>
      ))}
      <p>AL East</p>
      <br></br>
      {alEast.map((team) => (
        <p key={team.team.id}>
          {team.team.name}
          {team.games.win.total}
        </p>
      ))}
    </div>
  );
}

export default App;
