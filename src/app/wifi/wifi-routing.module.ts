import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChecklistComponent } from '../shared/checklist-dumb/checklist.component';


const routes: Routes = [
    {
        path: '',
        component: ChecklistComponent,
        data: {
            lob: 'wifi'
        }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WifiRoutingModule { }