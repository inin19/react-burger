import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders">Order</NavigationItem>
    ) : null}
    {props.isAuthenticated ? (
      <NavigationItem link="/Logout">Logout</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Auth</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
