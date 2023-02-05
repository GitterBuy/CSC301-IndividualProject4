import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment  } from '../environments/environment';
import { Observable } from 'rxjs';


export class Taxonomy {
    Access: string;
    FCA: string;
    FINMA: string;
    Industry: string;
    CollateralizedAsset: string;
    CollateralizedAssetType: string;
    CollateralType: string;
    CollateralInfo: string;
}

export class Rating {
    public Weiss: Weiss;
}
export class Weiss {
    TechnologyAdoptionRating: string;
     MarketPerformanceRating: string;
}
export class Data {
    Id: string;
    Url: string;
    ImageUrl: string;
    ContentCreatedOn: number;
    Name: string;
    Symbol: string;
    CoinName: string;
    FullName: string;
    Description: string;
    AssetTokenStatus: string;
    Algorithm: string;
    ProofType: string;
    SortOrder: string;
    Sponsored: boolean;
    Taxonomy: Taxonomy;
    Rating: Rating;
    IsTrading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private api: string = environment.api;

  constructor(
    private http: HttpClient,
    ) { }


  public getValues(): Observable<any> {
    return this.http.get<any>(`${this.api}/coins/search`);
  }
}
