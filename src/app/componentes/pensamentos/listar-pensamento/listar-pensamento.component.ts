import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  standalone: false,

  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent  implements OnInit{
  listaPensamentos: Pensamento[] = [];
  constructor(private service: PensamentoService){

  }
  ngOnInit(): void {
    this.listarPensamento();
  }

  listarPensamento(){
    this.service.listar().subscribe(
      (listaPensamentos) => {
        console.log(listaPensamentos)
        this.listaPensamentos = listaPensamentos;
      }
    )
  }

}
