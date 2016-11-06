import { Component } from '@angular/core';
@Component({
	selector: `my-app`,
	template: `
		<firstimpression-header></firstimpression-header>
		<router-outlet>
		<firstimpression-footer></firstimpression-footer>
	`
})
export class AppComponent { }