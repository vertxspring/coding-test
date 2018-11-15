import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreasOfInterestComponent } from './areas-of-interest/areas-of-interest.component';
import {PickListModule} from 'primeng/picklist';
import {ButtonModule} from 'primeng/button';
import { SearchBoxComponent } from './search-box/search-box.component';
import {PanelModule} from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {InputTextModule} from 'primeng/inputtext';
import { ClickOutsideModule } from 'ng-click-outside';
import { AdvancedFiltersComponent } from './advanced-filters/advanced-filters.component';
import { NumberOnlyDirective } from './utility/myNumberOnly';

import { RegistrationComponent } from './registration/registration.component';
import { SubmitComponent } from './submit/submit.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    AreasOfInterestComponent,
    SearchBoxComponent,
    AdvancedFiltersComponent,
    NumberOnlyDirective,
    RegistrationComponent,
    SubmitComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickListModule,
    ButtonModule,
    PanelModule,
    BrowserAnimationsModule,
    InputTextModule,
    ClickOutsideModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
