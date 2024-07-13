import { Component } from '@angular/core';
import { routes } from '../app.routes';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-achat',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './achat.component.html',
  styleUrl: './achat.component.css'
})
export class AchatComponent {

}
