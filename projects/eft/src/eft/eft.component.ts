import { Component, Input } from '@angular/core';

@Component({
  selector: 'eft-root',
  standalone: true,
  templateUrl: './eft.component.html',
  styleUrl: './eft.component.css'
})
export class EftComponent {
  title = 'eft app and eft component';

  @Input() uid:  string = 'eft_uid';
  @Input() perm: string = 'eft---';

  constructor() {
    console.log('EftComponent ctor() uid = ' + this.uid);
  }
}
