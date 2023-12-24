import { TableHeader } from './TableHeader';
import { tableHeaderItems } from './Table.data';
import { TableBody } from './TableBody';
import './Table.style.sass';

export function Table() {
  return (
    <div className="table">
      <TableHeader tableHeaderItems={tableHeaderItems} />
      <TableBody />
    </div>
  );
}
