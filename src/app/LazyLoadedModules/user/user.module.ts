import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RootComponent } from './components/root/root.component';

console.warn("lazy loadind work");
@NgModule({
  declarations: [
    RootComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { 
}
