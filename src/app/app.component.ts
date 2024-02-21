import { Component, NO_ERRORS_SCHEMA, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TchComponent } from '../../projects/tch/src/tch/tch.component';
import { EftComponent } from '../../projects/eft/src/eft/eft.component';

// https://angular.io/api/common/NgComponentOutlet#description

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dyn-app2';

  user = {
    'uid': 'syuen02',
    'perm': 'CRUD'
  };

  counter = 0;

  components: Type<any>[] = [TchComponent, EftComponent];

  isAdmin = false;
  flip_comp = TchComponent;

  changeUserValue() {
    this.user.uid  = 'ama08_' + this.counter;
    this.user.perm = 'RX_'    + this.counter;
    this.counter++;
  }

  toggleComponent() {
    this.isAdmin = !this.isAdmin;
    this.flip_comp = this.isAdmin ? TchComponent : EftComponent;
  }
}
