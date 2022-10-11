import type { FC } from 'react';
import { useEffect, useState } from 'react';
import logo from '../../assets/images/International_Pokémon_logo.svg.png';

import { StyledHeaderContainer } from './Header.styles';

const Header: FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <StyledHeaderContainer>
      <img src={`${logo}`}
        alt="cannot load"
        className="logo"
      />
      <span> Time : {date.toLocaleTimeString()}</span>
      <span> Date : {date.toLocaleDateString()}</span>
    </StyledHeaderContainer>
  );
};

export default Header;
