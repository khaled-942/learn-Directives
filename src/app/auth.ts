import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from './auth/auth-service';
import { Permission } from './auth/auth.model';

@Directive({
  selector: '[appAuth]',
})
export class AuthD {
  appAuthInput = input.required<Permission>({ alias: 'appAuth' });

  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.authService.activePermission() === this.appAuthInput()) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainerRef.clear();
      }
    });
  }
}
