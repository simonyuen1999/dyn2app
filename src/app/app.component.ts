import { Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TchComponent } from '../../projects/tch/src/tch/tch.component';
import { EftComponent } from '../../projects/eft/src/eft/eft.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dyn-app2';

  components: Type<any>[] = [TchComponent, EftComponent];

  isAdmin = false;
  flip_comp = TchComponent;

  toggleComponent() {
    this.isAdmin = !this.isAdmin;
    this.flip_comp = this.isAdmin ? TchComponent : EftComponent;
  }
}
