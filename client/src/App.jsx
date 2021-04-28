import React, { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const options = {
    method: "GET",
    url: "https://api-baseball.p.rapidapi.com/standings",
    params: { league: "1", season: "2021" },
    headers: {
      "x-rapidapi-key": "916506272cmshfc8573fdda60a55p133c1ajsnacc6487e2f26",
      "x-rapidapi-host": "api-baseball.p.rapidapi.com",
    },
  };

  const [data, setData] = useState([]);
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [fourth, setFourth] = useState([]);
  const [fifth, setFifth] = useState([]);
  const [winTotals, setWinTotals] = useState(null);
  const [loseTotals, setLoseTotals] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.request(options);
      const data = response.data.response[0];
      setData(data);

      let nlWest = data
        .filter((a) => a.group.name === "NL West")
        .sort((a, b) => b.games.win.percentage - a.games.win.percentage);

      let nlCentral = data
        .filter((a) => a.group.name === "NL Central")
        .sort((a, b) => b.games.win.percentage - a.games.win.percentage);

      let nlEast = data
        .filter((a) => a.group.name === "NL East")
        .sort((a, b) => b.games.win.percentage - a.games.win.percentage);

      let alWest = data
        .filter((a) => a.group.name === "AL West")
        .sort((a, b) => b.games.win.percentage - a.games.win.percentage);

      let alCentral = data
        .filter((a) => a.group.name === "AL Central")
        .sort((a, b) => b.games.win.percentage - a.games.win.percentage);

      let alEast = data
        .filter((a) => a.group.name === "AL East")
        .sort((a, b) => b.games.win.percentage - a.games.win.percentage);

      let first_array = new Array(
        nlWest[0],
        nlCentral[0],
        nlEast[0],
        alWest[0],
        alCentral[0],
        alEast[0]
      );

      let second_array = new Array(
        nlWest[1],
        nlCentral[1],
        nlEast[1],
        alWest[1],
        alCentral[1],
        alEast[1]
      );
      let third_array = new Array(
        nlWest[2],
        nlCentral[2],
        nlEast[2],
        alWest[2],
        alCentral[2],
        alEast[2]
      );
      let fourth_array = new Array(
        nlWest[3],
        nlCentral[3],
        nlEast[3],
        alWest[3],
        alCentral[3],
        alEast[3]
      );
      let fifth_array = new Array(
        nlWest[4],
        nlCentral[4],
        nlEast[4],
        alWest[4],
        alCentral[4],
        alEast[4]
      );
      setFirst(first_array);
      setSecond(second_array);
      setThird(third_array);
      setFourth(fourth_array);
      setFifth(fifth_array);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>MLB Standings</h1>
      <table>
        <tr>
          {first.map((team) => (
            <td key={team.team.id}>
              <img
                onClick={() => {
                  setWinTotals("Wins " + team.games.win.total +',');
                  setLoseTotals("Losses " + team.games.lose.total);
                }}
                src={`/images/${team.team.name}.png`}
                width="200px"
                height="100px"
              />
            </td>
          ))}
        </tr>
        <br></br>
        <tr>
          {second.map((team) => (
            <td key={team.team.id}>
              <img
                onClick={() => {
                  setWinTotals("Wins " + team.games.win.total +',');
                  setLoseTotals("Losses " + team.games.lose.total);
                }}
                src={`/images/${team.team.name}.png`}
                width="200px"
                height="100px"
              />
            </td>
          ))}
        </tr>
        <br></br>
        <tr>
          {third.map((team) => (
            <td key={team.team.id}>
              <img
                onClick={() => {
                  setWinTotals("Wins " + team.games.win.total+',');
                  setLoseTotals("Losses " + team.games.lose.total);
                }}
                src={`/images/${team.team.name}.png`}
                width="200px"
                height="100px"
              />
            </td>
          ))}
        </tr>
        <br></br>
        <tr>
          {fourth.map((team) => (
            <td key={team.team.id}>
              <img
                onClick={() => {
                  setWinTotals("Wins " + team.games.win.total +',');
                  setLoseTotals("Losses " + team.games.lose.total);
                }}
                src={`/images/${team.team.name}.png`}
                width="200px"
                height="100px"
              />
            </td>
          ))}
        </tr>
        <br></br>
        <tr>
          {fifth.map((team) => (
            <td key={team.team.id}>
              <img
                onClick={() => {
                  setWinTotals("Wins " + team.games.win.total +',');
                  setLoseTotals("Losses " + team.games.lose.total);
                }}
                src={`/images/${team.team.name}.png`}
                width="200px"
                height="100px"
              />
            </td>
          ))}
        </tr>
      </table>
      <p>
        Record: {winTotals}  {loseTotals}
      </p>
    </div>
  );
}

export default App;
