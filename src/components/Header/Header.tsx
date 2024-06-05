import styles from './Header.module.css';
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants/ROUTES';
// import { useAppSelector } from '../../app/hooks';
import { MobileMenu } from '../../pages/MobileMenu';
import { SearchField } from '../SearchField/SearchField';

export const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { pathname } = useLocation();

  const isSearchShown =
    pathname === '/phones' ||
    pathname === '/tablets' ||
    pathname === '/accessories' ||
    pathname === '/favourites';

  const isCartOpen = pathname !== '/cart';

  // const favouriteProducts = useAppSelector(state => state.favourites.items);
  //
  // const cartProducts = useAppSelector(state => state.cartProducts.items);

  // const cartQuantity = useMemo(() => {
  //   return cartProducts.reduce((acc: any, cartItem: { quantity: any; }) => {
  //     return acc + cartItem.quantity;
  //   }, 0);
  // }, [cartProducts]);

  return (
    <header className={styles.header} id="header">
      <div className={styles.containerLeft}>
        <button
          type="button"
          className={styles.burger}
          onClick={() => setIsMenuShown(true)}
        >
          <span className={`${styles.burgerSpan} ${styles.burgerSpanOne}`} />
          <span className={`${styles.burgerSpan} ${styles.burgerSpanTwo}`} />
          <span className={`${styles.burgerSpan} ${styles.burgerSpanThree}`} />
        </button>

        <Link to={ROUTES.HOME} className={styles.logo}>
          <div className={styles.logoImage} />
        </Link>

        <MobileMenu isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />

        {isCartOpen && (
          <nav
            className={styles.navigation}
            role="navigation"
            aria-label="main navigation"
          >
            <ul className={styles.list}>
              <li>
                <NavLink className={styles.link} to={ROUTES.HOME}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink className={styles.link} to={ROUTES.PHONES}>
                  Phones
                </NavLink>
              </li>

              <li>
                <NavLink className={styles.link} to={ROUTES.TABLETS}>
                  Tablets
                </NavLink>
              </li>

              <li>
                <NavLink className={styles.link} to={ROUTES.ACCESSORIES}>
                  Accessories
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>

      <div className={styles.containerRight}>
        {isSearchShown && <SearchField />}

        {isCartOpen && (
          <NavLink to={ROUTES.FAVORITES} className={styles.iconLink}>
            <div className={`${styles.iconImage} icon icon--favourites`}>
              <div className={styles.fav}>
                <span className={styles.amount} />
              </div>
            </div>
          </NavLink>
        )}

        <NavLink to={ROUTES.CART} className={styles.iconLink}>
          <div className={`${styles.iconImage} icon icon--cart`}>
            <div className={styles.fav}>
              <span className={styles.amount} />
            </div>
          </div>
        </NavLink>
      </div>
    </header>
  );
};
