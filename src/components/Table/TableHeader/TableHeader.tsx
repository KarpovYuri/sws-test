import './Table.style.sass';

export function TableHeader({
  tableHeaderItems
}: {
  tableHeaderItems: { title: string; modifier?: string }[];
}) {
  return (
    <>
      {tableHeaderItems.map((item, index) => (
        <div
          key={index}
          className={`table-header ${item.modifier && item.modifier}`}
        >
          {item.title}
        </div>
      ))}
    </>
  );
}
