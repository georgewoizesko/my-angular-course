import { Component, OnInit } from '@angular/core';

import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My Weather App';
  weather: string;

  constructor(private apiService: ApiService) {
  this.weather = apiService.getWeather();
  }

  ngOnInit() {
  }


}
