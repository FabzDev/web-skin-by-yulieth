import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SbyHeaderComponent } from './shared/sby-header/sby-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SbyHeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'skin-by-yulieth';
}
