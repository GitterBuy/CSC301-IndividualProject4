
import { Component, OnInit } from '@angular/core';
import { ApiServiceService, Data } from 'app/api-service.service';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-coins-repository',
  templateUrl: './coins-repository.component.html',
  styleUrls: ['./coins-repository.component.scss']
})
export class CoinsRepositoryComponent implements OnInit {

  public entries: any[];
  public DisplayedResults: any[];
  constructor( private apiService: ApiServiceService) {}
  public clicked = false;
  public selected;
  public loading: boolean;
  search(search: string) {
    this.clicked = false;
    if (!search) {
    } else {

      this.DisplayedResults =  this.entries.filter(v => (v[1].fullName.indexOf(search) > -1) || (v[1].algorithm.indexOf(search) > -1));
    }
  }

  open(repo: any) {
    this.selected = this.entries.find(v => v[0] === repo[0]);

    this.clicked = true;

}

  ngOnInit(): void {
    this.loading = true;
    this.clicked = false;
    this.apiService.getValues()
      .subscribe(v => {
        let map: { [key: string]: Data; } = { };
        map = v;
        this.entries = Object.entries(map);
        this.DisplayedResults = this.entries;
        this.loading = false;
      });
  }

}