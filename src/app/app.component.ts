import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http
      .post(
        'https://ng-complete-guide-c56d3.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.http
    .get('https://ng-complete-guide-c56d3.firebaseio.com/posts.json')
    .subscribe(posts => {
      console.log(posts);
    });
  }

  onClearPosts() {
    // Send Http request
  }
}
