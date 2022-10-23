import { Component, OnInit } from "@angular/core";


@Component({
    selector : "app-porducts",
    templateUrl : "./products.component.html",
    styleUrls:['./products.component.scss']
})

export class ProductsComponet implements OnInit{
    public productSatus:string = "No product is Added !!!"
    public isDisabled:boolean = true;
    public noofProductAdded:number =0;
    public productSearch:string = "";
    constructor(){

    }
    ngOnInit(): void {
        setTimeout(()=>{
            this.isDisabled = !this.isDisabled
        },3000)  
    }
    getNewProductStatus(){
        this.noofProductAdded++
        this.productSatus = `${this.noofProductAdded} Product is Added ${this.productSearch}` ;

    }
    onproductSearch(eve:Event){
        // console.log(eve.target.value);
        let targetValue = (<HTMLInputElement>(eve.target)!).value;
        this.productSearch = targetValue;
        console.log(targetValue);
        
    }
}