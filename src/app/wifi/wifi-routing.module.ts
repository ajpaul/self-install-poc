import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WifiChecklistComponent } from './wifi-checklist.component';


const routes: Routes = [
    {
        path: '',
        component: WifiChecklistComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WifiRoutingModule { }