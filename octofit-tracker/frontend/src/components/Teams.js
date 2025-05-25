import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://silver-giggle-9q9rwjp7x4x29xj6-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      <ul className="list-group">
        {teams.map(team => (
          <li className="list-group-item" key={team._id}>
            <strong>{team.name}</strong> (Members: {team.members ? team.members.length : 0})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
