// import {
//     MatButtonModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatCardModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatListModule,
//     MatDividerModule
//   } from '@angular/material';
import { MatButtonModule } from '@angular/material/Button';
import { MatToolbarModule } from '@angular/material/Toolbar';
import { MatIconModule } from '@angular/material/Icon';
import { MatCardModule } from '@angular/material/Card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

  import { NgModule } from '@angular/core';

  @NgModule({
    imports: [
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule,
      MatDividerModule
    ],
    exports: [
      MatButtonModule,
      MatToolbarModule,
      MatIconModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule,
      MatDividerModule
    ],
  })
  export class MaterialModule {}
