import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriasService } from './shared/categorias.service';
import { EditarCategoriasComponent } from './Administrador/categorias/editar-categorias/editar-categorias.component';
import { ListaCategoriasComponent } from './Administrador/categorias/lista-categorias/lista-categorias.component';
import { ListarUsuariosComponent } from './Administrador/usuarios/listar-usuarios/listar-usuarios.component';
import { EditarUsuariosComponent } from './Administrador/usuarios/editar-usuarios/editar-usuarios.component';
import { MenuuComponent } from './Administrador/menu/menuu.component';
import { ListaProductosComponent } from './Administrador/productos/lista-productos/lista-productos.component';
import { EditarProductoComponent } from './Administrador/productos/editar-producto/editar-producto.component';
import { ListaSubcategoriasComponent } from './Administrador/subcategorias/lista-subcategorias/lista-subcategorias.component';
import { EditarSubcategoriaComponent } from './Administrador/subcategorias/editar-subcategoria/editar-subcategoria.component';
import { ListarPlatosComponent } from './Administrador/platos/listar-platos/listar-platos.component';
import { EditarPlatosComponent } from './Administrador/platos/editar-platos/editar-platos.component';
import { ListaProveedoresComponent } from './Administrador/proveedores/lista-proveedores/lista-proveedores.component';
import { EditarProveedoresComponent } from './Administrador/proveedores/editar-proveedores/editar-proveedores.component';
import { ImagenlogoComponent } from './imagenlogo/imagenlogo.component';
import { FooterComponent } from './footer/footer.component';
import { ListaSucursal1Component } from './Administrador/sucursal1/lista-sucursal1/lista-sucursal1.component';
import { ListaSucursal2Component } from './Administrador/sucursal2/lista-sucursal2/lista-sucursal2.component';
import { EditarSucursal2Component } from './Administrador/sucursal2/editar-sucursal2/editar-sucursal2.component';
import { ListaSucursal3Component } from './Administrador/sucursal3/lista-sucursal3/lista-sucursal3.component';
import { EditarSucursal3Component } from './Administrador/sucursal3/editar-sucursal3/editar-sucursal3.component';
import { EditarSucursal1Component } from './Administrador/sucursal1/editar-sucursal1/editar-sucursal1.component';
import { ListarInventarioComponent } from './Administrador/vista-inventario/listar-inventario/ListarInventarioComponent';
import { LoginComponent } from './login/login/login.component';
import { VistaJefeInventarioComponent } from './jefe_inventario/vista-jefe-inventario/vista-jefe-inventario.component';
import { VistaPersonalComponent } from './Personal/vista-personal/vista-personal.component';
import { VistaDuenoComponent } from './Dueno/vista-dueno/vista-dueno.component';
import { VistaBodegueroComponent } from './Bodeguero/vista-bodeguero/vista-bodeguero.component';
import { VistaAdminComponent } from './Administrador/vista-admin/vista-admin.component';
import { ProductosBodegueroComponent } from './Bodeguero/productos/productos-bodeguero/productos-bodeguero.component';
import { CategoriasBodegueroComponent } from './Bodeguero/categorias/categorias-bodeguero/categorias-bodeguero.component';
import { SubcategoriasBodegueroComponent } from './Bodeguero/subcategorias/subcategorias-bodeguero/subcategorias-bodeguero.component';
import { ProveedoresBodegueroComponent } from './Bodeguero/proveedores/proveedores-bodeguero/proveedores-bodeguero.component';
import { MenuBodegueroComponent } from './Bodeguero/menu-bodeguero/menu-bodeguero.component';
import { EditarCategoriasBodegueroComponent } from './Bodeguero/categorias/editar-categorias-bodeguero/editar-categorias-bodeguero.component';
import { EditarProductosBodegueroComponent } from './Bodeguero/productos/editar-productos-bodeguero/editar-productos-bodeguero.component';
import { EditarSubtagoriasBodegueroComponent } from './Bodeguero/subcategorias/editar-subtagorias-bodeguero/editar-subtagorias-bodeguero.component';
import { CodigoqrComponent } from './Administrador/codigoqr/codigoqr.component';
import { ListarqrComponent } from './Administrador/codigoqr/listarqr/listarqr.component';
import { CodigoqrComponentBodeguero } from './Bodeguero/codigoqr/codigoqr.component';
import { ListarqrComponentBodeguero } from './Bodeguero/codigoqr/listarqr/listarqr.component';
import { MenuDuenoComponent } from './Dueno/menu-dueno/menu-dueno.component';
import { VistaCategoriasComponent } from './Dueno/categorias/vista-categorias/vista-categorias.component';
import { VistaSubcategoriasComponent } from './Dueno/subcategorias/vista-subcategorias/vista-subcategorias.component';
import { VistaPlatosComponent } from './Dueno/platos/vista-platos/vista-platos.component';
import { VistaProductosComponent } from './Dueno/productos/vista-productos/vista-productos.component';
import { VistaSucursal1Component } from './Dueno/sucursal1/vista-sucursal1/vista-sucursal1.component';
import { Vistasucursal2Component } from './Dueno/sucursal2/vistasucursal2/vistasucursal2.component';
import { VistaSucursal3Component } from './Dueno/sucursal3/vista-sucursal3/vista-sucursal3.component';
import { ListarSucursal1BodegueroComponent } from './Bodeguero/sucursal1/listar-sucursal1-bodeguero/listar-sucursal1-bodeguero.component';
import { ListarSucursal2BodegueroComponent } from './Bodeguero/sucursal2/listar-sucursal2-bodeguero/listar-sucursal2-bodeguero.component';
import { ListarSucursal3BodegueroComponent } from './Bodeguero/sucursal3/listar-sucursal3-bodeguero/listar-sucursal3-bodeguero.component';
import { EditarSucursal1BodegueroComponent } from './Bodeguero/sucursal1/editar-sucursal1-bodeguero/editar-sucursal1-bodeguero.component';
import { EditarSucursal2BodegueroComponent } from './Bodeguero/sucursal2/editar-sucursal2-bodeguero/editar-sucursal2-bodeguero.component';
import { EditarSucursal3BodegueroComponent } from './Bodeguero/sucursal3/editar-sucursal3-bodeguero/editar-sucursal3-bodeguero.component';
import { ListarUsuariosDuenoComponent } from './Dueno/usuarios/listar-usuarios-dueno/listar-usuarios-dueno.component';
import { EditarUsuariosDuenoComponent } from './Dueno/usuarios/editar-usuarios-dueno/editar-usuarios-dueno.component';
import { ListarProveedoresDuenoComponent } from './Dueno/proveedores/listar-proveedores-dueno/listar-proveedores-dueno.component';
import { EditarProveedoresDuenoComponent } from './Dueno/proveedores/editar-proveedores-dueno/editar-proveedores-dueno.component';
import { ListaInventarioDuenoComponent } from './Dueno/inventario/lista-inventario-dueno/lista-inventario-dueno.component';
import { VentaPersonalComponent } from './Personal/platos/venta-personal/venta-personal.component';
import { ListaProductosPersonalComponent } from './Personal/productos/lista-productos-personal/lista-productos-personal.component';
import { RegistrarPlatosComponent } from './Personal/platos/registrar-platos/registrar-platos.component';
import { MenuPersonalComponent } from './Personal/menu-personal/menu-personal.component';
import { EditarPlatosPersonalComponent } from './Personal/platos/editar-platos/editar-platos.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { AnadirSucursal1Component } from './Administrador/sucursal1/anadir-sucursal1/anadir-sucursal1.component';
import { BuscarRegistrosComponent } from './Administrador/sucursal1/buscar-registros/buscar-registros.component';
import { AnadirSucursal2Component } from './Administrador/sucursal2/anadir-sucursal2/anadir-sucursal2.component';
import { BuscarRegistros2Component } from './Administrador/sucursal2/buscar-registros/buscar-registros.component';
import { AnadirSucursal3Component } from './Administrador/sucursal3/anadir-sucursal3/anadir-sucursal3.component';
import { RegistrosSucursal3Component } from './Administrador/sucursal3/registros-sucursal3/registros-sucursal3.component';
import { ListarLlegadas1Component } from './Administrador/sucursal1/listar-llegadas1/listar-llegadas1.component';
import { AnadirLlegada1Component } from './Administrador/sucursal1/anadir-llegada1/anadir-llegada1.component';
import { AnadirLlegada2Component } from './Administrador/sucursal2/anadir-llegada2/anadir-llegada2.component';
import { ListarLlegada2Component } from './Administrador/sucursal2/listar-llegada2/listar-llegada2.component';
import { AnadirLlegada3Component } from './Administrador/sucursal3/anadir-llegada3/anadir-llegada3.component';
import { ListarLlegadas3Component } from './Administrador/sucursal3/listar-llegadas3/listar-llegadas3.component';
import { AnadirLlegadaBodeguero1Component } from './Bodeguero/sucursal1/anadir-llegada-bodeguero1/anadir-llegada-bodeguero1.component';
import { AnadirLlegadasBodeguero2Component } from './Bodeguero/sucursal2/anadir-llegadas-bodeguero2/anadir-llegadas-bodeguero2.component';
import { AnadirLlegadasBodeguero3Component } from './Bodeguero/sucursal3/anadir-llegadas-bodeguero3/anadir-llegadas-bodeguero3.component';
import { ListarLlegadasDueno1Component } from './Dueno/sucursal1/listar-llegadas-dueno1/listar-llegadas-dueno1.component';
import { ListarLlegadasDueno2Component } from './Dueno/sucursal2/listar-llegadas-dueno2/listar-llegadas-dueno2.component';
import { ListarLlegadasDueno3Component } from './Dueno/sucursal3/listar-llegadas-dueno3/listar-llegadas-dueno3.component';
import { AlertasComponent } from './Administrador/alertas/alertas.component';
import { AlertasenviadasComponent } from './Administrador/alertasenviadas/alertasenviadas.component';
import { AlertasBodegueroComponent } from './Bodeguero/alertas-bodeguero/alertas-bodeguero.component';
import { AlertasPersonalComponent } from './Personal/alertas-personal/alertas-personal.component';
import { ListarUsuariosInactivosComponent } from './Administrador/usuarios/listar-usuarios-inactivos/listar-usuarios-inactivos.component';
import { ListarUsuariosInactivosDuenoComponent } from './Dueno/usuarios/listar-usuarios-inactivos-dueno/listar-usuarios-inactivos-dueno.component';
import { ListarProveedoresInactivosComponent } from './Administrador/proveedores/listar-proveedores-inactivos/listar-proveedores-inactivos.component';
import { ListarProveedoresInactivosDuenoComponent } from './Dueno/proveedores/listar-proveedores-inactivos-dueno/listar-proveedores-inactivos-dueno.component';
import { ListarPlatosInactivosComponent } from './Administrador/platos/listar-platos-inactivos/listar-platos-inactivos.component';
import { ListarPlatosInactivosDuenoComponent } from './Dueno/platos/listar-platos-inactivos-dueno/listar-platos-inactivos-dueno.component';
import { RegisterComponent } from './register/register.component';
import { EditarProplatoComponent } from './proplato/editar-proplato/editar-proplato.component';
import { ListaProplatoComponent } from './proplato/lista-proplato/lista-proplato.component';
import { VistaPlatoComponent } from './proplato/vista-plato/vista-plato.component';
import { Sucursal1JefeinventarioComponent } from './jefe_inventario/sucursal1-jefeinventario/sucursal1-jefeinventario.component';
import { Sucursal2JefeinventarioComponent } from './jefe_inventario/sucursal2-jefeinventario/sucursal2-jefeinventario.component';
import { Sucursal3JefeinventarioComponent } from './jefe_inventario/sucursal3-jefeinventario/sucursal3-jefeinventario.component';
import { VistaGeneralJefeinventarioComponent } from './jefe_inventario/vista-general-jefeinventario/vista-general-jefeinventario.component';
import { Editar1JefeinventarioComponent } from './jefe_inventario/editar1-jefeinventario/editar1-jefeinventario.component';
import { Editar2JefeinventarioComponent } from './jefe_inventario/editar2-jefeinventario/editar2-jefeinventario.component';
import { Editar3JefeinventarioComponent } from './jefe_inventario/editar3-jefeinventario/editar3-jefeinventario.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarCategoriasComponent,
    ListaCategoriasComponent,
    ListarUsuariosComponent,
    EditarUsuariosComponent,
    MenuuComponent,
    ListaProductosComponent,
    EditarProductoComponent,
    ListaSubcategoriasComponent,
    EditarSubcategoriaComponent,
    ListarPlatosComponent,
    EditarPlatosComponent,
    ListaProveedoresComponent,
    EditarProveedoresComponent,
    ImagenlogoComponent,
    FooterComponent,
    ListaSucursal1Component,
    ListaSucursal2Component,
    EditarSucursal2Component,
    ListaSucursal3Component,
    EditarSucursal3Component,
    EditarSucursal1Component,
    ListarInventarioComponent,
    LoginComponent,
    VistaJefeInventarioComponent,
    VistaPersonalComponent,
    VistaDuenoComponent,
    VistaBodegueroComponent,
    VistaAdminComponent,
    ProductosBodegueroComponent,
    CategoriasBodegueroComponent,
    SubcategoriasBodegueroComponent,
    ProveedoresBodegueroComponent,
    MenuBodegueroComponent,
    EditarCategoriasBodegueroComponent,
    EditarProductosBodegueroComponent,
    EditarSubtagoriasBodegueroComponent,
    CodigoqrComponent,
    ListarqrComponent,
    CodigoqrComponentBodeguero,
    ListarqrComponentBodeguero,
    MenuDuenoComponent,
    VistaCategoriasComponent,
    VistaSubcategoriasComponent,
    VistaPlatosComponent,
    VistaProductosComponent,
    VistaSucursal1Component,
    Vistasucursal2Component,
    VistaSucursal3Component,
    ListarSucursal1BodegueroComponent,
    ListarSucursal2BodegueroComponent,
    ListarSucursal3BodegueroComponent,
    EditarSucursal1BodegueroComponent,
    EditarSucursal2BodegueroComponent,
    EditarSucursal3BodegueroComponent,
    ListarUsuariosDuenoComponent,
    EditarUsuariosDuenoComponent,
    ListarProveedoresDuenoComponent,
    EditarProveedoresDuenoComponent,
    ListaInventarioDuenoComponent,
    VentaPersonalComponent,
    ListaProductosPersonalComponent,
    RegistrarPlatosComponent,
    MenuPersonalComponent,
    EditarPlatosPersonalComponent,
    MenuPrincipalComponent,
    AnadirSucursal1Component,
    BuscarRegistrosComponent,
    AnadirSucursal2Component,
    BuscarRegistros2Component,
    AnadirSucursal3Component,
    RegistrosSucursal3Component,
    ListarLlegadas1Component,
    AnadirLlegada1Component,
    ListarLlegada2Component,
    AnadirLlegada2Component,
    AnadirLlegada3Component,
    ListarLlegadas3Component,
    AnadirLlegadaBodeguero1Component,
    AnadirLlegadasBodeguero2Component,
    AnadirLlegadasBodeguero3Component,
    ListarLlegadasDueno1Component,
    ListarLlegadasDueno2Component,
    ListarLlegadasDueno3Component,
    AlertasComponent,
    AlertasenviadasComponent,
    AlertasBodegueroComponent,
    AlertasPersonalComponent,
    ListarUsuariosInactivosComponent,
    ListarUsuariosInactivosDuenoComponent,
    ListarProveedoresInactivosComponent,
    ListarProveedoresInactivosDuenoComponent,
    ListarPlatosInactivosComponent,
    ListarPlatosInactivosDuenoComponent,
    RegisterComponent,
    EditarProplatoComponent,
    ListaProplatoComponent,
    VistaPlatoComponent,
    Sucursal1JefeinventarioComponent,
    Sucursal2JefeinventarioComponent,
    Sucursal3JefeinventarioComponent,
    VistaGeneralJefeinventarioComponent,
    Editar1JefeinventarioComponent,
    Editar2JefeinventarioComponent,
    Editar3JefeinventarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    CategoriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
