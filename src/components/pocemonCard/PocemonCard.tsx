import type { FC } from 'react';
import { useState, useEffect } from 'react';

import { getOnePocemon } from '../../http/getOne';
import type { OnePokemonType } from '../../types/singlePocemonTypes';
import { StyledMainPocemonCardContainer } from './PocemonCard.styles';

type PropType = {
  name: string;
  url: string;
};

const PocemonCard: FC<PropType> = ({ name, url }) => {
  const [pocemon, setPocemon] = useState<OnePokemonType>();

  useEffect(() => {
    (async () => {
      const pocemonInfo = await getOnePocemon(url);

      if (pocemonInfo) {
        setPocemon(() => {
          return pocemonInfo;
        });
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledMainPocemonCardContainer>
      <span>{name}</span>
      <img src={pocemon?.sprites.front_default} alt="cannot load picture" />
    </StyledMainPocemonCardContainer>
  );
};

export default PocemonCard;
