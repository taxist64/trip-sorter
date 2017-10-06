import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    TypeaheadModule.forRoot()
  ],
  providers: [appRoutingProviders, SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
