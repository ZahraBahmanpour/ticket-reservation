import { useState } from 'react';
import SearchItem from './SearchItem';
const navbarStyle = {
  display: 'flex',
};
const SearchNav = (props) => {
  const { searchItems } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div style={navbarStyle}>
      <div style={navbarStyle}>
        {searchItems.map((item, i) => (
          <SearchItem
            key={i}
            title={item}
            active={i === activeIndex}
            handleClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchNav;
