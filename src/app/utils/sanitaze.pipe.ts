import { Pipe} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitaze'
})
export class SanitazePipe {

  constructor (private sanitizer: DomSanitizer){

  }

  transform(value: string): SafeHtml {
     return this.sanitizer.bypassSecurityTrustHtml(value);

  }

}
