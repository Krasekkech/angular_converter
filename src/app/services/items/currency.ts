export interface Currency {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

export interface CurrencyData{
   Date: string
   PreviousDate: string
   PreviousURL: string
   Timestamp: string
   Valute: {[key: string]: Currency}
}

