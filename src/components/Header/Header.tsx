import { Link, NavLink, useLocation } from 'react-router-dom';

import classNames from 'classnames';
import { useState } from 'react';
import Button from '../../UI/Buttons/Button';
import { ROUTES } from '../../constants/ROUTES';
import { useCartStore } from '../../store/cartStore';
import { useFavoritesStore } from '../../store/favoritesStore';
import { MobileMenu } from '../BurgerMenu';
import styles from './Header.module.css';
import { SearchField } from '../SearchField/SearchField';

const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { pathname } = useLocation();

  const cart = useCartStore(state => state.cartItems);
  const favorites = useFavoritesStore(state => state.favorites);

  const getLinkStatus = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.link, {
      [styles.activeLink]: isActive,
    });

  const getIconLinkStatus = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.iconLink, {
      [styles.activeLink]: isActive,
    });

  const isSearchShown =
    pathname === `/${ROUTES.PHONES}` ||
    pathname === `/${ROUTES.TABLETS}` ||
    pathname === `/${ROUTES.ACCESSORIES}` ||
    pathname === `/${ROUTES.FAVORITES}`;

  return (
    <header className={styles.header} id="header">
      <div className={styles.containerLeft}>
        <Link to={ROUTES.HOME} className={styles.logo}>
          <img src="img/logo.png" alt="" />
        </Link>

        <MobileMenu isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />

        <nav
          className={styles.navigation}
          role="navigation"
          aria-label="main navigation"
        >
          <ul className={styles.list}>
            <li>
              <NavLink className={getLinkStatus} to={ROUTES.HOME}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className={getLinkStatus} to={ROUTES.PHONES}>
                Phones
              </NavLink>
            </li>

            <li>
              <NavLink className={getLinkStatus} to={ROUTES.TABLETS}>
                Tablets
              </NavLink>
            </li>

            <li>
              <NavLink className={getLinkStatus} to={ROUTES.ACCESSORIES}>
                Accessories
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.containerRight}>
        {isSearchShown && <SearchField />}

        <NavLink to={ROUTES.FAVORITES} className={getIconLinkStatus}>
          <Button size={[16, 16]}>
            <img src="img/icons/favorite-icon.svg" alt="" />
            {!!favorites.length && (
              <span className={styles.badge}>{favorites.length}</span>
            )}
          </Button>
        </NavLink>

        <NavLink to={ROUTES.CART} className={getIconLinkStatus}>
          <Button size={[16, 16]}>
            <img src="img/icons/cart-icon.svg" alt="" />
            {!!cart.length && (
              <span className={styles.badge}>{cart.length}</span>
            )}
          </Button>
        </NavLink>
      </div>

      <button onClick={() => setIsMenuShown(true)} className={styles.burger}>
        <img src="img/icons/burger-menu-icon.svg" alt="" />
      </button>
    </header>
  );
};

export default Header;
