import { Component, OnInit } from '@angular/core';
import { IChecklist } from './checklist';
import { ActivatedRoute } from '@angular/router';
import { checklists } from './config/checklist';

@Component({
  selector: 'si-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  listConfig!: IChecklist;
  lob!: string; // probably could use a type for the route data object instead of just the string inside of it

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // get the key that tells us what lob it is
    this.route.data.subscribe( data => {
      this.lob = data['lob']; // this is fragile and could error out probably, needs work
      this.listConfig = this.loadConfig(this.lob);
    })
  }

  // i do not like this but it is quick and functional here
  loadConfig(lob: string): IChecklist {
    switch(lob){
      case 'wifi':
        return checklists.WIFI_CHECKLIST;
      default:
        return checklists.VOICE_CHECKLIST
    }
  }
}
