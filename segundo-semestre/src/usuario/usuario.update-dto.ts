import {IsEmpty, IsNotEmpty, IsString, MaxLength, MinLength} from "class-validator";

export class UsuarioUpdateDto{
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    @MaxLength(80)
    nombre: string;
    @IsEmpty()
    cedula: string
}
