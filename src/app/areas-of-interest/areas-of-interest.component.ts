import { Component, OnInit, Input } from '@angular/core';
import {PickListModule} from 'primeng/picklist';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-areas-of-interest',
  templateUrl: './areas-of-interest.component.html',
  styleUrls: ['./areas-of-interest.component.css']
})
export class AreasOfInterestComponent implements OnInit {

  @Input() src: any[];
          dest: any[] = [];
  

  ngOnInit() {

  }
}
