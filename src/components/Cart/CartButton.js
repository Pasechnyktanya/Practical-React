import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui_slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartQuantity =  useSelector(state => state.cart.totalQuantity);

const toggleHandler = () => {
  dispatch(uiActions.toggle())
}

  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButton;
