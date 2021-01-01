import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    PageNotFoundComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialModule, FlexLayoutModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    PageNotFoundComponent,
  ],
})
export class SharedModule {}
