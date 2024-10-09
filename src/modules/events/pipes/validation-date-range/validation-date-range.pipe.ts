import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { EventQuerys } from 'src/utils/types';
import { checkDateFormatQuery, checkTypeQuery } from 'src/utils/utils';

@Injectable()
export class ValidationDateRangePipe implements PipeTransform {
  transform(value: EventQuerys, metadata: ArgumentMetadata) {

    if (!checkTypeQuery(value.type) && !checkDateFormatQuery(value.startDate) && !checkDateFormatQuery(value.endDate)) {
      throw new HttpException('Los datos ingresados no son correctos o no cumplen con el formato esperado',HttpStatus.BAD_REQUEST);
    }
    
    return value;
  }
}
