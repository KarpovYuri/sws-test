import { Header } from '../components/Header';
import { Aside } from '../components/Aside';
import { MainSection } from '../components/MainSection';
import './mainPagestyle.sass';

export function MainPage() {
  return (
    <>
      <Header />
      <section className="sectionWrapper">
        <Aside />
        <MainSection />
      </section>
    </>
  );
}
