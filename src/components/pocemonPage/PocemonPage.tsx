import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getOneById } from '../../api/getOneById';
import type { OnePokemonType } from '../../types/singlePocemonTypes';
import { StyledPocemonContainer } from './PocemonPage.styles';

const PocemonPage: FC = () => {
  const [pocemon, setPocemon] = useState<OnePokemonType>();

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const pocemonInfo = await getOneById(+id!);

      if (pocemonInfo) {
        setPocemon(() => {
          return pocemonInfo;
        });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPocemonContainer>
      <div className="container">
        <div className="image-container">
          <img
            src={pocemon?.sprites.front_default}
            alt="cannot load picture"
          />
          <span>{pocemon?.name}</span>
          <span>{`base experienc: ${pocemon?.base_experience}`}</span>
        </div>
        <div className="abilities">
          <span>Abilities :</span>
          {pocemon?.abilities.map((item, index) => {
            return (
              <div
                className="abilitie"
                key={index}
              >
                {item.ability.name}
              </div>
            );
          })}
        </div>
        <div className="moves">
          <span>Moves :</span>
          {pocemon?.moves.map((item, index) => {
            return (
              <div
                className="move"
                key={index}
              >
                {item.move.name}
              </div>
            );
          })}
        </div>
      </div>
    </StyledPocemonContainer >
  );
};

export default PocemonPage;
