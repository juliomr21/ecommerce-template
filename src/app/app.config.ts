// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { routes } from './app.routes';
// import { provideHttpClient } from '@angular/common/http';
// import { registerLocaleData } from '@angular/common';
// import localePt from '@angular/common/locales/pt';

// export const appConfig: ApplicationConfig = {
 
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(), provideAnimationsAsync(),
//   ]
// };
import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
// import { ErrorResponseInterceptor } from './Shared/error-response.interceptor';
import { MessageService } from 'primeng/api';
// Registrar el locale para 'pt-BR'
registerLocaleData(localePt, 'pt-BR');

export const appConfig: ApplicationConfig = {
  providers: [
    MessageService,
    provideRouter(routes),
    provideHttpClient(),
    provideAnimationsAsync(),
    { provide: LOCALE_ID, useValue: 'pt-BR' } // Configuración de localización en portugués brasileño
  ]
};

