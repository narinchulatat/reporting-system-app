import { Component } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html'
})
export class PermissionsComponent {
  roles = ['Admin', 'Editor', 'Viewer'];
  users = [
    { id: 1, name: 'John', role: 'Viewer' },
    { id: 2, name: 'Jane', role: 'Editor' }
  ];

  updateRole(user: any, role: string) {
    user.role = role;
    console.log(`Updated user ${user.name} to role ${role}`);
  }
}
