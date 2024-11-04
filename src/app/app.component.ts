import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Импорт RouterModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule]
})
export class AppComponent {
  title = 'famous-people-app';
}
