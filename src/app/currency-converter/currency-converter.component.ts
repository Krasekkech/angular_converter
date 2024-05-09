import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import {Currency, CurrencyData} from '../services/items/currency';
import {parseJson} from "@angular/cli/src/utilities/json-file";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  // @ts-ignore
  RUSCurrency:number;
  EURCurrency = 'EUR' ;
  USDCurrency = 'USD';
  // message: string = "";
  // @ts-ignore
  USDCurrencyRate:number;
  // @ts-ignore
  EURCurrencyRate: number;


  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    // this.onInputChange();
  }

  onRUSInputChange($event: Event) {
    this.currencyService.getExchangeRates()
      .subscribe((data:CurrencyData) => {
        this.EURCurrencyRate = this.RUSCurrency / data.Valute[this.EURCurrency].Value;
        this.USDCurrencyRate = this.RUSCurrency / data.Valute[this.USDCurrency].Value;
        // if (this.RUSCurrency == 100){
        //   this.message = "Не имей сто рублей, а имей сто друзей"
        // }
      });
  }

  onEURInputChange($event: Event) {
    this.currencyService.getExchangeRates()
      .subscribe((data:CurrencyData) => {
        this.RUSCurrency = data.Valute[this.EURCurrency].Value * this.EURCurrencyRate ;
        this.USDCurrencyRate = this.RUSCurrency / data.Valute[this.USDCurrency].Value;
      });
  }

  onUSDInputChange($event: Event) {
    this.currencyService.getExchangeRates()
      .subscribe((data:CurrencyData) => {
        this.RUSCurrency = data.Valute[this.USDCurrency].Value * this.USDCurrencyRate
        this.EURCurrencyRate = this.RUSCurrency / data.Valute[this.EURCurrency].Value ;

      });
  }


}
