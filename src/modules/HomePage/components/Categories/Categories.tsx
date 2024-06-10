import { useEffect, useState } from 'react';
import {
  getAccessories,
  getPhones,
  getTablets,
} from '../../../../api/getProduct';

import { Link } from 'react-router-dom';
import Heading from '../../../../UI/Heading/Heading';
import { ROUTES } from '../../../../constants/ROUTES';
import Product from '../../../../types/Product';
import s from './Categories.module.css';

export const Categories = () => {
  const [phones, setPhones] = useState<Product[]>([]);
  const [tablets, setTablets] = useState<Product[]>([]);
  const [accessories, setAccessories] = useState<Product[]>([]);

  useEffect(() => {
    getPhones().then(setPhones);
  }, []);
  useEffect(() => {
    getTablets().then(setTablets);
  }, []);
  useEffect(() => {
    getAccessories().then(setAccessories);
  }, []);

  return (
    <div className="container">
      <Heading className={s.categories} as="h2">
        Shop by category
      </Heading>
      <div className={s.shopCategories}>
        <article className={s.shopCategory}>
          <Link to={ROUTES.PHONES} className={s.categoryLink}>
            <div
              className={`${s.categoryBackground} ${s.phonesBackgroundColor}`}
            >
              <img
                src={`img/category-phones.png`}
                alt={`Category mobile phones`}
                className={`${s.categoryImage}`}
              />
            </div>
          </Link>
          <Heading as="h3" className={s.categoryTitle}>
            Mobile phones
          </Heading>
          <p className={s.categoryModels}>{`${phones.length} models`}</p>
        </article>

        <article className={s.shopCategory}>
          <Link to={ROUTES.TABLETS} className={s.categoryLink}>
            <div
              className={`${s.categoryBackground}  ${s.tabletsBackgroundColor}`}
            >
              <img
                src={`img/category-tablets.png`}
                alt={`Category tablets`}
                className={`${s.categoryImage}`}
              />
            </div>
          </Link>
          <Heading as="h3" className={s.categoryTitle}>
            Tablets
          </Heading>
          <p className={s.categoryModels}>{`${tablets.length} models`}</p>
        </article>

        <article className={s.shopCategory}>
          <Link to={ROUTES.ACCESSORIES} className={s.categoryLink}>
            <div
              className={`${s.categoryBackground} ${s.accessoriesBackgroundColor}`}
            >
              <img
                src={'img/category-accessories.png'}
                alt={'Category accessories'}
                className={`${s.categoryImage}`}
              />
            </div>
          </Link>
          <Heading as="h3" className={s.categoryTitle}>
            Accessories
          </Heading>
          <p className={s.categoryModels}>{`${accessories.length} models`}</p>
        </article>
      </div>
    </div>
  );
};