export interface IHistoryGifs{
  getHistory() : string[];
  addLastToHistory(gif: string): void;
  addFirstToHistory(gif: string): void
  removeOfHistory( gif : string) : void;
}
