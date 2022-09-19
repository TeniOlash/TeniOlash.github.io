import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ng-cvApp';
  isTheme2: boolean = true;

  constructor() {}

  ngOnInit(): void {}
  toggleTheme(event: any) {
    this.isTheme2 = !this.isTheme2;
  }
}
