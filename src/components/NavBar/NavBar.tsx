import './NavBar.style.sass';

export function NavBar({
  navBarItems
}: {
  navBarItems: { title: string; active: boolean }[];
}) {
  return (
    <nav>
      <ul className="nav-bar">
        {navBarItems.map((item, index) => (
          <li
            key={index}
            className={`nav-bar__item ${item.active && 'nav-bar__item_active'}`}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
}
