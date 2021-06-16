import { NavLink } from 'react-router-dom';
import routes from '../../routes';

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__itemWrapper">
          <NavLink
            exact
            to={routes.home}
            className="navigation__item"
            activeClassName="navigation__item--active"
          >
            Home
          </NavLink>
        </li>
        <li className="navigation__itemWrapper">
          <NavLink
            to={routes.todo}
            className="navigation__item"
            activeClassName="navigation__item--active"
          >
            ToDo
          </NavLink>
        </li>
        <li className="navigation__itemWrapper">
          <NavLink
            to={routes.blank}
            className="navigation__item"
            activeClassName="navigation__item--active"
          >
            History
          </NavLink>
        </li>
        <li className="navigation__itemWrapper">
          <NavLink
            to={routes.blank}
            className="navigation__item"
            activeClassName="navigation__item--active"
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
