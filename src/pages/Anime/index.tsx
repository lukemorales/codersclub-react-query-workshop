import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { api } from '@services';
import { AnimeResponse } from '@common/types/api';
import { StarRating } from '@components';

import * as S from './styles';

const Anime = () => {
  const { animeId } = useParams<{ animeId: string }>();

  const [anime, setAnime] = useState({} as AnimeResponse);

  useEffect(() => {
    (async () => {
      const { data } = await api.get<AnimeResponse>(`/anime/${animeId}`);

      setAnime(data);
    })();
  }, [animeId]);

  return (
    <S.Container>
      <h1>
        {anime.title}
        <p>{anime.title_english}</p>
      </h1>

      <p>Sinopse: {anime.synopsis}</p>
      <p>trailer: {anime.trailer_url}</p>
      <p>episodes: {anime.episodes}</p>
      <p>aired: {JSON.stringify(anime.aired)}</p>
      <p>airing: {anime.airing}</p>
      <p>broadcast: {anime.broadcast}</p>
      <p>duration: {anime.duration}</p>
      <p>genres: {JSON.stringify(anime.genres)}</p>
      <p>image: {JSON.stringify(anime.image_url)}</p>
      <p>rank: {JSON.stringify(anime.rank)}</p>
      <p>rating: {JSON.stringify(anime.rating)}</p>
      <p>source: {JSON.stringify(anime.source)}</p>
      <p>status: {JSON.stringify(anime.status)}</p>
      <p>studios: {JSON.stringify(anime.studios)}</p>
      <p>url: {JSON.stringify(anime.url)}</p>

      <StarRating value={anime.score} />
    </S.Container>
  );
};

export default Anime;
