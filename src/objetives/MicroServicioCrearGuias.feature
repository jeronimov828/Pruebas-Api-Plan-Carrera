Feature: Creacion de una guia con RCE

    @crearGuia
    Scenario Outline: Creacion de guia exitosa
        Given que tengo el microservicio de creación de guías
        And tengo el cuerpo de la solicitud armado correctamente
        When envié la petición
        Then debo poder ver la respuesta de la petición y un <statusCode>
        And la información del numero de la guía creada

        Examples:
            | statusCode |
            | 200        |


    @crearGuia
    Scenario Outline: intento de creación de la guía con exceso en el valor a recaudar
        Given que tengo el microservicio de creación de guías listo
        And tengo el cuerpo de la solicitud armado con exceso en el valor a recaudar
        When envié la petición con el error
        Then debo poder ver la respuesta de la petición con un <statusCode>
        And un mensaje informativo con <message>

        Examples:
            | statusCode | message                                    |
            | 400        | "Los valores de entrada no son correctos." |


    @crearGuia
    Scenario Outline: intento de creación de la guía con exceso de caracteres en el campo referencia
        Given que tengo el microservicio que se utliza para crear las guias
        And tengo el cuerpo de la solicitud armado con exceso en el valor del campo referencia
        When envié la petición al servicio
        Then me debe responder con un <statusCode>
        And un mensaje de error con la <cause>

        Examples:
            | statusCode | cause                                                                        |
            | 400        | "El campo referenciaRecaudo excede la cantidad de caracteres permitidos, 30" |


    @crearGuia
    Scenario Outline: intento de creación de la guía con campo Referencia de recaudo vacío
        Given que quiero utilizar el microservicio de creacion de guias
        And tengo el cuerpo de la solicitud armado con el campo Referencia de recaudo vacio
        When envié la petición con el campo vacio al microservicio
        Then me debe devolver la respuesta a la peticion con un <statusCode>
        And un mensaje con <cause>

        Examples:
            | statusCode | cause                                             |
            | 400        | "El campo referenciaRecaudo no puede estar vacío" |


    @crearGuia
    Scenario Outline: intento de creación de la guía con campo valor a recaudar vacío
        Given que tengo disponible el microservicio de creación de guías
        And tengo el cuerpo de la solicitud armado con el campo valor a recaudar vacío
        When envié la petición para este microservicio
        Then debo poder ver en la respuesta de la petición un error con un <statusCode>
        And un mensaje informativo que me informa que <cause>

        Examples:
            | statusCode | cause                                       |
            | 400        | "El campo valorRecaudar debe ser un número" |


    @crearGuia
    Scenario Outline: creacion de guia con valores aleatorios en el detalle
        Given que tengo el microservicio que se utliza para la creacion de guias en test
        And genere el cuerpo de la peticion con valores aleatorios en el detalle
        When haga el envió de la petición para crear
        Then debo poder ver en la respuesta de la solicitud un <statusCode>
        And tambien debo poder ver como se crean guias diferentes ubl

        Examples:
            | statusCode |
            | 200        |


    @crearGuia
    Scenario Outline: creacion de guia sin campos opcionales
        Given que tengo el microservicio que se utliza para el proceso de creacion de guias en test
        And genere el cuerpo de la peticion sin campos opcionaless
        When haga el envió de la petición para crear la guia
        Then en la respuesta que devuelve un <statusCode>
        And el numero de la guia creada

        Examples:
            | statusCode |
            | 200        |


    @crearGuia
    Scenario Outline: manejo de caracteres especiales
        Given que voy a utlizar el microservicio para crear guias
        And genere el cuerpo de la peticion con caracteres no permiticos dentro del campo referencia
        When se envie la peticion para crear una guia
        Then debe salir un error con <statusCode>
        And el mensaje que describe el error <message>

        Examples:
            | statusCode | message                                    |
            | 400        | "Los valores de entrada no son correctos." |

    @crearGuia
    Scenario Outline: creacion de guia para diferntes paises
        Given que voy a utlizar el microservicio que me sirve para crear guias desde test
        And genere el cuerpo de la peticion con valores tanto para colombia como para mexico
        When se haga el envio de la solicitud para crear la guia
        Then debe crearse la guia y devolver un <statusCode>
        And el mensaje indicando cual es el numero de la guia que se creo

        Examples:
            | statusCode |
            | 200        |


    @crearGuia
    Scenario Outline: intento de creación de la guía omitiendo un campo obligatorio
        Given que voy a usar el microservicio de creación de guías
        And el cuerpo de la solicitud no incluye el campo obligatorio
        When se envía la solicitud
        Then la respuesta debe ser un error con <statusCode>
        And un mensaje de error con <message>

        Examples:
            | statusCode | message                                    |
            | 400        | "Los valores de entrada no son correctos." |


    @crearGuia
    Scenario Outline: intento de creación con tipo de dato incorrecto
        Given que tengo el cuerpo de la solicitud con un campo con tipo incorrecto
        When se envía la petición
        Then obtengo un <statusCode>
        And un mensaje indicando el error de tipo <cause>

        Examples:
            | statusCode | cause                                       |
            | 400        | "El campo valorRecaudar debe ser un número" |


    @crearGuia
    Scenario Outline: intento de creación con cuerpo vacío
        Given que no envío ningún cuerpo en la solicitud
        When realizo la petición al microservicio
        Then debo obtener un <statusCode>
        And un mensaje indicando <message>

        Examples:
            | statusCode | message                                    |
            | 400        | "Los valores de entrada no son correctos." |