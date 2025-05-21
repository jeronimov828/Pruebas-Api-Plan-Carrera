export interface PostCrearGuias {
    identificacion: string,
    divisionCliente: string,
    idProceso: number,
    codigoPais: number,
    valoracion: string,
    tipoCuenta: number,
    contenido: string,
    codigoProducto: string,
    nivelServicio: number,
    detalle: [
        {
            pesoReal: number,
            largo: number,
            ancho: number,
            alto: number,
            unidades: number,
            ubl: number,
            referencia: string
        }
    ],
    datosRemitente: {
        identificacion: string,
        detalleRemitente: string,
        tipoViaRemitente: string,
        viaRemitente: string,
        numeroRemitente: string,
        codigoCiudadRemitente: string,
        descripcionTipoViaRemitente: string,
        direccionRemitente: string,
        nombreRemitente: string,
        indicativoRemitente: string,
        celularRemitente: string,
        correoRemitente: string
    },
    datosDestinatario: {
        identificacion: string,
        detalleDestinatario: string,
        tipoViaDestinatario: string,
        viaDestinatario: string,
        numeroDestinatario: string,
        descripcionTipoViaDestinatario: string,
        direccionDestinatario: string,
        codigoCiudadDestinatario: string,
        nombreDestinatario: string,
        indicativoDestinatario: string,
        celularDestinatario: string,
        correoDestinatario: string
    },
    valorRecaudar: string,
    referenciaRecaudo: string,
    tipoGuia: number,
    referenciaGuia: string,
    usuario: string,
    fuente: string,
    observaciones: string

}