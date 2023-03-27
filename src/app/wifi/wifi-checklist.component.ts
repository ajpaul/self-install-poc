import { Component, OnInit } from '@angular/core';
import { IChecklist } from '../shared/checklist-dumb/checklist';
import { WIFI_CHECKLIST } from './config/checklist';

@Component({
  selector: 'app-checklist',
  templateUrl: './wifi-checklist.component.html'
})
export class WifiChecklistComponent implements OnInit {

  wifiConfig: IChecklist = WIFI_CHECKLIST;

  constructor() {}

  ngOnInit(): void {
    console.log(WIFI_CHECKLIST);
  }

  setupClickHook(): void {
    console.log('setup click detected in parent');
    // working
    // we could navigate to the start of the new connect modem flow here
  }

}
