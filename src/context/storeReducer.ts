const types = {
  login: "login User",
  logout: "log out User",
  addProduct: "add product",
  setProducts: "set productos",
  deleteProduct: "delete product",
};

const initialValues = {
  auth: false,

  productos: []
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        auth: true,
      };
    case types.logout:
      return {
        ...state,
        auth: false,
      };
    case types.addProduct:
      return {
        ...state,
        productos: [...state.productos, action.payload]
      };
    case types.setProducts:
      return {
        ...state,
        productos: action.payload
      }
    case types.deleteProduct:
      return {
        ...state,
        productos: state.productos.filter((p) => p.id !== action.payload),
      }
    default:
      return state;
  }
};

export { initialValues, types };

export default storeReducer;