import { FC } from 'react';
import styles from './app-header.module.css';
import { TAppHeaderUIProps } from './type';
import { Link, NavLink } from 'react-router-dom';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon
} from '@zlden/react-developer-burger-ui-components';

export const AppHeaderUI: FC<TAppHeaderUIProps> = ({ userName }) => (
  <header className={styles.header}>
    <nav className={`${styles.menu} p-4`}>
      <div className={styles.menu_part_left}>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? styles.link_active : styles.link
          }
        >
          {({ isActive }) => (
            <>
              <BurgerIcon type={isActive ? 'primary' : 'secondary'} />
              <p className='text text_type_main-default ml-2 mr-10'>
                Конструктор
              </p>
            </>
          )}
        </NavLink>
        <NavLink
          to='/feed'
          className={({ isActive }) =>
            isActive ? styles.link_active : styles.link
          }
        >
          {({ isActive }) => (
            <>
              <ListIcon type={isActive ? 'primary' : 'secondary'} />
              <p className='text text_type_main-default ml-2 mr-10'>
                Лента заказов
              </p>
            </>
          )}
        </NavLink>
      </div>
      <div className={styles.logo}>
        <Link to='/' className={`${styles.link_active}`}>
          <Logo className='' />
        </Link>
      </div>
      <NavLink
        to='/profile'
        className={({ isActive }) =>
          isActive ? styles.link_active : styles.link
        }
      >
        {({ isActive }) => (
          <div className={styles.link_position_last}>
            <ProfileIcon type={isActive ? 'primary' : 'secondary'} />
            <p
              className='text text_type_main-default ml-2 mr-10'
              style={{ width: 'max-content' }}
            >
              {userName || 'Личный кабинет'}
            </p>
          </div>
        )}
      </NavLink>
    </nav>
  </header>
);
