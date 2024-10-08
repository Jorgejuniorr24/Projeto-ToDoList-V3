import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class ShoppingListComponent {
  items = [
    { name: 'Apple', purchased: false },
    { name: 'Milk', purchased: true },
  ];

  newItem: string = ''; // Propriedade para armazenar o novo item

  // Método para adicionar o item
  addItem() {
    if (this.newItem.trim()) {
      // Verifica se o novo item não está vazio
      this.items.push({ name: this.newItem, purchased: false });
      this.newItem = ''; // Limpa o campo após adicionar
    }
  }

  markAsPurchased(index: number) {
    this.items[index].purchased = true;
  }

  editItem(index: number) {
    // Adicione lógica de edição se necessário
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
