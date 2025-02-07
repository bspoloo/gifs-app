import { IHistoryGifs } from "../interfaces/IHistoryGifs";

export class GifsHistory implements IHistoryGifs{
  private historyGifs : string[];
  constructor(){
    this.historyGifs = [];
  }
  private organizeHistory(tag: string): void{
    if(this.historyGifs.includes(tag.toLowerCase())){
      this.historyGifs = this.historyGifs.filter(element => element !== tag.toLowerCase());
    }
    this.historyGifs.unshift(tag);
    this.historyGifs = this.historyGifs.slice(0,10);
  }
  getHistory(): string[] {
	return this.historyGifs;
  }
  addLastToHistory(gif: string): void {

    this.historyGifs.push(gif);
  }
  addFirstToHistory(gif: string): void {
    this.organizeHistory(gif);

  }
  removeOfHistory(gif: string): void {
    this.historyGifs = this.historyGifs.filter(element => element !== gif)
  }
}
