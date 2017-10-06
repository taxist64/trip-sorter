import { Routes, RouterModule } from '@angular/router';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { SearchResultsComponent } from './search-results/search-results.component';

export const routes: Routes = [
  { path: '', component: SearchPanelComponent },
  { path: 'search-results', component: SearchResultsComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
