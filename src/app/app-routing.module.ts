import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/programs/programs.module#ProgramsModule' },
  { path: '**', loadChildren: './pages/not-found/not-found.module#NotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    /*
     * PreloadAllModules to be accessible offline after first load
     *
     * Makes rounting faster.
     * Deserves more bandwith analysis in large apps
     */
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
