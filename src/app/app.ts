import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LearningResources } from './learning-resources/learning-resources';
import { Auth } from './auth/auth';
import { AuthService } from './auth/auth-service';
import { AuthD } from './auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,LearningResources,Auth,AuthD],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('learn-directives');
  authService = inject(AuthService);
  isAdmin = computed(() => this.authService.activePermission() === 'admin');
}
