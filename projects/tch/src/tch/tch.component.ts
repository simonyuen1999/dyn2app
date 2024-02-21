import { Component, Input } from '@angular/core';

@Component({
  selector: 'tch-root',
  standalone: true,
  templateUrl: './tch.component.html',
  styleUrl: './tch.component.css'
})
export class TchComponent {
  title = 'tch app and tch component';

  @Input() uid:  string = 'tch_uid';
  @Input() perm: string = 'tch---';

  constructor() {
    console.log('TchComponent ctor() uid = ' + this.uid);
  }
}
