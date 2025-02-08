import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LasyImageComponent } from './components/lasy-image/lasy-image.component';



@NgModule({
  declarations: [
    SidebarComponent,
    LasyImageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SidebarComponent,
    LasyImageComponent
  ]
})
export class SharedModule { }
