import { Hotel } from './hotel';
export interface Post {
  uid:         string;
  label:       string,
  price:       number,
  desc:        string;
  images:      string[];
  createdAt:   string;
  avDate:      string;
  hotel:       Hotel;
  availability: any[];
}
