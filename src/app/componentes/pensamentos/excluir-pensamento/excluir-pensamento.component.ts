import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../pensamento/pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: false,

  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento:Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ){}
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id');
    if(id){
      this.service.buscarPorId(id).subscribe(
        (pensamento) =>{
          this.pensamento = pensamento;
      })
    }

  }

  excluir(){
    if(this.pensamento.id){
      this.service.excluir(this.pensamento.id).subscribe(
        () => {
          this.router.navigate(['/'])
        }
      )
    }

  }

  cancelar(){
    this.router.navigate(['/'])
  }
}
