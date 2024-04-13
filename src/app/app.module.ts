import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabComponent } from './components/tab/tab.component';
import {MatTableModule} from '@angular/material/table';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {NgFor,CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { TileComponent } from './components/tile/tile.component';
import { PopulationComponent } from './components/population/population.component';
import { CapitalComponent } from './components/capital/capital.component';
import { CountryCodeComponent } from './components/country-code/country-code.component';
import { FlagComponent } from './components/flag/flag.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    CountryTableComponent,
    GridComponent,
    TileComponent,
    PopulationComponent,
    CapitalComponent,
    CountryCodeComponent,
    FlagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatTableModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    NgFor,
    CommonModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
