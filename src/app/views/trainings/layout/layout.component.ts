import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [`
    a { margin: 10px }
    .header { min-height: 50px; background-color: lightblue; display: flex; align-items: center }
    .footer { min-height: 50px; background-color: lightblue; display: flex; align-items: center; justify-content: center }
    .content { padding: 16px }
  `]
})
export class LayoutComponent {
}
