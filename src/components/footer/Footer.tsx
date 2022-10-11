import type { FC } from 'react';
import { useEffect, useState } from 'react';
import logo from '../../assets/images/International_Pokémon_logo.svg.png';

import { StyledFooterContainer } from './Footer.styles';

const Footer: FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  });

  return (
    <StyledFooterContainer>
      <img src={`${logo}`}
        alt="cannot load"
        className="logo"
      />
      <span> Width : {width}</span>
    </StyledFooterContainer>
  );
};

export default Footer;
