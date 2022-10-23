import { Component, OnInit } from "@angular/core";

@Component({
  selector :"app-product",
  templateUrl:"./product.component.html",
  styleUrls : ['./product.component.scss']  
})

export class ProductComponent implements OnInit{
    public productname : string = "Samsung";
    public producId : number = 123;
    public isproductAvaible!: boolean;
    constructor(){

    }

    ngOnInit(): void {
       this.isproductAvaible = (Math.random() > .5) ? true : false
    }

    getproductValue(){
        return this.productname;
    }

    getBgColor(){
      // if(this.isproductAvaible===true){
      //   return 'orange'
      // }else{
      //   return '#ccc'
      // }
      return this.isproductAvaible ? 'orange' : '#ccc'
    }

}
