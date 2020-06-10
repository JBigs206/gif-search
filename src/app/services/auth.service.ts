import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	public baseUrl: string;

  	constructor(
  		private api: ApiService,
  	) { }

  	getTrendingResults(){
      return new Promise((resolve, reject) => {
        this.api.get('trending?api_key=46srviTP7KvbJURHNQ9wEdhxvRWSs9Qd&limit=25&rating=G')
        .subscribe((res: any) => {
          
          resolve(res);
        }, (err: any) => {
          resolve(err);
        });
      });
    }

  	getRandomResults(){
      return new Promise((resolve, reject) => {
        this.api.get('random?api_key=46srviTP7KvbJURHNQ9wEdhxvRWSs9Qd&tag=&rating=G')
        .subscribe((res: any) => {
          
          resolve(res);
        }, (err: any) => {
          resolve(err);
        });
      });
    }

  	getSearchResults(searchData){
      return new Promise((resolve, reject) => {
        this.api.get('search?api_key=46srviTP7KvbJURHNQ9wEdhxvRWSs9Qd&q=' + searchData + '&limit=25&offset=0&rating=G&lang=en')
        .subscribe((res: any) => {
          
          resolve(res);
        }, (err: any) => {
          resolve(err);
        });
      });
    }
}
