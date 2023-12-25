import { useGetRowsQuery } from '../../redux';
import { Preloader } from '../Preloader';
import { ErrorMessage } from '../ErrorMessage';
import { TableHeader } from './TableHeader';
import { tableHeaderItems } from './Table.data';
import { TableBody } from './TableBody';
import './Table.style.sass';

export function Table() {
  const { data = [], isLoading, isError } = useGetRowsQuery('list');

  if (isLoading) {
    return <Preloader />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <div className="table">
      <TableHeader tableHeaderItems={tableHeaderItems} />
      <TableBody rows={data} />
    </div>
  );
}
