import { OrderSatus } from './../utils/orderSatus';
export interface Order {
  uid?: string;
  postUid?: string;
  customerUid?: string;
  createdAt?: string;
  paymentMode?: string;
  status?: string;
}
