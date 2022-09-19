import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-section',
  templateUrl: './cv-section.component.html',
  styleUrls: ['./cv-section.component.css'],
})
export class CvSectionComponent implements OnInit {
  public cvItems!: Array<[string]>;

  isDarkMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.cvItems = [['Skills']];
  }

  toggleDarkMode(event: any) {
    this.isDarkMode = !this.isDarkMode;
    console.log('Dark mode: ' + this.isDarkMode, this.cvItems);
  }
}
