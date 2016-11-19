import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// Services
import { QuestionDataService } from './service/question.service';
import { LocalStorageService} from './service/storage.service';
import { LocalStorageManager} from './service/storage.service.manager';
import { LogUtil} from './util/debug';

// Components
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard.component';
import { SignUpComponent } from './pages/signup.component';
import { SignInComponent } from './pages/signin.component';
import { OverviewComponent } from './pages/overview.component';
import { DetailComponent } from './pages/detail.component';
import { PrivacyComponent } from './pages/privacy.component';
import { TermsComponent } from './pages/terms.component';
import { ContactComponent } from './pages/contact.component';

// Views
import { QuestionCardviewComponent } from './view/question-cardview.component';

//Directive
import { HeaderDirectiveComponent } from './directive/header-directive.component';
import { FooterDirectiveComponent } from './directive/footer-directive.component';

// Create config options (see ILocalStorageServiceConfigOptions) for deets:
let localStorageServiceConfig = {
    prefix: 'first-impression',
    storageType: 'sessionStorage'
};

@NgModule({
	imports: [ BrowserModule,
		RouterModule.forRoot([
			{
				path: '',
				redirectTo: '/dashboard',
				pathMatch: 'full'
			},
			{
				path: 'dashboard',
				component: DashboardComponent
			},
			{
				path: 'signup',
				component: SignUpComponent
			},
			{
				path: 'signin',
				component: SignInComponent
			},
			{
				path: 'overview',
				component: OverviewComponent
			},
			{
				path: 'detail',
				component: DetailComponent
			},
			{
				path: 'privacy',
				component: PrivacyComponent
			},
			{
				path: 'terms',
				component: TermsComponent
			},
			{
				path: 'contact',
				component: ContactComponent
			}
		])
	 ],

	declarations: [ 
		AppComponent,
		DashboardComponent,
		SignUpComponent,
		SignInComponent,
		OverviewComponent,
		DetailComponent,
		HeaderDirectiveComponent,
		FooterDirectiveComponent,
		QuestionCardviewComponent,
		PrivacyComponent,
		TermsComponent,
		ContactComponent
	],

	providers: [
		QuestionDataService,
        LocalStorageService,
        LocalStorageManager,
        LogUtil
	],

  	//Define application entry point component.
	bootstrap: [ AppComponent ]
})

export class AppModule { }