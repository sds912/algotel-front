import { OrderSatus } from './../../utils/orderSatus';
import { Order } from './../../models/order';
import { OrderService } from './../../services/order.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './../../services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { PostsService } from './../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from './../../models/post';
import { Component, OnInit } from '@angular/core';
import { share } from 'rxjs';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post!: Post;
  order: Order = {
    createdAt:   "",
    customerUid: "",
    postUid:     "",
    uid:         "",
    paymentMode: "",
    status: 'PENDINg'



  };

  constructor(
    private route: ActivatedRoute,
    private loader: LoaderService,
    private router: Router,
    private auth: Auth,
    private orderService: OrderService,
    private postService: PostsService) { }

  ngOnInit(): void {
    this.getPost();
  }


  getPost(){
    this.loader.show();
    this.route.params.subscribe( params => {
      this.postService.findPostById(params['id']).subscribe((d:any) => {
        this.post = d.data();
        this.loader.hide();
      })
    });
  }

  navigate(){

    if(this.auth.currentUser != null && !this.auth.currentUser?.isAnonymous){

      this.order.customerUid = this.auth.currentUser.uid;
      this.order.postUid =     this.post.uid;
      this.order.status =      "PENDING";
      this.order.createdAt = Date.now().toString();
      this.orderService.saveOrder(this.order).then(res => {
      this.router.navigate(['paiement',this.auth.currentUser?.uid])
      })


    }else{
      this.router.navigate(['login-or-register'])

    }
  }

}
