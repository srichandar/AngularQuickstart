import { Component } from '@angular/core';
import { PostService } from '../services/post.services';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostService]
  
})
export class UserComponent  { 
name: string;
hobbies: string[];
posts: Post
constructor(private postService: PostService) {
	this.name = "john doe";
	this.hobbies = ["movies", "music", "sports"];
	this.postService.getPosts().subscribe(posts => {
	   this.posts = posts;
	});
}

addHobby(hobby: string) {
	this.hobbies.push(hobby);
}

deleteHobby(index: number) {
	this.hobbies.splice(index, 1);
}


 }
 
 interface Post {
	 id: number;
	 title: string;
	 body: string;
 }
