import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  InternalServerErrorException,
  Post,
  Put,
  Query, Res,
} from '@nestjs/common';
import {AppService} from './app.service';
import {isEmpty} from 'rxjs/operators';

@Controller('pepito')
export class AppController {
  constructor(private readonly appService: AppService) {}
  valor: number = 100;
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('login')
  login(
      @Res() res,
  ) {
    res.render('login/login');
  }

  // DEBER CALCULADORA------------------------------------------------------------------------------------
  // SUMA CON METODO HEADERS
  @Get('suma')
  @HttpCode(200)
  sumDosnumeros(
      @Headers() cabeceras,
      @Headers('primernumero') primerNumero: number,
      @Headers('segundonumero') segundoNumero: number,
  ) {
    // tslint:disable-next-line:no-console
    console.log(cabeceras);
    // tslint:disable-next-line:radix
    const suma = parseInt(String(primerNumero)) + parseInt(String(segundoNumero));
    // return `La suma es: ${suma}`;
    this.valor = this.valor - suma;
    if (this.valor >= 0) {
      return `La suma es: ${suma} Valor global ${this.valor}  `;
    } else {
      this.valor = 100;
      return `La suma es: ${suma} \nEste valor pasa Valor global \n reiniciando variable..... ${this.valor}  `;
    }
  }
  // Resta de dos Numeros
  @Post('resta')
  @HttpCode(201)
  restaDosnumeros(
      @Body() parametrosNumeros: numeros,
  ) {
    // tslint:disable-next-line:no-console
    console.log(parametrosNumeros);
    // tslint:disable-next-line:radix
    const resta = parseInt(String(parametrosNumeros.primernumero)) - parseInt(String(parametrosNumeros.segundonumero));
    // tslint:disable-next-line:max-line-length
    // return `Se Resta el segundo numero \n Primer Numero: ${parametrosNumeros.numerouno} Segundo Numero ${parametrosNumeros.numerodos} La Resta es: ${resta}`;
    this.valor = this.valor - resta;
    if (this.valor >= 0) {
      return `La Resta es: ${resta} Valor global ${this.valor}  `;
    } else {
      this.valor = 100;
      return `La Resta es: ${resta} \nEste valor pasa Valor global \n reiniciando variable..... ${this.valor}  `;
    }
  }
  // Multiplicacion
  @Put('multiplicacion')
  @HttpCode(202)
  multiplicacionDosnumeros(
      @Query() parametrosDeConsulta: ObjetoNumeros,
      @Query('primernumero') primernumero: number,
      @Query('segundonumero') segundonumero: number,
  ): string {
    // tslint:disable-next-line:no-console
    console.log(parametrosDeConsulta);
    // tslint:disable-next-line:radix
    const multiplicar = parseInt(String(parametrosDeConsulta.primernumero)) * parseInt(String(parametrosDeConsulta.segundonumero));
    // tslint:disable-next-line:no-console max-line-length
    // return `Primer Numero: ${parametrosDeConsulta.primernumero} Segundo Numero: ${parametrosDeConsulta.segundonumero}\n Resultado ${multiplicar}`;
    this.valor = this.valor - multiplicar;
    if (this.valor >= 0) {
      return `La multiplicacion es: ${multiplicar} Valor global ${this.valor}  `;
    } else {
      this.valor = 100;
      return `La multiplicacion es: ${multiplicar} \nEste valor pasa Valor global \n reiniciando variable..... ${this.valor}  `;
    }
  }
  @Delete('division')
  @HttpCode(203)
  divisionDosnumeros(
      @Query() parametrosDeConsulta: ObjetoNumeros,
      @Query('primernumero') primernumero: number,
      @Query('segundonumero') segundonumero: number,
      @Headers() cabeceras,
      @Headers('primernumero') primerNumero: number,
      @Headers('segundonumero') segundoNumero: number,
      @Body() parametrosNumeros: numero,
  ): string {
    // tslint:disable-next-line:no-console
    console.log(parametrosDeConsulta);
    // tslint:disable-next-line:no-console
    console.log(cabeceras);
    // tslint:disable-next-line:no-console
    console.log(parametrosNumeros);
    // tslint:disable-next-line:radix
    const divisionQuery = parseInt(String(parametrosDeConsulta.primernumero)) / parseInt(String(parametrosDeConsulta.segundonumero));
    // tslint:disable-next-line:radix
    const divisionHeaders = parseInt(String(cabeceras.primernumero)) / parseInt(String(cabeceras.segundonumero));
    // tslint:disable-next-line:radix
    const divisionBody = parseInt(String(parametrosNumeros.primernumero)) / parseInt(String(parametrosNumeros.segundonumero));
    // tslint:disable-next-line:max-line-length
    //  return `Division Query:\n Primer Numero: ${parametrosDeConsulta.primernumero} Segundo Numero: ${parametrosDeConsulta.segundonumero} Resultado ${divisionQuery} \n
    // Division Headers \n Primer Numero ${cabeceras.primernumero} Segundo Numero ${cabeceras.segundonumero} Resultado ${divisionHeaders} \n
// Division Body\n  Primer Numero: ${parametrosNumeros.primernumero} Segundo Numero ${parametrosNumeros.segundonumero} Resultado:${divisionBody}`;
    let division = 0;
    // tslint:disable-next-line:triple-equals use-isnan
    if (divisionBody !=  NaN) {
      division = divisionBody;
      // return `La division es: ${division} \nEste valor pasa Valor global \n reiniciando variable..... ${this.valor}  `;
    }
    // tslint:disable-next-line:triple-equals use-isnan
    if (divisionQuery !=  NaN) {
      division = divisionQuery;
      // return `La division es: ${division} \nEste valor pasa Valor global \n reiniciando variable..... ${this.valor}  `;
    }
    // tslint:disable-next-line:triple-equals use-isnan
    if (divisionHeaders !=  NaN) {
      division = divisionHeaders;
      // return `La division es: ${division} \nEste valor pasa Valor global \n reiniciando variable..... ${this.valor}  `;
    }
    // tslint:disable-next-line:triple-equals
    this.valor = this.valor - division;
    if (this.valor >= 0) {
      return `La division es: ${division} Valor global ${this.valor}  `;
    } else {
      this.valor = 100;
      return `La division es: ${division} \nEste valor pasa Valor global \n reiniciando variable..... ${this.valor}  `;
    }
  }
  // FIN DE DE DEBER---------------------------------------------------------------------------------------------------------------------------
}
// tslint:disable-next-line:class-name
interface valorcien {
  valor?: number;
}
interface ObjetoNumeros {
  primernumero?: number;
  segundonumero?: number;
}
interface ObjetoBienvenida {
  nombre?: string;
  tel?: string;
  civil?: string;
}
// tslint:disable-next-line:class-name
interface numero {
  primernumero?: number;
  segundonumero?: number;
}
// tslint:disable-next-line:class-name
interface numeros {
  primernumero?: number;
  segundonumero?: number;
}
