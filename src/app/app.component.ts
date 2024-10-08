import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Certifique-se de importar corretamente

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemForm: FormGroup;

  constructor() {
    this.itemForm = new FormGroup({
      itemName: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.itemForm.value);
  }
}
