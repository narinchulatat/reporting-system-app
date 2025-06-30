import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html'
})
export class QueriesComponent implements OnInit {
  queries: any[] = [];
  newQuery = { name: '', query_sql: '' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchQueries();
  }

  fetchQueries() {
    this.http.get<any[]>('http://localhost:3000/queries').subscribe(data => this.queries = data);
  }

  addQuery() {
    this.http.post('http://localhost:3000/queries', this.newQuery).subscribe(() => {
      this.newQuery = { name: '', query_sql: '' };
      this.fetchQueries();
    });
  }

  deleteQuery(id: number) {
    this.http.delete(`http://localhost:3000/queries/${id}`).subscribe(() => this.fetchQueries());
  }
}
