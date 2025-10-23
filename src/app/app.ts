import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CurrencyPipe } from './shared/pipes/CurrencyPipe.pipe';
import { UpperCasePipe } from './shared/pipes/UpperCasePipe.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule, UpperCasePipe, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-basic-project');

  // EVENT LESSON

  nameBtnShow = 'Click me to show message!';
  nameBtnHide = 'Click me to hide message!';

  clickMessage = '';

  handleClickMeShow(): void {
    this.clickMessage = 'Clicked Me ==> Hello World';
  }

    handleClickMeHide(): void {
    this.clickMessage = '';
  }

  updateField(): void {
    console.log('Hello World!');
  }

  // TWO WAY BINDING LESSON
  bindingMessage = '';

  // NG FOR (RENDER DATA)
    products = [
    { name: 'samba og', price: 400000, image: 'assets/images/samba-og.jpg' },
    { name: 'nike f1', price: 500000, image: 'assets/images/samba-og.jpg' },
    { name: 'addidas f2', price: 600000, image: 'assets/images/samba-og.jpg' },
    { name: 'mlb f3', price: 700000, image: 'assets/images/samba-og.jpg' },
  ];

}
