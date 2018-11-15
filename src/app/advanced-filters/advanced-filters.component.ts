import { Component, OnInit } from '@angular/core';
import {Filter} from './../model/filter-model';

@Component({
  selector: 'app-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.css']
})
export class AdvancedFiltersComponent implements OnInit {

  layoutStructure: Array<Filter> = [
    {
      header: 'Interactive Community',
      headerActive: false,
      children: [
        {
          childrenLabel: 'Usability Heading',
          active: false,
        },
        {
          childrenLabel: 'HFI Certification',
          active: false,
        }
      ]
    },
    {
      header: 'Heuristic Evaluations',
      headerActive: false,
      children: [
        {
          childrenLabel: 'Usability Testing',
          active: false
        },
        {
          childrenLabel: 'HFI Certification',
          active: false
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  /**
   * Updates the HeaderCheckbox and resets the child checkboxes
   * * @param { Filter } filter
   */
  updateHeaderCheckbox(filter: Filter): void {
    filter.headerActive = !filter.headerActive;
    this.modifyChildren(filter.children, filter.headerActive);
  }
  /**
   * Modifies all the children checkboxes based on the flag sent
   * * @param { Array<{childrenLabel: string, active: boolean}> } childrenArray
   * * @param {boolean} modifyTo
   */
  modifyChildren(childrenArray: Array<{childrenLabel: string, active: boolean}>,
    modifyTo: boolean): void {
    childrenArray.forEach((childrenData) => {
      childrenData.active = modifyTo;
    });
  }
  /**
   * Updates individual children checkbox and updates parent heading accordingly
   * * @param { {childrenLabel: string, active: boolean} } singleChildren
   * * @param { Filter } filter
   */
  updateIndividualChildren(singleChildren: {childrenLabel: string, active: boolean} ,
    filter: Filter): void {
      if (singleChildren.active) {
        singleChildren.active = false;
        const filterdChildrenArray = filter.children.filter((childrenObj) => {
          return childrenObj.active === true;
        });
        if (filterdChildrenArray.length === 0) {
          filter.headerActive = false;
        }
      } else {
        singleChildren.active = true;
        filter.headerActive = true;
      }
  }
}
