import { LoaderComponent } from './components/loader/loader.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { ResultComponent } from './pages/result/result.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { SearchBtnComponent } from './components/search-btn/search-btn.component';
import { HomeTopCarouselComponent } from './components/home-top-carousel/home-top-carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { FeaturesComponent } from './components/features/features.component';
import { TopPostsComponent } from './components/top-posts/top-posts.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeBottomCarouselComponent } from './components/home-bottom-carousel/home-bottom-carousel.component';
import { DownloadComponent } from './components/download/download.component';
import { FirebaseAppModule, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    NavBarComponent,
    FooterComponent,
    HeaderComponent,
    ResultComponent,
    PostCardComponent,
    SearchBtnComponent,
    HomeTopCarouselComponent,
    FeaturesComponent,
    TopPostsComponent,
    LoaderComponent,
    SearchComponent,
    HomeBottomCarouselComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AutocompleteLibModule,
    MatDatepickerModule,
    MatMomentDateModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())




  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
