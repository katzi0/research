import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}
window['CESIUM_BASE_URL'] = '/assets/cesium/';
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
