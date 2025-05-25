import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://silver-giggle-9q9rwjp7x4x29xj6-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul className="list-group">
        {users.map(user => (
          <li className="list-group-item" key={user._id}>
            {user.username} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
