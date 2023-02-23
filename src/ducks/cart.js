import { getProducts } from "./products";

//action
const CART_ADD = "cart/ADD";
const CART_REMOVE = "cart/REMOVE";

//reducer
const initialState = {
  items: [],
  currency: "USD",
};

export default function cart(state = initialState, action = {}) {
  switch (action.type) {
    case CART_ADD:
      return handleCartAdd(state, action.payload);
    case CART_REMOVE:
      return handleCartRemove(state, action.payload);
    default:
      return state;
  }
}

function handleCartAdd(state, payload) {
  return {
    ...state,
    items: [...state.items, payload.productId],
  };
}

function handleCartRemove(state, payload) {
  return {
    ...state,
    items: [state.items.filter((id) => id !== payload.productId)],
  };
}

//action creators
export function addToCart(productId) {
  return {
    type: CART_ADD,
    payload: { productId },
  };
}

export function removeCart(productId) {
  return {
    type: CART_REMOVE,
    payload: { productId },
  };
}

//selectors

//indexOf() = -1 means it doesn't exist
export function isInCart(state, props) {
  return state.cart.items.indexOf(props.id !== -1);
}
export function getItems(state, props) {
  return state.cart.items.map((id) => getProducts(state, { id }));
}
export function getCurrency(state, props) {
  return state.cart.currency;
}
export function getTotal(state, props) {
  return state.cart.items.reduce((acc, id) => {
    const item = getProducts(state, { id });
    return acc + item.price;
  }, 0);
}
