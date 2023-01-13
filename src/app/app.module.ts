import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { HighlightDirectiveDirective } from './highlight-directive.directive';
import { BoldDirectiveDirective } from './bold-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
    HighlightDirectiveDirective,
    BoldDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
