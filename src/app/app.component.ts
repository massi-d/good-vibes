import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'good_vibes';
  scroll: string = 'auto';

  modalStatus(event: boolean): void {
    event ? this.scroll = 'hidden' : this.scroll = 'auto';
  }
}
