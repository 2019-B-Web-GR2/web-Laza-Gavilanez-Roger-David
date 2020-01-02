import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsuarioEntity} from './usuario/usuario.entity';
import {UsuarioModule} from './usuario/usuario.module';
import {UsuarioService} from './usuario/usuario.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'mysql',
      host: 'localhost',
      port: 32802,
      username: 'root',
      password: '1234',
      database: 'prueba',
      dropSchema: true,
      entities: [
        UsuarioEntity,
      ],
      synchronize: true, // Con esto se crea en la base de datos
    }),
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // @ts-ignore
  constructor(
      // tslint:disable-next-line:variable-name
      private _usuarioService: UsuarioService,
  ) {
    const usuarioPromesa = this._usuarioService.encontrarUno(1);
    // tslint:disable-next-line:no-console
    console.log(usuarioPromesa);
  }
}
