import { Directive, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { AtividadeFormComponent } from './atividade-form/atividade-form.component';
import { HttpClientModule} from '@angular/common/http';
import { ApiFilmeComponent } from './api-filme/api-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
    FormComponent,
    AtividadeFormComponent,
    ApiFilmeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
