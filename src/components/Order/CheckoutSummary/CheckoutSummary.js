import React from 'react';
import Burgar from './../../Burger/Burger';
import Button from './../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it teates well</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        <Burgar ingredients={props.ingredients} />
      </div>

      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
