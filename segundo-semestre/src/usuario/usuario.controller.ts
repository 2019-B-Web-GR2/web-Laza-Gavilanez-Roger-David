import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UsuarioService} from "./usuario.service";
import {UsuarioEntity} from "./usuario.entity";
import {DeleteResult} from "typeorm";

@Controller('usuario')
export class UsuarioController {
    constructor(
        // tslint:disable-next-line:variable-name
        private readonly _usuarioService: UsuarioService,
    ) {
    }
    @Get(':id')
    hola(
        @Param('id') identificador: string,
    ): Promise<UsuarioEntity | undefined> {
        return this._usuarioService.encontrarUno(Number(identificador));
    }
    @Put(':id')
    actualizarUnUsuario(
        @Body() usuario: UsuarioEntity,
        @Param('id') id: string,
    ): Promise<UsuarioEntity>  {
        return this._usuarioService
            .actualizarUno(
                +id,
                usuario,
            );
    }
    @Post()
    crearUsuario(
        @Body() usuario: UsuarioEntity,
    ) {
        // return this._usuarioService.encontrarUno(usuario);
    }
    @Delete(':id')
    eliminarUno(
        @Param('id') id: string,
    ): Promise<DeleteResult>{
        return this._usuarioService
            .borrarUno(
                +id,
            );
    }
}
