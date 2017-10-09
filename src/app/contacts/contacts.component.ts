import { Component } from '@angular/core'



@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html'
})

export class ContactsComponent{
	user:object = {
		firstName: 'John',
		lastName: 'Doe',
		email: 'example@example.com'
		};
}