import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExamplesComponent } from './examples/examples.component';
const appRoutes: Routes = [
    {   path: '', component: HomeComponent, pathMatch: 'full'},
    {   path: 'examples', component: ExamplesComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
