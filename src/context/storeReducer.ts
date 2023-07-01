const types = {
  login: "login User",
  logout: "log out User",
  setUser: "set user",
  addProduct: "add product",
  setProducts: "set productos",
  deleteProduct: "delete product",
};

const initialValues = {
  auth: false,
  user: "",
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
    case types.setUser:
      return {
        ...state,
        user: action.payload,
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