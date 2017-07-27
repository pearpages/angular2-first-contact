import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UnlessDirective } from './unless.directive';
import { GotoTopComponent } from './goto-top.component';
import { GotoTopDirective } from './goto-top.directive';
import { StructuralDirectivesExample } from './structural-directives-example.component';
import { SharedModule } from '@space/shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [StructuralDirectivesExample],
  declarations: [
    StructuralDirectivesExample,
    UnlessDirective,
    GotoTopComponent,
    GotoTopDirective
  ],
  entryComponents: [GotoTopComponent]
})
export class StructuralDirectivesModule { }
