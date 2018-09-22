import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	// initial variables
	dropDownField = { id:0, name:'Select' };
	isShowList = false;
	searchTx = '';
	dropDownList = [
		{ id:1, name:'Rahul' },
		{ id:2, name:'Sudan' },
		{ id:3, name:'Mayank' },
		{ id:4, name:'Arunraj' }
	];
	filteredDropDownList = this.dropDownList;

	constructor(){}

	// filter the list when user type in search field
	onFilterList() {
		this.filteredDropDownList = this.dropDownList.filter((ele) => ele.name.toLowerCase().indexOf(this.searchTx.toLowerCase()) > -1);
	}
}
