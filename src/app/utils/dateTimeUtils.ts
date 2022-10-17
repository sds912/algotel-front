class DateTimeUtils{

  isDatesEqual(a: string, b: string ): boolean{
    var d1 = new Date(a);
    var d2 = new Date(b);
   return d1.getTime() === d2.getTime();
  }

  isDateAHigher(a: string, b: string ): boolean{
    var d1 = new Date(a);
    var d2 = new Date(b);
    return  d1.getTime() > d2.getTime();
  }


  idTmesEqual(a: string, b: string): boolean{
   return new Date ('1/1/1999 ' + a) == new Date ('1/1/1999 ' + b) ;

  }

  idTmeAHigher(a: string, b: string): boolean{
    return new Date ('1/1/1999 ' + a) > new Date ('1/1/1999 ' + b) ;

   }


}
