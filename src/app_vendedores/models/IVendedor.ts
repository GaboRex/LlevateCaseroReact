import IProducto from "./IProducto";

interface IVendedor {
    id: string,
    nombre: string,
    productos: IProducto[],
}