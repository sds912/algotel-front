import { Availability } from './availability';
import { Room } from './room';
import { Hotel } from './hotel';
export interface Post {
  uid:          string;
  label:        string,
  price:        number,
  desc:         string;
  images:       string[];
  createdAt:    string;
  hotel:        Hotel;
  availability: Availability[];
  room:         Room
}
