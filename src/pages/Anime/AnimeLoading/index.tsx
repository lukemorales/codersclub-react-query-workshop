import Skeleton from 'react-loading-skeleton';

import { generateArray } from '@utils';

import * as S from '../styles';

const AnimeLoading = () => (
  <S.Container>
    <S.Header>
      <h1>
        <Skeleton width="60%" />
      </h1>
      <p>
        <Skeleton width="32%" />
      </p>

      <Skeleton height={28} width={30 * 5} />
    </S.Header>

    <S.SectionWrapper>
      <Skeleton width={225} height={318} style={{ borderRadius: 16 }} />

      <div>
        <S.Section marginTop={0}>
          <h3>About:</h3>
          <p>
            <Skeleton />
          </p>
          <p>
            Duration: <Skeleton />
          </p>
          <p>
            Episodes: <Skeleton />
          </p>
        </S.Section>

        <S.Section>
          <h3>Aired:</h3>
          <p>
            <Skeleton />
          </p>
        </S.Section>

        <S.Section>
          <h3>Rating:</h3>
          <p>
            <Skeleton />
          </p>
        </S.Section>
      </div>
    </S.SectionWrapper>

    <S.SectionWrapper>
      <div style={{ marginRight: 'auto' }}>
        <S.Section marginTop={0}>
          <h3>Broadcast:</h3>
          <p>
            <Skeleton />
          </p>
        </S.Section>

        <S.Section marginTop={20}>
          <h3>Genres:</h3>

          <ul>
            {generateArray(3).map((position) => (
              <Skeleton key={position} />
            ))}
          </ul>
        </S.Section>

        <S.Section>
          <h3>Studios:</h3>

          <ul>
            {generateArray(2).map((position) => (
              <Skeleton key={position} />
            ))}
          </ul>
        </S.Section>

        <S.Section>
          <h3>More info:</h3>

          <span>
            <Skeleton />
          </span>
        </S.Section>
      </div>

      <Skeleton width={640} height={366} style={{ borderRadius: 16 }} />
    </S.SectionWrapper>
  </S.Container>
);

export default AnimeLoading;
