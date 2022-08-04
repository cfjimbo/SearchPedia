import { Component, ViewChild, OnInit } from '@angular/core';
import { SearchService } from "src/app/infraestructure/search.service";

@Component({
  selector: 'app-proyect-rdf-search',
  templateUrl: './proyect-rdf-search.page.html',
  styleUrls: ['./proyect-rdf-search.page.scss'],
})
export class ProyectRdfSearchPage implements OnInit {
  
  //@ViewChild('content', {static: false}) content;
  // search!:any
  // searchlist:any[]=[]
  constructor(
    // public searchMService : SearchService,
  ) { }
  
  // setFocus(){
  //   this.content.scrollToBottom(300);
  // }

  // ionViewDidEnter(){
  //   this.setFocus();
  // }

  ngOnInit() {
    // this.searchMService.getAllSearch().subscribe(
    //   result => {
    //     this.search = result[0]
    //     this.searchlist = result
    //     console.log(this.search)
    //   }
    // )
  }
  
  buscar( event ){
    console.log(event);
  }
}
