// @ts-ignore
import styles from './Header.module.scss';
import { useMemo, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { MobileMenu } from '../../pages/MobileMenu';
import { SearchField } from '../SearchField/SearchField';

export const Header = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { pathname } = useLocation();

  const isSearchShown = pathname === '/phones'
    || pathname === '/tablets'
    || pathname === '/accessories'
    || pathname === '/favourites';

  const isCartOpen = pathname !== '/cart';

  const favouriteProducts = useAppSelector((state) => state.favourites.items);

  const cartProducts = useAppSelector((state) => state.cartProducts.items);

  const cartQuantity = useMemo(() => {
    return cartProducts.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
  }, [cartProducts]);

  return (
    <header className={styles.header} id='header'>
      <div className={styles.containerLeft}>
        <button
          type='button'
          className={styles.burger}
          onClick={() => setIsMenuShown(true)}
        >
          <span className={`${styles.burgerSpan} ${styles.burgerSpanOne}`} />
          <span className={`${styles.burgerSpan} ${styles.burgerSpanTwo}`} />
          <span className={`${styles.burgerSpan} ${styles.burgerSpanThree}`} />
        </button>

        <Link to='/' className={styles.logo}>
          <div className={styles.logoImage} />
        </Link>

        <MobileMenu isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />

        {isCartOpen && (
          <nav
            className={styles.navigation}
            role='navigation'
            aria-label='main navigation'
          >
            <ul className={styles.list}>
              <li>
                <NavLink className={styles.link} to='/'>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink className={styles.link} to='/phones'>
                  Phones
                </NavLink>
              </li>

              <li>
                <NavLink className={styles.link} to='/tablets'>
                  Tablets
                </NavLink>
              </li>

              <li>
                <NavLink className={styles.link} to='/accessories'>
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
          <NavLink to='/favourites' className={styles.iconLink}>
            <div className={`${styles.iconImage} icon icon--favourites`}>
              {!!favouriteProducts.length && (
                <div className={styles.fav}>
                  <span className={styles.amount}>
                    {favouriteProducts.length}
                  </span>
                </div>
              )}
            </div>
          </NavLink>
        )}

        <NavLink to='/cart' className={styles.iconLink}>
          <div className={`${styles.iconImage} icon icon--cart`}>
            {!!cartProducts.length && (
              <div className={styles.fav}>
                <span className={styles.amount}>
                  {cartQuantity}
                </span>
              </div>
            )}
          </div>
        </NavLink>
      </div>
    </header>
  );
};
