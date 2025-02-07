import { Injectable } from '@angular/core';
import { IHistoryGifs } from '../interfaces/IHistoryGifs';
import { GifsHistory } from '../classes/gifsHistory';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagHistory : IHistoryGifs;

  constructor() {
    this._tagHistory = new GifsHistory();
  }
  public getTagHistory() : string[]{

    // return [...this.getTagHistory()];
    return this._tagHistory.getHistory();
  }
  public searchTag(tag : string) : void{
    this._tagHistory.addFirstToHistory(tag);
  }
}
