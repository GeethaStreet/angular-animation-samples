import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

import { HomeComponent } from './routes/home.component';
import { ParentComponent } from './routes/parent.component';
import { AdvancedComponent } from './routes/advanced.component';

const animationRoutes:Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      animation: {
        value: 'home',
      }
    }
  },
  {
    path: 'basics',
    component: ParentComponent,
    data: {
      animation: {
        value: 'basic',
      }
    }
  },
  {
    path: 'advanced',
    component: AdvancedComponent,
    data: {
      animation: {
        value: 'advanced',
      }
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    data: {
      animation: {
        value: 'home',
      }
    }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentComponent,
    AdvancedComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(animationRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
