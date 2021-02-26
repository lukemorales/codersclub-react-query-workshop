import { useCallback, useEffect, useState } from 'react';

import { api } from '@services';
import {
  SeasonResponse,
  SeasonAnime,
  TopAiringResponse,
  TopAiringAnime,
} from '@common/types/api';

import * as S from './styles';

const INITIAL_STATE = {
  season: [] as SeasonAnime[],
  top: [] as TopAiringAnime[],
};

const Dashboard = () => {
  const [data, setData] = useState(INITIAL_STATE);

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
        const [seasonResponse, topAiringResponse] = await Promise.all([
          api.get<SeasonResponse>('/season/2021/summer'),
          api.get<TopAiringResponse>('/top/anime/1/airing'),
        ]);

        updateState({
          season: seasonResponse.data.anime,
          top: topAiringResponse.data.top,
        });
      } catch (err) {
        console.warn(err);
      }
    })();
  }, [updateState]);

  return (
    <S.Container>
      <S.HeroImage
        src="https://i.ytimg.com/vi/boBDjzIxqtQ/maxresdefault.jpg"
        alt="Re:Zero"
      />

      <h3>Season Highlights</h3>

      <S.SeasonHighlight>
        {data.season.map((anime, index) => {
          if (index === 5 || index > 7) {
            return null;
          }

          return (
            <div key={anime.mal_id}>
              <img src={anime.image_url} alt={anime.title} />

              <span>{anime.title}</span>
            </div>
          );
        })}
      </S.SeasonHighlight>

      <h3>Top Airing</h3>

      <S.TopAiring>
        {data.top.map((anime, index) => {
          if (index > 5) {
            return null;
          }

          return (
            <div key={anime.mal_id}>
              <img src={anime.image_url} alt={anime.title} />

              <span>{anime.title}</span>
            </div>
          );
        })}
      </S.TopAiring>
    </S.Container>
  );
};

export default Dashboard;
