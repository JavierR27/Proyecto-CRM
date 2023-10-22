import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Controller()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('createUsuario')
  async createUsuario(@Res() res, @Req() req) {
    const data = req.body;
    const usuario = await this.usuarioService.createUsuario(data);
    res.status(200).send(usuario);
  }

  @Get('getUsuarios/:filtro')
  async getUsuarios(@Res() res, @Req() req, @Param('filtro') filtro: any) {
    const usuarios = await this.usuarioService.getUsuarios(filtro);
    res.status(200).send(usuarios);
  }
}
