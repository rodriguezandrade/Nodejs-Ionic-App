import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './components/products/add-products/add-products.component';
import { EditProductsComponent } from './components/products/edit-products/edit-products.component';
import { ProductsComponent } from './components/products/list-products/products.component';

// const routes: Routes = [
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
// ];

const routes: Routes = [
  { path: 'add-product', component: AddProductsComponent },
  { path: 'edit-product', component: EditProductsComponent},
  { path: '', component: ProductsComponent, pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
