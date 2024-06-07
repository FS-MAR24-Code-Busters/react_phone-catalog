import Heading from '../../UI/Heading/Heading';
import { Categories } from './components/Categories/Categories';
import PicturesSlider from './components/PicturesSlider/PicturesSlider';
import s from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <section className={s.banner}>
        <div className="container">
          <Heading as="h1" className={s.title}>
            Welcome to Nice Gadgets store!
          </Heading>
        </div>
        <PicturesSlider />
        <Categories />
      </section>
    </>
  );
};

export default HomePage;
