import { useGetRowsQuery } from '../../../redux';
import { Preloader } from '../../Preloader';
import { ErrorMessage } from '../../ErrorMessage';
import { TableRows } from './TableRows';
import './TableBody.style.sass';

export function TableBody() {
  const { data = [], isLoading, isError } = useGetRowsQuery('list');

  if (isLoading) {
    return <Preloader />;
  }

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <>
      <TableRows rows={data} />
    </>
  );
}
