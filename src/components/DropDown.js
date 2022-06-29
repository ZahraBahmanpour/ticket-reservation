import { useState, useRef, useEffect } from 'react';
import DropDownItem from './DropDownItem';
import useFetch from './useFetch';

const containerStyle = {
  width: '20%',
};

const itemContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '2px 7px 18px -4px rgba(0, 0, 0, 0.66)',
  transition: 'all 0.5s',
};

const DropDown = () => {
  const [queryString, setQueryString] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState('1');

  const dropDownRef = useRef(null);

  const { data: cities } = useFetch(
    `cities${queryString !== '' ? `?name=${queryString}` : ''}`
  );

  useEffect(() => {
    const handleOutSideClick = (e) => {
      console.log(dropDownRef.current);
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleOutSideClick);
  }, []);

  console.log(cities);
  console.log(selected);
  const handleItemClick = (id) => {
    setSelected(id);
    setIsOpen(false);
  };
  return (
    <div style={containerStyle} ref={dropDownRef}>
      <input
        className="drop-down"
        type="text"
        placeholder="from"
        onChange={(e) => setQueryString(e.target.value)}
        onClick={() => setIsOpen(!isOpen)}
        value={
          cities ? cities.filter((city) => city.id === selected)[0].name : ''
        }
      />
      {cities && isOpen && (
        <div style={itemContainerStyle}>
          {cities.map((city) => (
            <DropDownItem
              title={city.name}
              value={city.id}
              handleClick={handleItemClick}
              key={city.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
