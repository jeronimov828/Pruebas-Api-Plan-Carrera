import { PostCrearGuiaBase } from "./apiActor_body";

export const generarGuiaValida = (
  overrides: Record<string, any> = {}
): any => ({
  identificacion: "890904713",
  divisionCliente: "00",
  idProceso: 100001,
  codigoPais: 170,
  valoracion: "200000",
  tipoCuenta: 3,
  contenido: "reloj",
  codigoProducto: 1,
  nivelServicio: 22,
  detalle: [
    {
      pesoReal: 1,
      largo: 5,
      ancho: 5,
      alto: 3,
      unidades: 1,
      ubl: 0,
      referencia: "a",
    },
  ],
  datosRemitente: {
    detalleRemitente: "Casa",
    tipoViaRemitente: "7",
    viaRemitente: "15",
    numeroRemitente: "53 48",
    codigoCiudadRemitente: "05001000",
    descripcionTipoViaRemitente: "Calle",
    direccionRemitente: "Calle 53 # 53 48",
    nombreRemitente: "Remitente Prueba",
    indicativoRemitente: "57",
    celularRemitente: "3007876543",
    correoRemitente: "pruebaremitente@coo.com",
  },
  datosDestinatario: {
    detalleDestinatario: "Casa",
    tipoViaDestinatario: "5",
    viaDestinatario: "15",
    numeroDestinatario: "45 93",
    descripcionTipoViaDestinatario: "Calle",
    direccionDestinatario: "calle 45 93",
    codigoCiudadDestinatario: "05001000",
    nombreDestinatario: "Destinatario Prueba",
    indicativoDestinatario: "57",
    celularDestinatario: "3216549825",
    correoDestinatario: "pruebadestinatario@coor.com",
  },
  valorRecaudar: "38500",
  referenciaRecaudo: "ref recaudo prueba",
  tipoGuia: 1,
  referenciaGuia: "a",
  usuario: "prueba@coordinaora.com",
  fuente: "envios",
  observaciones: "prueba RCE",
  ...overrides,
});

export class BodyPostICrearGuias {
  private readonly bodyPostICrearGuias: PostCrearGuiaBase;

  constructor(overrides = {}) {
    this.bodyPostICrearGuias = generarGuiaValida(overrides);
  }

  toJSON(): string {
    return JSON.stringify(this.bodyPostICrearGuias);
  }
}
