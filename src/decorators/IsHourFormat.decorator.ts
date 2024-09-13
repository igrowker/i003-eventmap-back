import { registerDecorator, ValidationOptions } from 'class-validator';
import { TimeValidator } from 'src/utils/utils';

/**
 * Decorador personalizado para validar si un valor tiene el formato de hora HH:mm:ss
 */
// Función externa: Define el decorador IsTime que recibe opcionalmente opciones de validación.
export function IsTime(format : string = 'HH:mm:ss',validationOptions?: ValidationOptions) {
    // Función interna: Retorna otra función que se ejecuta cuando se aplica el decorador a una propiedad.
    // Esta línea define una función anónima dentro de la función IsTime y la retorna. Esta función interna es la que realmente se ejecuta cuando se aplica el decorador @IsTime a una propiedad.
    return function (object: object, propertyName: string) {
        // registerDecorator: Registra el decorador con class-validator
        //osea es la forma de decirle a nest js tengo un nuevo tipo de validacion q quiero usar y aca te digo como funciona
        registerDecorator({
            name: 'isTime', // Nombre del decorador
            target: object.constructor, // Clase donde se aplica el decorador --> osea a la clase q se lo estas aplicando en este caso seria create-event.dto
            propertyName: propertyName, // Nombre de la propiedad a validar
            options: validationOptions, // Opciones de validación (opcional) (en este ejem no se usa)
            validator: TimeValidator, // Clase validadora
        });
    };
}

// object: object:
// Este parámetro representa el objeto (en realidad, una instancia de una clase) donde se está aplicando el decorador. En otras palabras, es la clase que contiene la propiedad que estamos decorando.
// Por ejemplo, si aplicas @IsTime() a la propiedad "time" de una clase Create-event.dto.ts, el parámetro object sería una instancia de Create-event.dto.
// object no es una instancia de la propiedad, sino una instancia de la clase donde se encuentra la propiedad

// propertyName: string:
// Este parámetro representa el nombre de la propiedad a la que se está aplicando el decorador --> "time"

// object: Nos permite acceder a información sobre la clase donde se está aplicando el decorador. Esto puede ser útil en algunos casos, aunque no es necesario en este ejemplo simple.
// propertyName: Es fundamental para identificar la propiedad que se está validando. Este nombre se utiliza dentro de registerDecorator para asociar el decorador con la propiedad específica.