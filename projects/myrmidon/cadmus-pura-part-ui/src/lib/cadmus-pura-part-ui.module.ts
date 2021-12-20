import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

// general Cadmus modules
import { CadmusUiModule } from '@myrmidon/cadmus-ui';
import { NgMatToolsModule } from '@myrmidon/ng-mat-tools';
import { NgToolsModule } from '@myrmidon/ng-tools';
import { AuthJwtLoginModule } from '@myrmidon/auth-jwt-login';

import { WordFormsPartComponent } from './word-forms-part/word-forms-part.component';
import { WordFormComponent } from './word-form/word-form.component';
import { LemmaTagFragmentComponent } from './lemma-tag-fragment/lemma-tag-fragment.component';

@NgModule({
  declarations: [
    LemmaTagFragmentComponent,
    WordFormComponent,
    WordFormsPartComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // material
    NgToolsModule,
    NgMatToolsModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTooltipModule,
    FlexLayoutModule,
    // Cadmus
    NgToolsModule,
    AuthJwtLoginModule,
    CadmusUiModule,
  ],
  exports: [
    LemmaTagFragmentComponent,
    WordFormComponent,
    WordFormsPartComponent,
  ],
})
export class CadmusPuraPartUiModule {}
