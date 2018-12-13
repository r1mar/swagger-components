import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { SwaggerComponent } from './swagger/swagger.component';
import { SchemaService } from './swagger/schema.service';

@NgModule({
  imports:      [ BrowserAnimationsModule, BrowserModule, FormsModule, MatFormFieldModule, MatInputModule ],
  declarations: [ AppComponent, SwaggerComponent ],
  providers: [ SchemaService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
