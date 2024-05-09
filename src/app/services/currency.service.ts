import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency, CurrencyData } from './items/currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'https://www.cbr-xml-daily.ru/daily_json.js';

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<CurrencyData > {
    return this.http.get<CurrencyData>(this.apiUrl);
  }
}
