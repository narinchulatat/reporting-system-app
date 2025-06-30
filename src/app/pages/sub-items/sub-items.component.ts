import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sub-items',
  templateUrl: './sub-items.component.html'
})
export class SubItemsComponent implements OnInit {
  subItems: any[] = [];
  menuItems: any[] = [];
  newSubItem = { name: '', menu_item_id: null };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchSubItems();
    this.fetchMenuItems();
  }

  fetchSubItems() {
    this.http.get<any[]>('http://localhost:3000/sub-items').subscribe(data => this.subItems = data);
  }

  fetchMenuItems() {
    this.http.get<any[]>('http://localhost:3000/menu-items').subscribe(data => this.menuItems = data);
  }

  addSubItem() {
    this.http.post('http://localhost:3000/sub-items', this.newSubItem).subscribe(() => {
      this.newSubItem = { name: '', menu_item_id: null };
      this.fetchSubItems();
    });
  }

  deleteSubItem(id: number) {
    this.http.delete(`http://localhost:3000/sub-items/${id}`).subscribe(() => this.fetchSubItems());
  }
}
