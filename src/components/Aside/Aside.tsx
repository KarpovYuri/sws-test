import { IconButton } from '../IconButton';
import { title, subtitle, buttonClass, asideNavBarItems } from './Aside.data';
import './Aside.style.sass';
import { AsideNavBar } from './AsideNavBar';
// import { NavbarItemElement } from '../../../entities/NavbarItemElement';

export function Aside() {
  return (
    <aside className="aside">
      <div className="aside__header">
        <div className="aside__title-wrapper">
          <h1 className="aside__title">{title}</h1>
          <h2 className="aside__subtitle">{subtitle}</h2>
        </div>
        <IconButton buttonClass={buttonClass} />
      </div>
      <div>
        {asideNavBarItems.map((item, index) => (
          <AsideNavBar key={index} item={item.title} active={item.active} />
        ))}
      </div>
    </aside>
  );
}
