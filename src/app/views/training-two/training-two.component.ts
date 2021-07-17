import { Component } from '@angular/core';

@Component({
  selector: 'app-training-two',
  templateUrl: './training-two.component.html',
  styleUrls: ['./training-two.component.css']
})
export class TrainingTwoComponent {

  str = 'My super variable';
  collection = {name: 'Alex', age: 15};

  names = ['Alex', 'Peter', 'Michael'];
  namesCollection = [{name: 'Alex'}, {name: 'Peter'}, {name: 'Michael'}];

  isIfVisible: boolean;

  date = new Date();
  num = 0.555555;

}
