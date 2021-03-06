import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { api } from '@services';
import { AnimeResponse } from '@common/types/api';
import { StarRating } from '@components';
import { getYoutubeVideoId } from '@utils';

import * as S from './styles';
import AnimeLoading from './AnimeLoading';

const Anime = () => {
  const { animeId } = useParams<{ animeId: string }>();

  const [anime, setAnime] = useState({} as AnimeResponse);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<AnimeResponse>(`/anime/${animeId}`);

        setAnime(data);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [animeId]);

  if (isLoading) {
    return <AnimeLoading />;
  }

  return (
    <S.Container>
      <S.Header>
        <h1>{anime.title}</h1>
        <p>
          {anime.title_english}
          <S.StatusBadge
            status={anime.airing}
            marginLeft={anime.title_english ? 12 : 0}
          >
            {anime.status}
          </S.StatusBadge>
        </p>

        <StarRating value={anime.score} />
      </S.Header>

      <S.SectionWrapper>
        <S.AnimeThumbnail src={anime.image_url} alt={anime.title} />

        <div>
          <S.Section marginTop={0}>
            <h3>About:</h3>
            <p>{anime.synopsis}</p>
            <p>Duration: {anime.duration}</p>
            <p>Episodes: {anime.episodes}</p>
          </S.Section>

          <S.Section>
            <h3>Aired:</h3>
            <p>{anime.aired?.string}</p>
          </S.Section>

          {anime.rating && (
            <S.Section>
              <h3>Rating:</h3>
              <p>{anime.rating}</p>
            </S.Section>
          )}
        </div>
      </S.SectionWrapper>

      <S.SectionWrapper>
        <div style={{ marginRight: 'auto' }}>
          {anime.broadcast && (
            <S.Section marginTop={0}>
              <h3>Broadcast:</h3>
              <p>{anime.broadcast}</p>
            </S.Section>
          )}

          <S.Section marginTop={anime.broadcast ? 20 : 0}>
            <h3>Genres:</h3>

            <ul>
              {anime.genres
                ?.filter((genre) => genre.type === 'anime')
                .map(({ mal_id, name, url }) => (
                  <li key={mal_id}>
                    <a href={url} target="_blank" rel="noreferrer noopener">
                      {name}
                    </a>
                  </li>
                ))}
            </ul>
          </S.Section>

          <S.Section>
            <h3>Studios:</h3>

            <ul>
              {anime.studios
                ?.filter((genre) => genre.type === 'anime')
                .map(({ mal_id, name }) => (
                  <li key={mal_id}>{name}</li>
                ))}
            </ul>
          </S.Section>

          <S.Section>
            <h3>More info:</h3>

            <a href={anime.url} target="_blank" rel="noreferrer noopener">
              Go to MyAnimeList
            </a>
          </S.Section>
        </div>

        {anime.trailer_url && (
          <S.Player videoId={getYoutubeVideoId(anime.trailer_url)} />
        )}
      </S.SectionWrapper>
    </S.Container>
  );
};

export default Anime;
