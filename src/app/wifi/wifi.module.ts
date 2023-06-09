import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WifiRoutingModule } from './wifi-routing.module';
import { WifiChecklistComponent } from './wifi-checklist.component';


@NgModule({
  declarations: [
    WifiChecklistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    WifiRoutingModule
  ],
})
export class WifiModule { }
