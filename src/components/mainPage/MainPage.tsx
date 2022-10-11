import type { FC } from 'react';
import { useState, useEffect } from 'react';

import { getAllPocemons } from '../../http/getAll';
import type { FetchAllPocemonsType } from '../../types/types';
import PocemonCard from '../pocemonCard/PocemonCard';
import { StyledMainPageContainer } from './MainPage.styles';

const MainPage: FC = () => {
  const [pocemons, setPocemons] = useState<FetchAllPocemonsType>();

  useEffect(() => {
    (async () => {
      const pocemon = await getAllPocemons();

      if (pocemon) {
        setPocemons(() => {
          return pocemon;
        });
      }
    })();
  }, []);

  return (
    <StyledMainPageContainer>
      {pocemons?.results.map((item, index) => {
        return <PocemonCard key={index} name={item.name} url={item.url} />;
      })}
    </StyledMainPageContainer>
  );
};

export default MainPage;
