import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sp-template-driven',
  template: `
  <h1>Template Driven: FormsModule</h1>
  <ul>
    <li>two-way data binding</li>
    <li>change tracking</li>
    <li>validation</li>
    <li>error handling</li>
  </ul>
  <router-outlet></router-outlet>
  `
})

export class TemplateDrivenComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
