import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lasy-image',
  standalone: false,
  templateUrl: './lasy-image.component.html',
  styleUrl: './lasy-image.component.css'
})
export class LasyImageComponent implements OnInit{
  @Input()
  public urlImage!: string;

  @Input()
  public altImage: string;

  public isLoaded : boolean;

  constructor(){
    this.isLoaded = false;
    this.altImage = '';
  }
  public onLoad(){
    console.log('The image has been loaded');
    setInterval(()=>{
      this.isLoaded = true;
    }, 1000);
  }

  ngOnInit(): void {
    if(!this.urlImage || !this.urlImage){
      throw new Error('URL or ALT propierty is required!')
    }
  }
}
