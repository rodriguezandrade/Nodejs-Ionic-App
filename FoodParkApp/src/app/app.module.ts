import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomePage } from "./home/home.page";
import { HttpClientModule } from "@angular/common/http";
import { ProductsComponent } from "./components/products/list-products/products.component";
import { EditProductsComponent } from "./components/products/edit-products/edit-products.component";
import { AddProductsComponent } from "./components/products/add-products/add-products.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    AddProductsComponent,
    EditProductsComponent,
    ProductsComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
