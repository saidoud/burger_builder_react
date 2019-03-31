import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';

const burger = (props)=>{
    return(
        <div className={classes.Burger}>

            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="Cheese"/>
            <BurgerIngredient type="Meat"/>
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
}

export default burger;




   