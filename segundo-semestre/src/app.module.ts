import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsuarioEntity} from "./usuario/usuario.entity";
import {UsuarioModule} from "./usuario/usuario.module";
import {UsuarioService} from "./usuario/usuario.service";
import {TypeOrmModule} from "@nestjs/typeorm";


@Module({
  imports: [
    UsuarioModule,
    TypeOrmModule.forRoot(
        {
          name: 'default', // Nombre cadena de Conex.
          type: 'mysql',
          host: 'localhost',
          port: 32779,
          username: 'roger',
          password: '1234',
          database: 'prueba',
          dropSchema: true, // si ponemos falso no se borran los datos en la base 
          entities: [
            UsuarioEntity
          ],
          synchronize: true, // Crear -> true , Conectar -> false
        }
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
      private _usuarioService: UsuarioService,
  ) {

  }
}
