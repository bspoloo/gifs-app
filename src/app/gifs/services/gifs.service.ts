import { Injectable } from '@angular/core';
import { IHistoryGifs } from '../interfaces/IHistoryGifs';
import { GifsHistory } from '../classes/gifsHistory';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _tagHistory : IHistoryGifs;
  private _gifs : Gif[] = [];

  private API_KEY : string= '0jpgxwyLWrf6Xag2IwsTlYeP9nojK0FG';
  private URI_GIPHY : string = 'https://api.giphy.com/v1/gifs';
  private limit : number = 10;

  constructor(private http: HttpClient) {
    this._tagHistory = new GifsHistory();
    this.loadLocalStorage();
  }
  public getTagHistory() : string[]{
    return this._tagHistory.getHistory();
  }
  public getGifs() : Gif[]{
    return this._gifs;
  }
  public async searchTag(tag : string) : Promise<void>{

    const paramas : HttpParams = new HttpParams()
                                .set('api_key', this.API_KEY)
                                .set('limit', this.limit)
                                .set('q', tag)

    this._tagHistory.addFirstToHistory(tag);

    this.http.get<SearchResponse>(`${this.URI_GIPHY}/search`, {params : paramas})
    .subscribe(resp => {
      console.log(resp.data);
      this._gifs = resp.data;
    })

    this.saveLocalStorage();
  }
  private saveLocalStorage() : void{
    localStorage.setItem('history', JSON.stringify(this._tagHistory))
  }
  private loadLocalStorage() : void{

  }
}
