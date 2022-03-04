import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ObservablesComponent } from './components/observables/observables.component';

const routes: Routes = [
  { path: 'observables', component: ObservablesComponent },
];

@NgModule({
  declarations: [AppComponent, ObservablesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
