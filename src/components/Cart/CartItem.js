import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart_slice';
//import Cart from './Cart';


const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const RemoveItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const AddItem = () => {
    dispatch(cartActions.addItemToCart({ id, title, price}));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={RemoveItem}>-</button>
          <button onClick={AddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
