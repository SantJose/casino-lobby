import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {UnderConstructionComponent} from './under-construction/under-construction.component';


@NgModule({
  declarations: [
    HeaderComponent,
    UnderConstructionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    HeaderComponent,
    UnderConstructionComponent
  ]
})
export class SharedModule { }
