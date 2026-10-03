import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Zodiaco} from './zodiaco/zodiaco';

@Component({
  imports: [RouterOutlet, Zodiaco],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('SegundoPacial_Angular');
}
