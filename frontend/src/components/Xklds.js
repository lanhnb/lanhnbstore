import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import Rating from './Rating';
import axios from 'axios';
import { useContext } from 'react';
import { Store } from './payment/Store';
import { url } from './api';

function Xkld(props) {
  const { xkld } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find((x) => x._id === xkld._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`${url}/xklds/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }
    ctxDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    });
  };

  return (
    <Card>
      <Link to={`/xkld/${xkld.slug}`}>
        <img src={xkld.imagex} className="card-img-top" alt={xkld.namex} />
      </Link>
      <Card.Body>
        <Link to={`/xkld/${xkld.slug}`}>
          <Card.Title>{xkld.namex}</Card.Title>
        </Link>
        {/* <Rating rating={xkld.rating} numReviews={xkld.numReviews} /> */}
        <Card.Text>${xkld.salaryx}</Card.Text>
        {xkld.countInStock === 0 ? (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        ) : (
          <Button onClick={() => addToCartHandler(xkld)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default Xkld;
