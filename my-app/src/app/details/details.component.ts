import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Person} from '../exercise-three/exercise-three.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
@Input() user: Person;
@Output() update = new EventEmitter();
  constructor( ) {
   }

  ngOnInit(): void {
  }
  edit(){
      this.update.emit();
  }

}
