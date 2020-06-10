import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
	searchForm: FormGroup;
	submitted: Boolean = false;

	hideSearch = true;
	hideTrending = true;
	hideRandom = true;

	searchResults = null;
	trendingResults = null;
	randomResults = null;
	data = null;

	searchData = null;
	trendingData = null;
	randomData = null;
 
  	constructor(
  		private auth: AuthService,
  		public formBuilder: FormBuilder,
  		private titleService: Title,
      	library: FaIconLibrary,
  	) {
  		library.addIconPacks(fas);
  		this.searchForm = this.formBuilder.group({
  			'search': ['', Validators.compose([Validators.required])],
	    });
  	}
	public setTitle() {
      this.titleService.setTitle( "Gif Search" );
    }

	ngOnInit(): void {
		this.setTitle();
		this.getRandom();
  	}

  	search(){
  		if (this.searchForm.invalid) {
	      	return;
	    }

	    let formData = this.searchForm.getRawValue();
	    this.searchResults = this.auth.getSearchResults(formData.search).then(res => {
	        this.data = res;
	        let data = this.data.data;
	   	 	this.searchData = this.data.data;
	   	 	this.hideSearch = false;
	   	 	this.hideTrending = true;
	   	 	this.hideRandom = true;
	    });

	   
  	}

  	getTrending(){
  		this.trendingResults = this.auth.getTrendingResults().then(res => {
	        this.data = res;
	        let data = this.data.data;
	   	 	this.trendingData = this.data.data;
	   	 	this.hideTrending = false;
	   	 	this.hideRandom = true;
	   	 	this.hideSearch = true;
	    });
  	}

  	getRandom(){
  		this.randomResults = this.auth.getRandomResults().then(res => {
	        this.data = res;
	   	 	this.randomData = this.data.data;
	   	 	this.hideRandom = false;
	   	 	this.hideTrending = true;
	   	 	this.hideSearch = true;
	    });
  	}

}
