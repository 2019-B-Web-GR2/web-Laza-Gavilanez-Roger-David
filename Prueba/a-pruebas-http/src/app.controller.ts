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
    Query,
} from '@nestjs/common';
import {AppService} from './app.service';
import {isEmpty} from "rxjs/operators";
// @ts-ignore
@Controller('pepito')  // Decorador   segmento url "/"
export class AppController {
    constructor(private readonly appService: AppService) {
    } // http://localhost:3000/pepito/hola-mundo
    valor: number = 100;
    @Get('Hola')
    getHello(): string {
        return this.appService.getHello();
    }

    @HttpCode(200)

    @Post()
    adiosMundo(): string {
        return 'Adios Mundo!';
    }

    @HttpCode(200)

    @Post('esPar')
    Par(): string {
        const segundos = this.obtenerSegundos();
        if (segundos % 2 === 0) {
            return 'Es par!';
        } else {
            throw new InternalServerErrorException(
                'Es impar',
            );
        }
    }

    private obtenerSegundos(): number {
        return new Date().getSeconds();
    }

    @Get('bienvenida')
    public bienvenida(
        @Query() parametrosDeConsulta: ObjetoBienvenida,
        @Query('nombre') nombre: string,
        @Query('tel') telUsuario: number,
        @Query('civil') casadoUsuario: boolean,
    ): string {
        // tslint:disable-next-line:no-console
        console.log(parametrosDeConsulta);
        // tslint:disable-next-line:no-console
        console.log(typeof telUsuario);
        // tslint:disable-next-line:no-console
        console.log(typeof casadoUsuario);
        // template strings `Mensaje ${variable}`
        return `Mensaje ${parametrosDeConsulta.nombre} Numero: ${parametrosDeConsulta.tel} `;
    }

    @Post('almorzar')
    @HttpCode(200)
    public almorzar(
        @Body() parametrosDeCuerpo: prueba,
        // @Body('id') id: number, // no puede hacer esto si recibes un array

    ): string {
        // tslint:disable-next-line:no-console
        console.log(parametrosDeCuerpo);
        return `Te inscribiste al curso: ${parametrosDeCuerpo.nombre}`;
    }
    @Get('obtener-cabeceras')
    obtenerCabeceras(
        @Headers() cabeceras,
        @Headers('numerouno') numeroUno: string,
    ) {
        // tslint:disable-next-line:no-console
        console.log(cabeceras);
        return `Las cabeceras son: ${numeroUno}`;
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
// Decorador   segmento url "/"
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
/*
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
*/
/*
// var nombre : string = "Fabricio" ; (este no utilizamos nunca!!!)
let apellido: string = "Alvear"; // Mutable:
const cedula: string = "172265"; // Inmutable OK

apellido = "Yanez"; // Re asignando  "=" Mutable
// cedula = "18"; // :(Inmutable - no reasignar)
const casado: boolean = false;
const edad: number = 30;
const sueldo: number = 12.12;
const hijos = null; // null
let ojos; // undefined

// TRUTY - FALSY

if (0) {
    console.log('Truty');
} else {
    console.log('False'); // Falsy
}

if (-1) {
    console.log('Truty'); // Truty
} else {
    console.log('False');
}

if (1) {
    console.log('Truty'); // Truty
} else {
    console.log('False');
}

if ("") {
    console.log('Truty');
} else {
    console.log('False'); // Falsy
}

if ("abc") {
    console.log('Truty'); // Truty
} else {
    console.log('False');
}

if ([]) {
    console.log('Truty'); // Truty
} else {
    console.log('False');
}

if ({}) {
    console.log('Truty'); // Truty
} else {
    console.log('False');
}

// Clases

class Usuario {
    public cedula: string = "17223";
    cedula2: string = "17223"; // public : string
    private holamundo(): void {
        console.log("Hola");
    }

    holamundo2() {
        console.log("Hola");
    }

    constructor(cedula: string) {
        this.cedula
    }
}

class Usuario2 {
    constructor(
        public nombre: string, // parametro requerido
        public apellido?: string, // parametro opcional
    ) {
    }
}

const fabricio = new Usuario2("Fabricio");
const fabricio = new Usuario2("Fabricio", "Alvear");

// Herencia

class Empleado extends Usuario2 {
    constructor(
        nombre: string,
        public  numeroContrato: string,
        apellido?: string
    ) {
        super(nombre, apellido);
    }

}

const empleadoFabricio = new Empleado("Fabricio", "1234");

interface Pelota {
  diametro:number;
  color?:string;
}

const balonFutbol : Pelota = {
  diametro: 1,
  color: "Azul",
  //peso: 12,
}

class Juego implements Pelota{
  diametro: number;
}

interface Entrenador{
  id: number;
  nombre: string;
}

interface Pokemon {
  id: number;
  nombre:string;
  entrenador: Entrenador | number; // Foreing key
}

const  ash: Entrenador = {
  id:1,
  nombre: 'Ash',
};

const pikachu: Pokemon = {
  id: 1,
  nombre: 'Pikachu',
  entrenador:1,
};

const suma = pikachu.entrenador as number + pikachu.id;
const suma2 = <number> pikachu.entrenador + pikachu.id;

*/

// tslint:disable-next-line:class-name
export interface prueba {
    nombre?: string;
}
