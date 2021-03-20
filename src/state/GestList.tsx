import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [guests, setGuest] = useState<string[]>([]);

  const onClick = () => {
    setGuest([...guests, name]);
    setName('');
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest, i) => (
          <li key={i}>{guest}</li>
        ))}
      </ul>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
