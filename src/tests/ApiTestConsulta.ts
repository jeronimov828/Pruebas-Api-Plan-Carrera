import { Given, Then, When } from "@cucumber/cucumber";
import { expect, APIResponse } from "@playwright/test";
import PeticionConsultarGuia from "../actors/ApiConsultaGuias_request";
import { IWorld } from "@cucumber/cucumber";
import { BodyPostICrearGuias } from "../actors/apiActor";
import PeticionCrearGuia from "../actors/apiActor_request";
import { generarGuiaDiferentesPaises } from "../helpers/generarGuia";

let requestApi: APIResponse;
let requestBody: string;

Given(
  "que cree una guia para colombia o para mexico",
  async function (this: IWorld) {
    const peticionCreacion = new PeticionCrearGuia();
    const postCrearGuias = new BodyPostICrearGuias({
      generarGuiaDiferentesPaises,
    });

    const body = postCrearGuias.toJSON();
    requestBody = JSON.stringify(JSON.parse(body), null, 2);

    requestApi = await peticionCreacion.sendRequest(body);
    console.log("Campos enviados en la solicitud POST:", postCrearGuias);
    await this.attach(`Body enviado:\n${requestBody}`, "text/plain");

    // 💾 Guarda el número de guía creado
    const responseJson = await requestApi.json();
    this.numeroGuiaCreada = responseJson.numeroGuia;
    console.log("Número de guía creada:", this.numeroGuiaCreada);
  }
);

Given("quiero consultar la informacion de la guia creada", () => {
  console.log(`Consultando guia`);
});

When("envie la peticion al servicio", async function (this: IWorld) {
  const peticionConsulta = new PeticionConsultarGuia();

  // Usa la guía creada anteriormente
  const response = await peticionConsulta.sendRequest(this.numeroGuiaCreada);
  this.response = response;

  const json = await response.json();
  console.log("Respuesta GET de la guía:", json);
  await this.attach(
    `Respuesta GET:\n${JSON.stringify(json, null, 2)}`,
    "application/json"
  );
});

Then(
  "debo poder ver el pais asociado a la guia y el {int}",
  async function (this: IWorld, statusCode: number) {
    const body = await this.response.json();
    console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
    expect(requestApi.status()).toBe(statusCode);
    expect(body.data);
    await this.attach(
      `status obtenido:\n${statusCode}, \n${body}`,
      "text/plain"
    );
  }
);

/**********************************************************************************************************************************/

Given("que voy a utlizar el microservicio de consulta de guias en test", () => {
  console.log(`Creacion de guia`);
});

When(
  "envie la peticion al servicio de consulta con un numero de guia que no existe",
  async function (this: IWorld) {
    this.numeroGuiaCreada = "GUIA_INEXISTENTE_999999";
    const peticionConsulta = new PeticionConsultarGuia();

    this.response = await peticionConsulta.sendRequest(this.numeroGuiaCreada);
    const json = await this.response.json();
    console.log("Respuesta de consulta a guía inexistente:", json);

    await this.attach(
      `Respuesta:\n${JSON.stringify(json, null, 2)}`,
      "application/json"
    );
  }
);

Then(
  "debo ver el error con un {int}",
  async function (this: IWorld, statusCode: number) {
    const status = this.response.status();
    const body = await this.response.json();

    // Validaciones
    expect(status).toBe(200);
    expect(body.isError).toBe(false);
    expect(body.data.datosRetorno).toBeNull();
    expect(Array.isArray(body.data.detalle)).toBe(true);
    expect(body.data.detalle.length).toBe(0);
    expect(requestApi.status()).toBe(statusCode);

    // Adjuntar información para reporte
    await this.attach(`Status: ${status}`, "text/plain");
    await this.attach(
      `Body:\n${JSON.stringify(body, null, 2)}`,
      "application/json"
    );
  }
);

/**********************************************************************************************************************************/

Given(
  "que cree una guia con nivel de servicio 22",
  async function (this: IWorld) {
    const peticionCreacion = new PeticionCrearGuia();

    // Puedes reemplazar esta línea para probar distintos casos
    const postCrearGuias = new BodyPostICrearGuias({
      generarGuiaDiferentesPaises,
    });
    requestBody = JSON.stringify(JSON.parse(postCrearGuias.toJSON()), null, 2);
    requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
    console.log("Campos enviados en la solicitud POST:", postCrearGuias);
    await this.attach(`Body enviado:\n${requestBody}`, "text/plain");

    requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
    console.log("Campos enviados en la solicitud POST:", postCrearGuias);
  }
);

Given("quiero consultar la informacion de la guia que se creo", () => {
  console.log(`Consultando guia`);
});

When(
  "envie la peticion al servicio de consulta",
  async function (this: IWorld) {
    const peticionConsulta = new PeticionConsultarGuia();

    // Usa la guía creada anteriormente
    const response = await peticionConsulta.sendRequest(this.numeroGuiaCreada);
    this.response = response;

    const json = await response.json();
    console.log("Respuesta GET de la guía:", json);
    await this.attach(
      `Respuesta GET:\n${JSON.stringify(json, null, 2)}`,
      "application/json"
    );
  }
);

Then(
  "debo poder ver el nivel de servicio en la informacion de la guia y el {int}",
  async function (this: IWorld, statusCode: number) {
    const body = await this.response.json();
    console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
    expect(requestApi.status()).toBe(statusCode);
    expect(body.data);
    await this.attach(
      `status obtenido:\n${statusCode}, \n${body}`,
      "text/plain"
    );
  }
);

/**********************************************************************************************************************************/
