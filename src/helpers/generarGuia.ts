import { faker } from "@faker-js/faker";

export const generarGuiaDiferentesPaises = (): {
  identificacion: string;
  divisionCliente: string;
  idProceso: number;
  codigoPais: number;
  valoracion: string;
  tipoCuenta: number;
  contenido: string;
  codigoProducto?: number; // opcional en caso de México
  nivelServicio: number;
  detalle: Array<{
    pesoReal: number;
    largo: number;
    ancho: number;
    alto: number;
    unidades: number;
    ubl: number;
    referencia: string;
    valorDeclarado?: number;
    idContenido?: number;
  }>;
  datosRemitente: {
    identificacionRemitente?: string;
    divisionRemitente?: string;
    tipoDocumentoRemitente?: string;
    detalleRemitente: string;
    tipoViaRemitente: string;
    viaRemitente: string;
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
  };
  datosDestinatario: {
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
  };
  valorRecaudar?: string;
  referenciaRecaudo?: string;
  tipoGuia: number;
  referenciaGuia: string;
  usuario: string;
  fuente: string;
  observaciones: string;
  tipoProducto?: string;
  quienPagaEnvio?: string;
  tipoEnvioEspecial?: boolean;
} => {
  const CODIGO_PAIS = [170, 484];
  const pais = faker.helpers.arrayElement(CODIGO_PAIS);

  switch (pais) {
    case 170:
      return {
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
            pesoReal: 90,
            largo: 5,
            ancho: 5,
            alto: 3,
            unidades: 1,
            ubl: 71,
            referencia: "r",
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
        valorRecaudar: "8737375",
        referenciaRecaudo: "r",
        tipoGuia: 1,
        referenciaGuia: "r",
        usuario: "prueba@coordinaora.com",
        fuente: "envios",
        observaciones: "prueba RCE",
      };
    case 484:
      return {
        identificacion: "890904710",
        divisionCliente: "00",
        idProceso: 100001,
        codigoPais: 484,
        valoracion: "1500",
        tipoCuenta: 6,
        contenido: "Zapatos",
        nivelServicio: 1,
        detalle: [
          {
            unidades: 1,
            pesoReal: 32,
            largo: 10,
            alto: 10,
            ancho: 100,
            ubl: 1,
            referencia: "",
            valorDeclarado: 1000,
            idContenido: 503,
          },
        ],
        datosRemitente: {
          identificacionRemitente: "52097998",
          divisionRemitente: "01",
          tipoDocumentoRemitente: "13",
          detalleRemitente: "",
          viaRemitente: "12",
          tipoViaRemitente: "3",
          numeroRemitente: "2",
          codigoCiudadRemitente: "MX090010",
          descripcionTipoViaRemitente: "Avenida calle",
          direccionRemitente: "Avenida calle 12 # 2",
          nombreRemitente: "Pepito",
          indicativoRemitente: "57",
          celularRemitente: "3002009910",
          correoRemitente: "pepitoprueba@prueba.com",
          otraDireccionRemitente: "",
          codigoPostalRemitente: "01864",
        },
        datosDestinatario: {
          identificacionDestinatario: "1030581171",
          divisionDestinatario: "03",
          tipoDocumentoDestinatario: "13",
          detalleDestinatario: "",
          tipoViaDestinatario: "3",
          viaDestinatario: "22",
          numeroDestinatario: "5",
          descripcionTipoViaDestinatario: "Avenida calle",
          direccionDestinatario: "Avenida calle 22 # 5",
          codigoCiudadDestinatario: "MX090010",
          nombreDestinatario: "Perano",
          indicativoDestinatario: "57",
          celularDestinatario: "233213332456",
          correoDestinatario: "peranoprueba@prueba.com",
          otraDireccionDestinatario: "",
          codigoPostalDestinatario: "01864",
        },
        tipoGuia: 1,
        referenciaGuia: "",
        usuario: "pruebajuli111111@yopmail.com",
        fuente: "envios",
        observaciones: "",
        tipoProducto: "4",
        quienPagaEnvio: "1",
        tipoEnvioEspecial: false,
      };
    default:
      throw new Error("Código de país no válido");
  }
};

export const generateRandomDetalle = (): {
  unidades: number;
  pesoReal: number;
  largo: number;
  alto: number;
  ancho: number;
  ubl: number;
  referencia: string;
} => {
  const UBL_CODES = [1, 2, 4, 71];
  const ubl = faker.helpers.arrayElement(UBL_CODES);

  switch (ubl) {
    case 1:
      return {
        unidades: 1,
        pesoReal: faker.number.int({ min: 40, max: 50 }),
        largo: faker.number.int({ min: 1, max: 58 }),
        alto: faker.number.int({ min: 1, max: 58 }),
        ancho: faker.number.int({ min: 1, max: 58 }),
        ubl,
        referencia: "ref",
      };
    case 2:
      return {
        unidades: 1,
        pesoReal: faker.number.int({ min: 1, max: 2 }),
        largo: faker.number.int({ min: 1, max: 17 }),
        alto: faker.number.int({ min: 1, max: 17 }),
        ancho: faker.number.int({ min: 1, max: 17 }),
        ubl,
        referencia: "ref",
      };
    case 4:
      return {
        unidades: 1,
        pesoReal: faker.number.int({ min: 3, max: 5 }),
        largo: faker.number.int({ min: 1, max: 23 }),
        alto: faker.number.int({ min: 1, max: 23 }),
        ancho: faker.number.int({ min: 1, max: 23 }),
        ubl,
        referencia: "ref",
      };
    case 71:
      return {
        unidades: 1,
        pesoReal: faker.number.int({ min: 1, max: 2500 }),
        largo: faker.number.int({ min: 1, max: 100 }),
        alto: faker.number.int({ min: 1, max: 100 }),
        ancho: faker.number.int({ min: 1, max: 100 }),
        ubl,
        referencia: "ref",
      };
    default:
      throw new Error("UBL inválido");
  }
};
