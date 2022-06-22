import { useState } from 'react';
import useFetch from './useFetch';

const containerStyle = {
  width: '20%',
};

const DropDown = () => {
  const [queryString, setQueryString] = useState('');
  const { data: cities } = useFetch(
    `cities${queryString !== '' ? `?name=${queryString}` : ''}`
  );
  console.log(cities);
  return (
    <div style={containerStyle}>
      <input
        className="drop-down"
        type="text"
        placeholder="from"
        onChange={(e) => setQueryString(e.target.value)}
      />
      {cities && <div>{cities.map((city) => city.name)}</div>}
    </div>
  );
};

export default DropDown;
