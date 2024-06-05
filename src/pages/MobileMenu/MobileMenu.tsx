/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import React, { useState } from 'react';
import styles from './MobileMenu.module.css';
import { GITHUB_URL } from '../../helpers/constants';
import { ComingSoon } from '../../components/ComingSoon/ComingSoon';

type Props = {
  isMenuShown: boolean;
  setIsMenuShown: (value: boolean) => void;
};

export const MobileMenu: React.FC<Props> = ({
  isMenuShown,
  setIsMenuShown,
}) => {
  const { pathname } = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLinkClick = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 4000);
  };

  return (
    <div
      className={cn(styles.mobileMenu, {
        [styles.menuShown]: isMenuShown,
      })}
    >
      <div className={styles.mobileMenuTop}>
        <Link
          to="/"
          className={styles.mobileMenuLogoLink}
          onClick={() => setIsMenuShown(false)}
        >
          <div className={styles.mobileMenuLogoLinkImage} />
        </Link>

        <button
          type="button"
          className={styles.mobileMenuCloseLink}
          onClick={() => setIsMenuShown(false)}
        >
          <div
            className={`${styles.mobileMenuCloseLinkImage} icon icon--remove`}
          />
        </button>
      </div>

      <div className={styles.mobileMenuContainer}>
        <nav className={styles.mobileMenuNav}>
          <ul className={styles.mobileMenuNavList}>
            <li className={styles.mobileMenuNavListItem}>
              <Link
                to="/"
                className={styles.mobileMenuNavListLink}
                onClick={() => setIsMenuShown(false)}
              >
                Home
              </Link>
            </li>

            <li className={styles.mobileMenuNavListItem}>
              <Link
                to="/phones"
                className={styles.mobileMenuNavListLink}
                onClick={() => setIsMenuShown(false)}
              >
                Phones
              </Link>
            </li>

            <li className={styles.mobileMenuNavListItem}>
              <Link
                to="/tablets"
                className={styles.mobileMenuNavListLink}
                onClick={() => setIsMenuShown(false)}
              >
                Tablets
              </Link>
            </li>

            <li className={styles.mobileMenuNavListItem}>
              <Link
                to="/accessories"
                className={styles.mobileMenuNavListLink}
                onClick={() => setIsMenuShown(false)}
              >
                Accessories
              </Link>
            </li>

            <li className={styles.mobileMenuNavListItem}>
              <Link
                to="/favourites"
                className={styles.mobileMenuNavListLink}
                onClick={() => setIsMenuShown(false)}
              >
                Favourites
              </Link>
            </li>

            <li className={styles.mobileMenuNavListItem}>
              <Link
                to="/cart"
                className={styles.mobileMenuNavListLink}
                onClick={() => setIsMenuShown(false)}
              >
                Cart
              </Link>
            </li>

            <li className={styles.mobileMenuNavListItem}>
              <Link
                to={pathname}
                className={styles.mobileMenuNavListLink}
                onClick={handleLinkClick}
              >
                Contact us
              </Link>
            </li>

            <li className={styles.mobileMenuNavListItem}>
              <Link
                to={GITHUB_URL}
                className={styles.mobileMenuNavListLink}
                target="_blank"
                onClick={() => setIsMenuShown(false)}
              >
                GitHub
              </Link>
            </li>
          </ul>
        </nav>
        {isModalOpen && <ComingSoon onClose={setIsModalOpen} />}
      </div>
    </div>
  );
};
