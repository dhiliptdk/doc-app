import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card"
import { MatDialogModule } from "@angular/material/dialog"
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatInputModule } from "@angular/material/input"
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatMomentDateModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatDividerModule
  ]

})
export class MaterialModule { }
