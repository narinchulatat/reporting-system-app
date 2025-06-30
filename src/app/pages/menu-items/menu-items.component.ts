import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html'
})
export class MenuItemsComponent implements OnInit {
  items: any[] = [];
  newItem = { name: '' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.http.get<any[]>('http://localhost:3000/menu-items').subscribe(data => this.items = data);
  }

  addItem() {
    this.http.post('http://localhost:3000/menu-items', this.newItem).subscribe(() => {
      this.newItem = { name: '' };
      this.fetchItems();
    });
  }

  deleteItem(id: number) {
    this.http.delete(`http://localhost:3000/menu-items/${id}`).subscribe(() => this.fetchItems());
  }
}
