// RemovePlayer.jsx
import React, { useState } from 'react';

const RemovePlayer = ({ players, onRemovePlayer }) => {
  const [selectedPlayer, setSelectedPlayer] = useState('');

  const handleRemovePlayer = () => {
    // Perform any necessary validation
    // Remove the selected player from the roster
    onRemovePlayer(selectedPlayer);
    // Reset the selection
    setSelectedPlayer('');
  };

  return (
    <div>
      <h2>Remove Player</h2>
      <select
        value={selectedPlayer}
        onChange={(e) => setSelectedPlayer(e.target.value)}
      >
        <option value="" disabled>Select player to remove</option>
        {players.map((player) => (
          <option key={player.id} value={player.name}>
            {player.name}
          </option>
        ))}
      </select>
      <button onClick={handleRemovePlayer}>Remove Player</button>
    </div>
  );
};

export default RemovePlayer;
