import { Component, OnInit, Input } from '@angular/core';
import { Day, ApiService } from '../services/api.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input() searchResults: object;
  @Input() search: boolean;
  @Input() kw: string;
  @Input() title: string;
  @Input() body: string;
  @Input() date: string;
  @Input() create: boolean = false;
  @Input() edit: boolean = false;


  constructor(private api: ApiService) { }
  
  ngOnInit() {
    this.api.getDailyPages().subscribe((dailyPages: Day[]) => {
      if (dailyPages.length > 0) {
        this.title = dailyPages[0].title;
        this.body = dailyPages[0].body;
        this.date = dailyPages[0].date;
      } else {
        return;
      }
    })
  }

  selectPost(date:string) {
    this.api.getSpecificPage(date).subscribe((selectedPage: Day[]) => {
      if (selectedPage.length > 0) {
        this.searchResults = null;
        this.title = selectedPage[0].title;
        this.body = selectedPage[0].body;
        this.date = selectedPage[0].date;
        return;
      } else {
        return;
      }
    })
  }

}
