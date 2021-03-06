export interface AnimeResponse {
  readonly aired?: Aired;
  readonly airing: boolean;
  readonly background: string;
  readonly broadcast: string;
  readonly duration: string;
  readonly ending_themes: string[];
  readonly episodes: number;
  readonly favorites: number;
  readonly genres: Genre[];
  readonly image_url: string;
  readonly licensors: Genre[];
  readonly mal_id: number;
  readonly members: number;
  readonly opening_themes: string[];
  readonly popularity: number;
  readonly premiered: string;
  readonly producers: Genre[];
  readonly rank: number;
  readonly rating: string;
  readonly related: Related;
  readonly request_cache_expiry: number;
  readonly request_cached: boolean;
  readonly request_hash: string;
  readonly score: number;
  readonly scored_by: number;
  readonly source: string;
  readonly status: string;
  readonly studios: Genre[];
  readonly synopsis: string;
  readonly title_english: string;
  readonly title_japanese: string;
  readonly title_synonyms: string[];
  readonly title: string;
  readonly trailer_url: string;
  readonly type: string;
  readonly url: string;
}

interface Aired {
  readonly from: Date;
  readonly prop: Prop;
  readonly string: string;
  readonly to: Date;
}

interface Prop {
  readonly from: From;
  readonly to: From;
}

interface From {
  readonly day: number;
  readonly month: number;
  readonly year: number;
}

interface Genre {
  readonly mal_id: number;
  readonly name: string;
  readonly type: 'anime' | 'manga';
  readonly url: string;
}

interface Related {
  readonly Adaptation: Genre[];
  readonly 'Side story': Genre[];
  readonly Summary: Genre[];
}
