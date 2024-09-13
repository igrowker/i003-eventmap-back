import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value);

    const num = parseInt(value.age.toString(),10);

    if (isNaN(num)) {
      throw new HttpException('el valor debe ser un numero',HttpStatus.BAD_REQUEST);
    }

    return {...value, age : num};
  }
}
