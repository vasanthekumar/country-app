import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss']
})
export class FlagComponent {

  title="flag";
  
  @Input() flag:any;

  ngOnInit(){
    
  }
}
