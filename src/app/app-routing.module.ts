import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'finance',
    pathMatch: 'full'
  },
  {
    path: 'reminders/:reminderId',
    loadChildren: () => import('./components/reminders/reminders.module').then( m => m.RemindersPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./components/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./components/goals/goals.module').then( m => m.GoalsPageModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./components/finance/finance.module').then( m => m.FinancePageModule)
  },
  {
    path: 'emi',
    loadChildren: () => import('./components/emi/emi.module').then( m => m.EmiPageModule)
  },
  {
    path: 'docs',
    loadChildren: () => import('./components/docs/docs.module').then( m => m.DocsPageModule)
  },
  {
    path: 'routine',
    loadChildren: () => import('./components/routine/routine.module').then( m => m.RoutinePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
