export interface GuiaDetalle {
  pesoReal: number;
  largo: number;
  ancho: number;
  alto: number;
  unidades: number;
  ubl: number;
  referencia: string;
  valorDeclarado?: number;
  idContenido?: number;
}

export interface datosRemitente {
  identificacionRemitente?: string;
  divisionRemitente?: string;
  tipoDocumentoRemitente?: string;
  detalleRemitente: string;
  viaRemitente: string;
  tipoViaRemitente: string;
  numeroRemitente: string;
  codigoCiudadRemitente: string;
  descripcionTipoViaRemitente: string;
  direccionRemitente: string;
  nombreRemitente: string;
  indicativoRemitente: string;
  celularRemitente: string;
  correoRemitente: string;
  otraDireccionRemitente?: string;
  codigoPostalRemitente?: string;
}

export interface datosDestinatario {
  identificacionDestinatario?: string;
  divisionDestinatario?: string;
  tipoDocumentoDestinatario?: string;
  detalleDestinatario: string;
  tipoViaDestinatario: string;
  viaDestinatario: string;
  numeroDestinatario: string;
  descripcionTipoViaDestinatario: string;
  direccionDestinatario: string;
  codigoCiudadDestinatario: string;
  nombreDestinatario: string;
  indicativoDestinatario: string;
  celularDestinatario: string;
  correoDestinatario: string;
  otraDireccionDestinatario?: string;
  codigoPostalDestinatario?: string;
}

export interface PostCrearGuiaBase {
  identificacion: string;
  divisionCliente: string;
  idProceso: number;
  codigoPais: number;
  valoracion: string;
  tipoCuenta: number;
  contenido: string;
  codigoProducto?: number;
  nivelServicio: number;
  detalle: GuiaDetalle[];
  datosRemitente: datosRemitente;
  datosDestinatario: datosDestinatario;
  valorRecaudar?: string;
  referenciaRecaudo?: string;
  tipoGuia: number;
  referenciaGuia: string;
  usuario: string;
  fuente: string;
  observaciones?: string;
  tipoProducto?: string;
  quienPagaEnvio?: string;
  tipoEnvioEspecial?: boolean;
}