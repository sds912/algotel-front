import { MomentUtcDateAdapter } from './utils/momentUtcDateAdapter';
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
import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
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
import { SanitazePipe } from './utils/sanitaze.pipe';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MyCarouselComponent } from './components/my-carousel/my-carousel.component';
import { MyImgSliderComponent } from './components/my-img-slider/my-img-slider.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DefaultResultsComponent } from './pages/default-results/default-results.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapViewerComponent } from './components/map-viewer/map-viewer.component';







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
    DownloadComponent,
    SanitazePipe,
    MyCarouselComponent,
    MyImgSliderComponent,
    PostDetailsComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    LoginRegisterComponent,
    LoginFormComponent,
    RegisterFormComponent,
    PaiementComponent,
    DefaultResultsComponent,
    MapViewerComponent
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
    provideStorage(() => getStorage()),
    GoogleMapsModule




  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
