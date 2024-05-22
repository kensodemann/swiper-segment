import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalPageRoutingModule } from './medical-routing.module';

import { MedicalPage } from './medical.page';
import { WhatsCoveredComponent } from '../whats-covered/whats-covered/whats-covered.component';
import { ExpandableComponent } from '../expandable/expandable/expandable.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, MedicalPageRoutingModule],
  declarations: [MedicalPage, WhatsCoveredComponent, ExpandableComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MedicalPageModule {}
