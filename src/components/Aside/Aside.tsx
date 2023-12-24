import { IconButton } from '../IconButton';
import { title, subtitle, buttonClass, asideNavBarItems } from './Aside.data';
import './Aside.style.sass';
import { AsideNavBar } from './AsideNavBar';

export function Aside() {
  return (
    <aside className="aside">
      <div className="aside__header">
        <div className="aside__title-wrapper">
          <h2 className="aside__title">{title}</h2>
          <h3 className="aside__subtitle">{subtitle}</h3>
        </div>
        <IconButton buttonClass={buttonClass} />
      </div>
      {asideNavBarItems.map((item, index) => (
        <AsideNavBar key={index} item={item.title} active={item.active} />
      ))}
    </aside>
  );
}
