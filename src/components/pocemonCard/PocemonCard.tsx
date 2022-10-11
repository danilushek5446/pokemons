import type { FC } from 'react';
import { useState, useEffect } from 'react';

import { getOnePocemon } from '../../http/getOne';
import { useAppSelector } from '../../store/hooks';
import type { OnePokemonType } from '../../types/singlePocemonTypes';
import { StyledMainPocemonCardContainer } from './PocemonCard.styles';

type PropType = {
  name: string;
  url: string;
};

const PocemonCard: FC<PropType> = ({ name, url }) => {
  const [pocemon, setPocemon] = useState<OnePokemonType>();
  const pocemonsArray = useAppSelector((state) => state.poceomons.pocemonArray);

  useEffect(() => {
    (async () => {
      const pocemonInfo = await getOnePocemon(url);
      // eslint-disable-next-line no-console
      console.log(pocemonInfo.name);
      if (pocemonInfo) {
        setPocemon(() => {
          return pocemonInfo;
        });
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pocemonsArray]);

  return (
    <StyledMainPocemonCardContainer>
      <span>{name}</span>
      <img src={pocemon?.sprites.front_default} alt="cannot load picture" />
    </StyledMainPocemonCardContainer>
  );
};

export default PocemonCard;
