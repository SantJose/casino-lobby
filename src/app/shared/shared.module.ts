import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {UnderConstructionComponent} from './under-construction/under-construction.component';
import {BackTopComponent} from './back-top/back-top.component';

const SHARED_COMPONENTS = [
  HeaderComponent,
  UnderConstructionComponent,
  BackTopComponent
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    ...SHARED_COMPONENTS
  ]
})
export class SharedModule { }
