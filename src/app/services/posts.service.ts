import { Search } from 'src/app/models/search';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Post } from '../models/post';

const postPath: string = "posts";


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

   findByFilter(param: Search){
    var postCollection: AngularFirestoreCollection<Post> = this.firestore.collection<Post>(postPath, ref => {
     if(param.address != null) ref.where('address', '==', param.address)
     if(param.date    != null) ref.where('from',    '==', param.date)
     if(param.label   != null) ref.where('label',   '==', param.label)
     if(param.label   != null) ref.where('label',   '==', param.label)
      return ref;
    });

    return postCollection.valueChanges();
   }


   delete(uid: string){
    return this.firestore.collection(postPath).doc(uid).delete();
   }



}
