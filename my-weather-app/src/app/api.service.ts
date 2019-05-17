import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  weather: string;
  apiURL: 'api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a595d29624ac23f3723e65c72f0645b1';

  constructor(private httpClient: HttpClient) {
   }
  public getWeather(url?: string) {
    return this.getWeather(this.apiURL);
  }
}
