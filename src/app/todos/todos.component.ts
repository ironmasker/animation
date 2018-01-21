import { Component } from '@angular/core';
import { trigger, state , transition, style, animate } from '@angular/animations';
import { fade } from 'app/animations';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  animations: [
    fade
    // trigger('fade', [
    //   state('void', style({
    //     opacity: 0,
    //     fontSize: 22,
    //     borderBottomColor: 'red'
    //   })),
    //   // transition('* <=> void, void => *', [
    //   transition(':leave, :enter', [
    //     animate(500/* due to state definition, style({
    //       opacity: 0
    //     })*/)
    //   ])/*,
    //   transition('void => *', [
    //     /*due to state definition style({
    //       /*backgroundColor: 'yellow', opacity: 0
    //     }),
    //     animate(500/* due to default state will auto-revert the , style({
    //       backgroundColor: 'white', opacity: 1
    //     }))
    //   ])*/
    // ])

  ]
})
export class TodosComponent {
  items: any[] = [
    'Wash the dishes', 
    'Call the accountant', 
    'Apply for a car insurance'];

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = ''; 
  }

  removeItem(item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
