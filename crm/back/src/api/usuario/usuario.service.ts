import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
  constructor(@InjectModel('usuario') private usuarioModel) {}

  async createUsuario(data: any) {
    try {
      const _usuarios = await this.usuarioModel.find({ email: data.email });

      if (_usuarios.length >= 1) {
        return {
          data: undefined,
          message: 'El correo electrónico esta en uso.',
        };
      } else {
        var salt = await bcrypt.genSalt(10);
        var hash = await bcrypt.hash('123456', salt);

        data.password = hash;
        const usuario = await this.usuarioModel.create(data);
        return usuario;
      }
    } catch (error) {
      console.log(error);
      return { data: undefined, message: 'No se pudo crear el usuario.' };
    }
  }

  async getUsuarios(filtro: any) {
    try {
      var usuarios = [];
      if (filtro == 'Todos') {
        usuarios = await this.usuarioModel.find().sort({ createdAt: -1 });
      } else {
        usuarios = await this.usuarioModel
          .find({
            $or: [
              { nombres: new RegExp(filtro, 'i') },
              { apellidos: new RegExp(filtro, 'i') },
              { email: new RegExp(filtro, 'i') },
            ],
          })
          .sort({ createdAt: -1 });
      }
    } catch (error) {
      return { data: undefined, message: 'No se pudo obtener los usuario.' };
    }
  }
}
