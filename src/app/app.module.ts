import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DetailsComponent } from './component/details/details.component';
import { MissionDetailComponent } from './component/core-components/mission-detail/mission-detail.component';
import { ButtonComponent } from './component/core-components/button/button.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DetailsComponent,
    MissionDetailComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NoopAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
