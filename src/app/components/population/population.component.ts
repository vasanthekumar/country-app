import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.scss']
})

export class PopulationComponent {

  title = "Population";

  @Input() population:any;

  ngOnInit(){
    
  }

}
