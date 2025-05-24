Feature: Consulta de guias

    @ConsultaGuias
    Scenario Outline: consulta de guias para diferentes paises
        Given que cree una guia para colombia o para mexico
        And quiero consultar la informacion de la guia creada
        When envie la peticion al servicio
        Then debo poder ver el pais asociado a la guia y el <statusCode>
        Examples:
            | statusCode |
            | 200        |

    @ConsultaGuias
    Scenario Outline: consulta de guia que no existe
        Given que voy a utlizar el microservicio de consulta de guias en test
        When envie la peticion al servicio de consulta con un numero de guia que no existe
        Then el sistema hara ka consulta y traera un <statusCode> pero sin nada de informacion
        Examples:
            | statusCode |
            | 200        |

    @ConsultaGuias
    Scenario Outline: consulta del nivel de servicio de la guia
        Given que cree una guia con nivel de servicio 22
        And quiero consultar la informacion de la guia que se creo
        When envie la peticion al servicio de consulta
        Then debo poder ver el nivel de servicio en la informacion de la guia y el <statusCode>
        Examples:
            | statusCode |
            | 200        |