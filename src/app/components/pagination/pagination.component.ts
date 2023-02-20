import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Pagination, StatusNavigation } from 'src/app/models';
import { FIRST_POSITION } from 'src/app/config/constants';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Output() click = new EventEmitter<StatusNavigation>();
  @Input() pagination: Pagination = {
    count: 0,
    currentPage: 0,
    next: '',
    prev: '',
    pages: 0,
  };
  public firstPosition: number = FIRST_POSITION;

  handleNavigation = (type: StatusNavigation) => {
    this.click.emit(type);
  };
}
