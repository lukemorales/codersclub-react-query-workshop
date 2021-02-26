export type SeasonResponse = {
  request_hash: string;
  request_cached: boolean;
  request_cache_expiry: number;
  season_name: string;
  season_year: number;
  anime: SeasonAnime[];
};

export type SeasonAnime = {
  mal_id: number;
  url: string;
  title: string;
  image_url: string;
  synopsis: string;
  type: string;
  airing_start: string;
  episodes: number;
  members: number;
  genres: GenresEntityOrProducersEntity[];
  source: string;
  producers: GenresEntityOrProducersEntity[];
  score: number;
  licensors: string[];
  r18: boolean;
  kids: boolean;
  continuing: boolean;
};

type GenresEntityOrProducersEntity = {
  mal_id: number;
  type: string;
  name: string;
  url: string;
};
