import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  enlargeImg:number = 0;
  selectedImg:string = "";


  focusImg(Image:string){
    this.selectedImg = Image;
    if (this.enlargeImg == 0){
      this.enlargeImg = 1;
    } else if(this.enlargeImg== 1){
      this.enlargeImg = 0;
    }
  }

}
