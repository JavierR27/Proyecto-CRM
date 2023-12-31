import { Schema } from 'mongoose';

export const UsuarioSchema = new Schema({
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  estado: { type: Boolean, required: true },
  rol: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});
