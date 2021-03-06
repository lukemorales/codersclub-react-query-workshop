import { useDashboardQueries } from '@hooks';

import * as S from './styles';
import ListItem from './ListItem';
import DashboardLoading from './DashboardLoading';

const Dashboard = () => {
  const [seasonQuery, topAiringQuery] = useDashboardQueries();

  if (seasonQuery.isLoading || topAiringQuery.isLoading) {
    return <DashboardLoading />;
  }

  return (
    <S.Container>
      <S.HeroImage
        src="https://i.ytimg.com/vi/boBDjzIxqtQ/maxresdefault.jpg"
        alt="Re:Zero"
      />

      <S.SeasonHighlight>
        <h3>Top Airing</h3>

        <ul>
          {topAiringQuery.data
            ?.sort(() => Math.random() - 0.5)
            .slice(0, 7)
            .map((anime) => (
              <ListItem key={anime.mal_id} data={anime} />
            ))}
        </ul>
      </S.SeasonHighlight>

      <S.TopAiring>
        <h3>Season Highlights</h3>

        <ul>
          {seasonQuery.data
            ?.sort(() => Math.random() - 0.5)
            .slice(0, 6)
            .map((anime) => (
              <ListItem key={anime.mal_id} data={anime} small />
            ))}
        </ul>
      </S.TopAiring>
    </S.Container>
  );
};

export default Dashboard;
