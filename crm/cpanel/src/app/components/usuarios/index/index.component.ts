import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent {
  public filtro = '';
  public usuarios: Array<any> = [];

  constructor(private _usuarioService: UsuarioService) {}

  ngOninit() {
    this.init_data('Todos');
  }

  init_data(filtro: any) {
    this._usuarioService.getUsuarios(filtro).subscribe((response) => {
      this.usuarios = response;
    });
  }
}
