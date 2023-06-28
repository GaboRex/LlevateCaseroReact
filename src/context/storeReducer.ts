const types = {
  login: "login User",
  logout: "log out User",
  addProduct: "add product"
};

const initialValues = {
  auth: false,

  productos: [
    {
      nombre: "Billetes",
      precio: 200,
      descripcion: "Billetes falsos de alasitas",
    },
    {
      nombre: "Anticuchos",
      precio: 10,
      descripcion: "Comida hecha de carne de corazon",
    },
    {
      nombre: "Canchitas",
      precio: 100,
      descripcion: "Juego para entretenimiento de todos",
    },
    {
      nombre: "Almuerzo",
      precio: 20,
      descripcion: "Almuerzo completo para llevar",
    },
  ]
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
    default:
      return state;
  }
};

export { initialValues, types };

export default storeReducer;