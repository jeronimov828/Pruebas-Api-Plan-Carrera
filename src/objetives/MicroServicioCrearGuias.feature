Feature: Creacion de una guia con RCE

    @crearGuia
    Scenario Outline: Creacion de guia exitosa
        Given que tengo el microservicio de creacion de guias
        When al realizar la peticion
        Then el servicio debe responder con <statusCode> y <isError>
        Examples:
            | statusCode | isError |
            | 200        | "false" |