import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DetailsComponent } from './component/details/details.component';

import { MatButtonModule } from '@angular/material/button';
import { LaunchService } from './services/launch.service';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    MatButtonModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [LaunchService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
