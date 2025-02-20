import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService){}

  public getHistoryGif(): string[]{
    return this.gifsService.getTagHistory();
  }
  public researchByName(history : string): void{
    this.gifsService.searchTag(history);
  }
}
