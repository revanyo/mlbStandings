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

  useEffect(() => {
    axios.request(options).then((res) => {
      setData(res.data.response[0]);
    });
  }, []);

  let data_filtered = Array.from(new Set(data.map((a) => a.team.name))).map(
    (name) => {
      return data.find((a) => a.team.name === name);
    }
  );

  let first = data.filter((team) => team.position === 1);
  let first_unique = Array.from(new Set(first.map((a) => a.team.name))).map(
    (name) => {
      return first.find((a) => a.team.name === name);
    }
  );

  let second = data.filter((team) => team.position === 2);
  let second_unique = Array.from(new Set(second.map((a) => a.team.name))).map(
    (name) => {
      return second.find((a) => a.team.name === name);
    }
  );

  let third = data.filter((team) => team.position === 2);
  let third_unique = Array.from(new Set(third.map((a) => a.team.name))).map(
    (name) => {
      return third.find((a) => a.team.name === name);
    }
  );

  let fourth = data.filter((team) => team.position === 2);
  let fourth_unique = Array.from(new Set(fourth.map((a) => a.team.name))).map(
    (name) => {
      return fourth.find((a) => a.team.name === name);
    }
  );

  let fifth = data.filter((team) => team.position === 2);
  let fifth_unique = Array.from(new Set(fifth.map((a) => a.team.name))).map(
    (name) => {
      return fifth.find((a) => a.team.name === name);
    }
  );
  console.log(data_filtered);
  return (
    <div>
      <table>
        <tr>
          {first_unique.map((team) => (
            <td key={team.team.id}>
              <img src={team.team.logo} width="100" height="132" />
            </td>
          ))}
        </tr>
        <tr>
          {second_unique.map((team) => (
            <td key={team.team.id}>
              <img src={team.team.logo} width="100" height="132" />
            </td>
          ))}
        </tr>
      </table>
    </div>
  );
}

export default App;
