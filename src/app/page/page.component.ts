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

  createPage(title: string, body: string, date: string) {
    this.api.createPage(title, body, date).subscribe((createdPage: Day[]) => {
      if (createdPage.length > 0) {
        this.title = createdPage[0].title;
        this.body = createdPage[0].body;
        this.date = createdPage[0].date
      }
      this.create = false;
      alert('Page has been saved');
    })
  }

  toggleCreate() {
    this.create = !this.create;
  }

  updatePage(title: string, body: string, date: string) {
    this.api.editPage(title, body, date).subscribe((updatedPage: Day[]) => {
      if (updatedPage.length > 0) {
        alert('Page was updated');
        this.title = updatedPage[1].title;
        this.body = updatedPage[1].body;
        this.date = updatedPage[1].date;
        this.edit = false;
        return;
      }
    })
  }

  toggleEdit(){
    this.edit = !this.edit;
  }

}
