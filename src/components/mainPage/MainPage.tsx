import type { FC } from 'react';
import { useState, useMemo, useEffect } from 'react';
import { Pagination } from '@primer/react';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getPokemons } from '../../store/pocemons/pokemonThunk';
import PocemonCard from '../pocemonCard/PocemonCard';
import { StyledMainPageContainer } from './MainPage.styles';
import { myConfig } from '../../myConfig';
import type { PocemonQueryType } from '../../types/types';

const MainPage: FC = () => {
  const pocemons = useAppSelector((state) => state.poceomons);
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useAppDispatch();

  const countPaginationPages = useMemo(() => {
    return Math.ceil(pocemons.count / +(myConfig.perPage || 20));
  }, [pocemons.count]);

  const onPageChange = (event: React.MouseEvent, page: number) => {
    event.preventDefault();
    setPageNumber(page);

    const query: PocemonQueryType = {
      offset: 20 * +((page - 1) || 0),
      limit: +(myConfig.perPage || 20),
    };

    dispatch(getPokemons(query));
  };

  useEffect(() => {
    dispatch(getPokemons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledMainPageContainer>
      <div className="pocemon-item">
        {pocemons.pocemonArray?.map((item, index) => {
          return <PocemonCard key={index} name={item.name} url={item.url} />;
        })}
      </div>
      <Pagination
        pageCount={countPaginationPages || 1}
        currentPage={pageNumber}
        onPageChange={onPageChange}
      />
    </StyledMainPageContainer>
  );
};

export default MainPage;
