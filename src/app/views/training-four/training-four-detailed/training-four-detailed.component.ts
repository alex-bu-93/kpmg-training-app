import { Component }      from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-training-four-detailed',
  templateUrl: './training-four-detailed.component.html',
  styleUrls: ['./training-four-detailed.component.css']
})
export class TrainingFourDetailedComponent {

  id = this.route.snapshot.params.id;

  constructor(
    private route: ActivatedRoute
  ) {
  }

}
