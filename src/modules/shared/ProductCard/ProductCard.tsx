import { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Button from '../../../UI/Buttons/Button';
import Product from '../../../types/Product';
import { ROUTES } from '../../../constants/ROUTES';
import styles from './ProductCard.module.css';
import { toast } from 'sonner';
import { useCartStore } from '../../../store/cartStore';
import { useFavoritesStore } from '../../../store/favoritesStore';

interface Props {
  product: Product;
  isBrandNew?: boolean;
}

const ProductCard: FC<Props> = ({ product, isBrandNew = false }) => {
  const {
    images,
    name,
    priceDiscount,
    priceRegular,
    screen,
    capacity,
    ram,
    id,
  } = product;

  const { pathname } = useLocation();

  const productLink =
    pathname === ROUTES.HOME
      ? `${ROUTES.PHONES}/${id}`
      : ROUTES.PRODUCT_DETAIL.replace(':productId', id);

  const { toggleProductInCart, cartItems } = useCartStore(state => ({
    toggleProductInCart: state.toggleProductInCart,
    cartItems: state.cartItems,
  }));

  const { toggleFavorite, favorites } = useFavoritesStore(state => ({
    toggleFavorite: state.toggleFavorite,
    favorites: state.favorites,
  }));

  const isInCart = useMemo(
    () => cartItems.some(item => item.id === product.id),
    [cartItems, product.id],
  );
  const isFavorite = useMemo(
    () => favorites.some(item => item.id === product.id),
    [favorites, product.id],
  );

  const handleToggleFavorite = (newProduct: Product) => {
    toggleFavorite(newProduct);
    toast.message(
      isFavorite ? 'Removed from Favorites' : 'Added to Favorites',
      { description: newProduct.name },
    );
  };

  const handleToggleCart = (newProduct: Product) => {
    toggleProductInCart(newProduct);
    toast.message(isInCart ? 'Removed from Cart' : 'Added to Cart', {
      description: newProduct.name,
    });
  };

  return (
    <article className={styles.wrapper}>
      <div className={styles.header}>
        <Link to={productLink} className={styles.imgWrapper}>
          <img src={images[0]} alt={name} className={styles.image} />
        </Link>
        <Link to={productLink} className={styles.descr}>
          {name}
        </Link>
        <p className={styles.prices}>
          <span className={styles.newPrice}>${priceDiscount}</span>
          {!isBrandNew && (
            <span className={styles.oldPrice}>${priceRegular}</span>
          )}
        </p>
      </div>

      <ul className={styles.paramsList}>
        <li className={styles.paramItem}>
          <span className={styles.paramType}>Screen</span>
          <span className={styles.paramValue}>{screen}</span>
        </li>
        <li className={styles.paramItem}>
          <span className={styles.paramType}>Capacity</span>
          <span className={styles.paramValue}>{capacity}</span>
        </li>
        <li className={styles.paramItem}>
          <span className={styles.paramType}>RAM</span>
          <span className={styles.paramValue}>{ram}</span>
        </li>
      </ul>

      <div className={styles.actionsWrapper}>
        <Button
          onClick={() => handleToggleCart(product)}
          variant="primary"
          isSelected={isInCart}
        >
          {isInCart ? 'Added' : 'Add to cart'}
        </Button>
        <Button
          onClick={() => handleToggleFavorite(product)}
          variant="icon"
          size="40px"
        >
          <img
            src={
              isFavorite
                ? 'img/icons/favorite-fill-icon.svg'
                : 'img/icons/favorite-icon.svg'
            }
            alt=""
          />
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
