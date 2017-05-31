import { WidgetsRoutingModule } from './widgets-routing.module';
import { WidgetsService } from './services/widgets.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetsPanelComponent } from './widgets-panel/widgets-panel.component';

@NgModule({
  imports: [
    CommonModule, WidgetsRoutingModule
  ],
  declarations: [WidgetsPanelComponent],
  providers: [WidgetsService],
  exports: [WidgetsPanelComponent]
})
export class WidgetsModule { }
