import { Component, OnInit } from '@angular/core';
import { ApiService, Day } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  search: boolean = false;
  searchResults: object;
  kw: string;
  title: string;
  body: string;
  date: string;
  edit: boolean;
  create: boolean;

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  searchKeyword(keyword: string) {
    this.api.getKeywordPage(keyword).subscribe((keywordResults: Day[]) => {
      if (keywordResults.length > 0) {
        this.searchResults = keywordResults;
        this.search = true;
        this.kw = keyword;
      } else {
        this.searchResults = null;
        this.search = false;
        alert('No results for that query');
        return;
      }
    })
  } 

  onSelectDate($event) {
    this.api.getSpecificPage(JSON.stringify($event.mDate._d).slice(1, 11)).subscribe((specificDate: Day[]) => {
      if (specificDate.length === 0) {
        alert('No results for that date, try another!');
        this.edit = false;
        this.create = false;
        this.search = false;
        return;
      }
      this.title = specificDate[0].title;
      this.body = specificDate[0].body;
      this.date = specificDate[0].date;
    });
  } 
}
