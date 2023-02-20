import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() input = new EventEmitter<string>();
  public text = '';

  handleInput = () => {
    this.input.emit(this.text);
  };
}
