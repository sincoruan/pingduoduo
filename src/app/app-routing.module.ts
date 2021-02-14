import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './home/components/home-container/home-container.component';

const routes: Routes = [
    // { path: '', component: HomeContainerComponent }
    { path: '', redirectTo:'home',pathMatch:'full' }
      
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
