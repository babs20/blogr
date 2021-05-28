import Header from '../components/Header';
import InfoArticle from '../components/InfoArticle';
import InfrastructureArticle from '../components/InfrastructureArticle';

export const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <InfoArticle />
        <InfrastructureArticle />
      </main>
    </>
  );
};

export default Home;
