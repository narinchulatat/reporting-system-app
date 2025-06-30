import { Component } from '@angular/core';

@Component({
  selector: 'app-report-filters',
  templateUrl: './report-filters.component.html'
})
export class ReportFiltersComponent {
  filter = {
    hospital: '',
    category: '',
    startDate: '',
    endDate: ''
  };

  hospitals = ['โรงพยาบาล A', 'โรงพยาบาล B'];
  categories = ['หมวด 1', 'หมวด 2'];

  submit() {
    console.log('Filters:', this.filter);
  }
}
