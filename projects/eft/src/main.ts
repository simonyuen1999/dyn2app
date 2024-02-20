import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './eft/eft.config';
import { EftComponent } from './eft/eft.component';

bootstrapApplication(EftComponent, appConfig)
  .catch((err) => console.error(err));
