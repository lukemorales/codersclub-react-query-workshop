import { useCallback, useEffect, useState } from 'react';

import { api } from '@services';
import {
  SeasonResponse,
  SeasonAnime,
  TopAiringResponse,
  TopAiringAnime,
} from '@common/types/api';

import * as S from './styles';
import ListItem from './ListItem';
import DashboardLoading from './DashboardLoading';

const INITIAL_STATE = {
  season: [] as SeasonAnime[],
  top: [] as TopAiringAnime[],
};

const Dashboard = () => {
  const [data, setData] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(true);

  const updateState = useCallback(
    (newState: Partial<typeof INITIAL_STATE>) =>
      setData((prevState) => ({
        ...prevState,
        ...newState,
      })),
    [],
  );

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const [seasonResponse, topAiringResponse] = await Promise.all([
          api.get<SeasonResponse>('/season/2021/summer'),
          api.get<TopAiringResponse>('/top/anime/1/airing'),
        ]);

        updateState({
          season: seasonResponse.data.anime
            .filter((anime) => !anime.title.includes('Heion Sedai no '))
            .sort(() => Math.random() - 0.5),
          top: topAiringResponse.data.top.sort(() => Math.random() - 0.5),
        });
      } catch (err) {
        console.warn(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [updateState]);

  if (isLoading) {
    return <DashboardLoading />;
  }

  return (
    <S.Container>
      <S.HeroImage
        src="https://i.ytimg.com/vi/boBDjzIxqtQ/maxresdefault.jpg"
        alt="Re:Zero"
      />

      <S.SeasonHighlight>
        <h3>Season Highlights</h3>

        <ul>
          {data.season.slice(0, 7).map((anime) => (
            <ListItem key={anime.mal_id} data={anime} />
          ))}
        </ul>
      </S.SeasonHighlight>

      <S.TopAiring>
        <h3>Top Airing</h3>

        <ul>
          {data.top.slice(0, 6).map((anime) => (
            <ListItem key={anime.mal_id} data={anime} small />
          ))}
        </ul>
      </S.TopAiring>
    </S.Container>
  );
};

export default Dashboard;
