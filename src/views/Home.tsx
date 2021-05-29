import Header from '../components/Header';
import InfoArticle from '../components/InfoArticle';
import InfrastructureArticle from '../components/InfrastructureArticle';
import Footer from '../components/Footer';

export const Home = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <InfoArticle />
        <InfrastructureArticle />
      </main>
      <Footer />
    </>
  );
};

export default Home;
