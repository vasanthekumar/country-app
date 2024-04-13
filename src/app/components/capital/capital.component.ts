import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.scss']
})
export class CapitalComponent {

  title="Capital";

  @Input() capital:any;

  ngOnInit(){
    
  }
}
