import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiStoreService } from './store/store.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [UiStoreService]
})
export class RootStoreModule { }