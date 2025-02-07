import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-history-list',
  standalone: false,
  templateUrl: './history-list.component.html',
  styleUrl: './history-list.component.css'
})
export class HistoryListComponent {
  @Input()
  public gifs : Gif[];

  constructor(){
    this.gifs = [];
  }
  
}
