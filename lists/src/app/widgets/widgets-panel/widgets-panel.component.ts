import { Widget } from './../models/widget';
import { WidgetsService } from './../services/widgets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets-panel',
  templateUrl: './widgets-panel.component.html',
  styleUrls: ['./widgets-panel.component.css']
})
export class WidgetsPanelComponent implements OnInit {

  widgets: Widget[];

  constructor(private _widgets: WidgetsService) { }

  ngOnInit() {
    this.widgets = this._widgets.getWidgets();
  }

}
