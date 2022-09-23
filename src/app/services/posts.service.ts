import { Search } from 'src/app/models/search';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Post } from '../models/post';

const postPath: string = "posts";
const bottomCarousel: string ="bottom-carousel";


@Injectable({
  providedIn: 'root'
})
export class PostsService {


  constructor(private firestore: AngularFirestore, private httpClient: HttpClient) {


  }

  initPost(){
    this.httpClient.get("assets/post-init-data.json").subscribe((data: any) =>{
      data.map((d: any)  => {
         this.savePost(d);
      })
    })
  }

  findBottomCarousel(){
    return this.firestore.collection(bottomCarousel).get();
  }


   savePost(post: Post){
    return this.firestore.collection(postPath).add(post).then(res => {
      res.update({"uid": res.id})
    });
   }

   updatePost(post: Post){
     return this.firestore.collection(postPath).doc(post.uid).update(post);
    }



   findAllPosts(){
     var postCollection: AngularFirestoreCollection<Post> = this.firestore.collection<Post>(postPath);
     return postCollection.valueChanges();
   }

   findPostById(uid:string){
     return this.firestore.collection(postPath).doc(uid).get();
   }

   findByFilter(param: Search){
    console.log(param)
    var postCollection: AngularFirestoreCollection<Post> = this.firestore.collection<Post>(postPath, ref => {
      return ref.where('avDate',    '==', param.date).limit(10)
    });

    return postCollection.valueChanges();
   }


   delete(uid: string){
    return this.firestore.collection(postPath).doc(uid).delete();
   }



}
