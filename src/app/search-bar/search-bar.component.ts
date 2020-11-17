import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  term = '';
  constructor() { }

  ngOnInit(): void {
  }

  onInputSearch(value: string) {
    this.term = value;
  }

  onFormSubmit(event: KeyboardEvent) {
    event.preventDefault();
    console.log(this.term);
  }

}
