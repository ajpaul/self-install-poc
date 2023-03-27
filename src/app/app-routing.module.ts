import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentListComponent } from './equipment-list/equipment-list.component';

const routes: Routes = [
  {
    path: 'wifi',
    loadChildren: () => import('./wifi/wifi.module').then(m => m.WifiModule)
  },
  {
    path: 'voice',
    loadChildren: () => import('./voice/voice.module').then(m => m.VoiceModule)
  },
  {
    path: '',
    redirectTo: '',
    component: EquipmentListComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
