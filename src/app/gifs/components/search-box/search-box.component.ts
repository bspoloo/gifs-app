import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gif-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('txtTagInpunt')
  public tagInpunt! : ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){

  }
  public searchTag(){
    const newTag = this.tagInpunt.nativeElement.value;
    if(!newTag){
      alert('No hay mensaje a guardar');
      return;
    }
    this.gifsService.searchTag(newTag);
    this.tagInpunt.nativeElement.value = '';
    console.log({newTag});
  }
}
