import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-multi-query',
  templateUrl: './multi-query.component.html'
})
export class MultiQueryComponent {
  selectedQueries: number[] = [];
  queries = [
    { id: 1, name: 'รายงาน A' },
    { id: 2, name: 'รายงาน B' }
  ];
  results: any[] = [];

  constructor(private http: HttpClient) {}

  runQueries() {
    this.results = [];
    this.selectedQueries.forEach(qid => {
      this.http.get<any[]>(`http://localhost:3000/query/${qid}/run?datestart=2024-01-01&dateend=2024-12-31`)
        .subscribe(data => {
          this.results.push({ id: qid, data });
        });
    });
  }
}
