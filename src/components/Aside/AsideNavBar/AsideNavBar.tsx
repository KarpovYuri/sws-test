import './AsideNavBar.style.sass';

export function AsideNavBar({
  item,
  active
}: {
  item: string;
  active: boolean;
}) {
  return (
    <ul className={`navbar-item navbar-item_${active && 'active'}`}>
      <li className="navbar-item__title">{item}</li>
    </ul>
  );
}
