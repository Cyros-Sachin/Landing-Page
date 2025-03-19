import React from 'react';

const UserList = ({ users }) => {
  if (!users || users.length === 0) {
    return null; // Avoid rendering empty lists
  }

  return (
    <div className="user-list-container">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
