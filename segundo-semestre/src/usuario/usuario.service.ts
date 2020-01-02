import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult, Equal, LessThan, Like, MoreThan, Repository} from 'typeorm';
import {UsuarioEntity} from './usuario.entity';

@Injectable()
export class UsuarioService {
    // @ts-ignore
    constructor(
        @InjectRepository(UsuarioEntity) // inyectar dpendencias
        // tslint:disable-next-line:variable-name
        private _repositorioUsuario: Repository<UsuarioEntity>,
    ) {
    }

    encontrarUno(id: number): Promise<UsuarioEntity | undefined> {
        // tslint:disable-next-line:no-console
        console.log('Empeso');
        const usuario = this._repositorioUsuario.findOne(id);
        return usuario;
    }

    borrarUno(id: number): Promise<DeleteResult> {
        // tslint:disable-next-line:no-unused-expression
        return this._repositorioUsuario.delete(id);
    }

    actualizarUno(id: number,
                  usuario: UsuarioEntity,
    ): Promise<UsuarioEntity | undefined> {
        // tslint:disable-next-line:no-unused-expression
        usuario.id = id;
        return this._repositorioUsuario.save(usuario);
    }

    buscar(where: any = {}, skip: number = 0, take: number = 10, order: any = {
        id: 'DESC',
        nombre: 'ASC',
    }): Promise<UsuarioEntity[]> {

        // Exactamente el nombre o Exactamente la cedula
        const consultaWhere = [
            {
                nombre: '',
            },
            {
                cedula: '',
            },
        ];
        // Exactamente el nombre o Exactamente la cedula
        const consultaWhereLike = [
            {
                nombre: Like('%a%a'),
            },
            {
                cedula: Like('%a%a'),
            },
        ];
        // Exactamente el nombre o Exactamente la cedula
        const consultaWhereMoreThan = [
            {
                id: MoreThan(20),
            }];
        // Exactamente el nombre o Exactamente la cedula
        const consultaWhereLessThan = [
            {
                id: LessThan(20),
            },
        ];
        const consultaWhereEqual = [
            {
                id: Equal(20),
            },
        ];
        return this._repositorioUsuario.find({
            where: consultaWhere,
            skip,
            take,
            order,
        });

    }
}
