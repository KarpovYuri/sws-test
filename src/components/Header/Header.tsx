import { NavBar } from '../NavBar';
import { IconButton } from '../IconButton';
import { iconButtonItems, NavBarItems } from './Header.data';
import './Header.style.sass';

export function Header() {
  return (
    <header className="header">
      {iconButtonItems.map((item, index) => (
        <IconButton key={index} buttonClass={item.buttonClass} />
      ))}
      <NavBar navBarItems={NavBarItems} />
    </header>
  );
}
