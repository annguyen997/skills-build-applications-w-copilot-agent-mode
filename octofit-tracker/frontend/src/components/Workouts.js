import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://silver-giggle-9q9rwjp7x4x29xj6-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div>
      <h1>Workouts</h1>
      <ul className="list-group">
        {workouts.map(workout => (
          <li className="list-group-item" key={workout._id}>
            <strong>{workout.name}</strong>: {workout.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
