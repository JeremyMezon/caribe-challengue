import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor(/*private router: Router*/) { }

  ngOnInit(): void {
  }

  // onSearch(value: string){
  //   if(value){
  //     this.router.navigate(['/Lista'],{
  //       queryParams: {q: value},
  //     });
  //   }
  // }

}
