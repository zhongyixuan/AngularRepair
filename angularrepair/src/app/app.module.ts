import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { DefnavbarComponent } from './defnavbar/defnavbar.component';
import { RepairComponent } from './repair/repair.component';

/* Route import */
import { RouterModule, Routes} from '@angular/router';

/* Route */
// 一個Routes(包含多個Route的陣列),首先要包含path路徑，還有相對應路徑要配合的Component
const appRoutes: Routes = [
  { path: '', component: DefaultComponent },
  { path: 'repair', component: RepairComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    DefnavbarComponent,
    RepairComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),//router是全專案唯一一個就必須加入此段
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
