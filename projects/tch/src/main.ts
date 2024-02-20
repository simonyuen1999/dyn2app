import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './tch/tch.config';
import { TchComponent } from './tch/tch.component';

bootstrapApplication(TchComponent, appConfig)
  .catch((err) => console.error(err));
