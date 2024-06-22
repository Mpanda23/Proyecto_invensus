export class ProductoModel {

    constructor(
      public idproducto: string,
      public prod_nombre: string,
      public prod_descripcion: string,
      public prod_valor: string,
      public prod_vencimiento: string,
      public prod_alerta: string,
      public idcategoria: string,
      public idproveedores: string
    ) { }

  }
