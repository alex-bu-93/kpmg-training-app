import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-local-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './local-spinner.component.html',
  styleUrls: ['./local-spinner.component.scss']
})
export class LocalSpinnerComponent {
}
