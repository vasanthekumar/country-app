import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {

  @Input() title?:string;

  @Input() value?:string;

  displayImage = false;

  ngOnInit(){

    if(this.title==='flag'){
      this.displayImage = true;
    }
    
  }


}
