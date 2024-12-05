import { Component } from '@angular/core';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  standalone: false,

  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  constructor(
    private service: PensamentoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.service.buscarPorId(id).subscribe(
        (pensamento) => {
          this.pensamento = pensamento
        }
      )
    }

  }

  editarPensamento(){
    this.service.editar(this.pensamento).subscribe(
      ()=>{
        this.router.navigate(['/'])
      }
    )
  }

  voltarParaHome(){
    this.router.navigate(['/']);
}
}
