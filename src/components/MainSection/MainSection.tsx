import './MainSection.style.sass';
import { Table } from '../Table';
import { title } from './MainSection.data';

export function MainSection() {
  return (
    <main className="main-section">
      <h1 className="main-section__title">{title}</h1>
      <Table />
    </main>
  );
}
