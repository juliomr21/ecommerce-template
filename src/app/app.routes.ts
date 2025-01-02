import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CreateUserComponent } from './Components/create-user/create-user.component';
import { LoginComponent } from './Components/login/login.component';
import { PagInicialComponent } from './Components/pag-inicial/pag-inicial.component';
import { CriarProductComponent } from './Components/criar-product/criar-product.component';
import { MenuProductComponent } from './Components/menu-product/menu-product.component';
import { ListProductComponent } from './Components/list-product/list-product.component';
import { ProductDetailComponent } from './Components/product-detail/product-detail.component';
import { ProductEditarComponent } from './Components/product-editar/product-editar.component';
import { CreateClientComponent } from './Components/create-client/create-client.component';
import { ListClienteComponent } from './Components/list-cliente/list-cliente.component';
import { CriarPedidoComponent } from './Components/criar-pedido/criar-pedido.component';
import { ListaPedidoComponent } from './Components/lista-pedido/lista-pedido.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'register',
        component: CreateUserComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'home',
        component:PagInicialComponent
    },
    {
        path:'create-product',
        component:CriarProductComponent
    },
    {
        path:'produto-service',
        component:MenuProductComponent
    },
    {
        path:'catalogo-product',
        component:ListProductComponent
    },
    {
        path:'producto-detail/:id',
        component:ProductDetailComponent
    },
    {
        path:'producto-editar/:id',
        component:ProductEditarComponent
    },
    {
        path: 'criar-cliente',
        component: CreateClientComponent
    },
    {
        path: 'lista-cliente',
        component: ListClienteComponent
    },
    {
        path:'criar-pedido',
        component: CriarPedidoComponent
    },
    {
        path:'lista-pedidos',
        component:ListaPedidoComponent
    }
];
