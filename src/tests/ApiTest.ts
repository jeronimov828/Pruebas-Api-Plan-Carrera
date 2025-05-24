import { Given, Then, When } from "@cucumber/cucumber";
import { expect, APIResponse } from "@playwright/test";
import PeticionCrearGuia from "../actors/apiActor_request";
import {
  generateRandomDetalle,
  generarGuiaDiferentesPaises,
} from "../helpers/generarGuia";
import { BodyPostICrearGuias } from "../actors/apiActor";
import { IWorld } from "@cucumber/cucumber";

let requestApi: APIResponse;
let requestBody: string;

Given("que tengo el microservicio de creación de guías", () => {
  console.log(`Creacion de guia`);
});

Given("tengo el cuerpo de la solicitud armado correctamente", () => {
  console.log(`Creacion de guia`);
});

When("envié la petición", async function (this: IWorld) {
  const peticionCreacion = new PeticionCrearGuia();

  // Puedes reemplazar esta línea para probar distintos casos
  const postCrearGuias = new BodyPostICrearGuias(); // o con overrides
  requestBody = JSON.stringify(JSON.parse(postCrearGuias.toJSON()), null, 2);
  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
  await this.attach(`Body enviado:\n${requestBody}`, "text/plain");

  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
});

Then(
  "debo poder ver la respuesta de la petición y un {int}",
  async function (this: IWorld, statusCode: number) {
    console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
    expect(requestApi.status()).toBe(statusCode);
    await this.attach(`status obtenido:\n${statusCode}`, "text/plain");
  }
);

Then(
  "la información del numero de la guía creada",
  async function (this: IWorld) {
    const responseJson = await requestApi.json();

    console.log("Campos recibidos en la respuesta:", responseJson);

    // Validar que venga el campo 'data.codigo_remision'
    expect(responseJson).toHaveProperty("data.codigo_remision");

    // Validar que ese valor no esté vacío
    const numeroGuia = responseJson.data.codigo_remision;
    expect(typeof numeroGuia).toBe("string");
    expect(numeroGuia.length).toBeGreaterThan(5);

    // Adjuntarlo al reporte
    await this.attach(`Número de guía creado: ${numeroGuia}`, "text/plain");
  }
);

/**********************************************************************************************************************************/

Given("que tengo el microservicio de creación de guías listo", () => {
  console.log(`Creacion de guia`);
});

Given(
  "tengo el cuerpo de la solicitud armado con exceso en el valor a recaudar",
  () => {
    console.log(`Creacion de guia`);
  }
);

When("envié la petición con el error", async function (this: IWorld) {
  const peticionCreacion = new PeticionCrearGuia();

  // Puedes reemplazar esta línea para probar distintos casos
  const postCrearGuias = new BodyPostICrearGuias({
    valorRecaudar: "827827897834863784637846",
  });
  requestBody = JSON.stringify(JSON.parse(postCrearGuias.toJSON()), null, 2);
  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
  await this.attach(`Body enviado:\n${requestBody}`, "text/plain");

  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
});

Then(
  "debo poder ver la respuesta de la petición con un {int}",
  async (statusCode: number) => {
    console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
    expect(requestApi.status()).toBe(statusCode);
  }
);

Then("un mensaje informativo con {string}", async (message: string) => {
  console.log(`Then: Verificando la respuesta del POST: ${message}`);
  const responseJson = await requestApi.json();
  expect(responseJson.message).toBe(message);
});

/**********************************************************************************************************************************/

Given("que tengo el microservicio que se utliza para crear las guias", () => {
  console.log(`Creacion de guia`);
});

Given(
  "tengo el cuerpo de la solicitud armado con exceso en el valor del campo referencia",
  () => {
    console.log(`Body con exceso`);
  }
);

When("envié la petición al servicio", async function (this: IWorld) {
  const peticionCreacion = new PeticionCrearGuia();

  // Puedes reemplazar esta línea para probar distintos casos
  const postCrearGuias = new BodyPostICrearGuias({
    referenciaRecaudo:
      "jkahjghjhsbdjwkhasuehwuheudashdjwhudjshduwahdcauwdhguaiwhwduqwjvhjgyuguygyuguygtydtyd",
  });
  requestBody = JSON.stringify(JSON.parse(postCrearGuias.toJSON()), null, 2);
  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
  await this.attach(`Body enviado:\n${requestBody}`, "text/plain");

  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
});

Then("me debe responder con un {int}", async (statusCode: number) => {
  console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
  expect(requestApi.status()).toBe(statusCode);
});

Then("un mensaje de error con la {string}", async (cause: string) => {
  console.log(`Then: Verificando la respuesta del POST: ${cause}`);
  const responseJson = await requestApi.json();
  expect(responseJson.cause).toBe(cause);
});

/**********************************************************************************************************************************/

Given("que quiero utilizar el microservicio de creacion de guias", () => {
  console.log(`Creacion de guia`);
});

Given(
  "tengo el cuerpo de la solicitud armado con el campo Referencia de recaudo vacio",
  () => {
    console.log(`Body con exceso`);
  }
);

When(
  "envié la petición con el campo vacio al microservicio",
  async function (this: IWorld) {
    const peticionCreacion = new PeticionCrearGuia();

    // Puedes reemplazar esta línea para probar distintos casos
    const postCrearGuias = new BodyPostICrearGuias({
      referenciaRecaudo: "",
    });
    requestBody = JSON.stringify(JSON.parse(postCrearGuias.toJSON()), null, 2);
    requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
    console.log("Campos enviados en la solicitud POST:", postCrearGuias);
    await this.attach(`Body enviado:\n${requestBody}`, "text/plain");

    requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
    console.log("Campos enviados en la solicitud POST:", postCrearGuias);
  }
);

Then(
  "me debe devolver la respuesta a la peticion con un {int}",
  async (statusCode: number) => {
    console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
    expect(requestApi.status()).toBe(statusCode);
  }
);

Then("un mensaje con {string}", async (cause: string) => {
  console.log(`Then: Verificando la respuesta del POST: ${cause}`);
  const responseJson = await requestApi.json();
  expect(responseJson.cause).toBe(cause);
});

/**********************************************************************************************************************************/

Given("que tengo disponible el microservicio de creación de guías", () => {
  console.log(`Creacion de guia`);
});

Given(
  "tengo el cuerpo de la solicitud armado con el campo valor a recaudar vacío",
  () => {
    console.log(`Body con exceso`);
  }
);

When(
  "envié la petición para este microservicio",
  async function (this: IWorld) {
    const peticionCreacion = new PeticionCrearGuia();

    // Puedes reemplazar esta línea para probar distintos casos
    const postCrearGuias = new BodyPostICrearGuias({
      valorRecaudar: "",
    });
    requestBody = JSON.stringify(JSON.parse(postCrearGuias.toJSON()), null, 2);
    requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
    console.log("Campos enviados en la solicitud POST:", postCrearGuias);
    await this.attach(`Body enviado:\n${requestBody}`, "text/plain");

    requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
    console.log("Campos enviados en la solicitud POST:", postCrearGuias);
  }
);

Then(
  "debo poder ver en la respuesta de la petición un error con un {int}",
  async (statusCode: number) => {
    console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
    expect(requestApi.status()).toBe(statusCode);
  }
);

Then(
  "un mensaje informativo que me informa que {string}",
  async (cause: string) => {
    console.log(`Then: Verificando la respuesta del POST: ${cause}`);
    const responseJson = await requestApi.json();
    expect(responseJson.cause).toBe(cause);
  }
);

/**********************************************************************************************************************************/

Given(
  "que tengo el microservicio que se utliza para la creacion de guias en test",
  () => {
    console.log(`Consulta de guia`);
  }
);

Given(
  "genere el cuerpo de la peticion con valores aleatorios en el detalle",
  () => {
    console.log(`Consulta de guia`);
  }
);

When("haga el envió de la petición para crear", async function (this: IWorld) {
  const peticionCreacion = new PeticionCrearGuia();

  // Puedes reemplazar esta línea para probar distintos casos
  const postCrearGuias = new BodyPostICrearGuias({
    detalle: [generateRandomDetalle()],
  });
  requestBody = JSON.stringify(JSON.parse(postCrearGuias.toJSON()), null, 2);
  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
  await this.attach(`Body enviado:\n${requestBody}`, "text/plain");

  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
});

Then(
  "debo poder ver en la respuesta de la solicitud un {int}",
  async (statusCode: number) => {
    console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
    expect(requestApi.status()).toBe(statusCode);
  }
);

Then(
  "tambien debo poder ver como se crean guias diferentes ubl",
  async function (this: IWorld) {
    const responseJson = await requestApi.json();

    console.log("Campos recibidos en la respuesta:", responseJson);

    // Validar que venga el campo 'data.codigo_remision'
    expect(responseJson).toHaveProperty("data.codigo_remision");

    // Validar que ese valor no esté vacío
    const numeroGuia = responseJson.data.codigo_remision;
    expect(typeof numeroGuia).toBe("string");
    expect(numeroGuia.length).toBeGreaterThan(5);

    // Adjuntarlo al reporte
    await this.attach(`Número de guía creado: ${numeroGuia}`, "text/plain");
  }
);

/**********************************************************************************************************************************/

Given(
  "que tengo el microservicio que se utliza para el proceso de creacion de guias en test",
  () => {
    console.log(`Consulta de guia`);
  }
);

Given("genere el cuerpo de la peticion sin campos opcionaless", () => {
  console.log(`Consulta de guia`);
});

When(
  "haga el envió de la petición para crear la guia",
  async function (this: IWorld) {
    const peticionCreacion = new PeticionCrearGuia();

    // Puedes reemplazar esta línea para probar distintos casos
    const postCrearGuias = new BodyPostICrearGuias({
      observaciones: undefined,
    });
    requestBody = JSON.stringify(JSON.parse(postCrearGuias.toJSON()), null, 2);
    requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
    console.log("Campos enviados en la solicitud POST:", postCrearGuias);
    await this.attach(`Body enviado:\n${requestBody}`, "text/plain");

    requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
    console.log("Campos enviados en la solicitud POST:", postCrearGuias);
  }
);

Then("en la respuesta que devuelve un {int}", async (statusCode: number) => {
  console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
  expect(requestApi.status()).toBe(statusCode);
});

Then("el numero de la guia creada", async function (this: IWorld) {
  const responseJson = await requestApi.json();

  console.log("Campos recibidos en la respuesta:", responseJson);

  // Validar que venga el campo 'data.codigo_remision'
  expect(responseJson).toHaveProperty("data.codigo_remision");

  // Validar que ese valor no esté vacío
  const numeroGuia = responseJson.data.codigo_remision;
  expect(typeof numeroGuia).toBe("string");
  expect(numeroGuia.length).toBeGreaterThan(5);

  // Adjuntarlo al reporte
  await this.attach(`Número de guía creado: ${numeroGuia}`, "text/plain");
});

/**********************************************************************************************************************************/

Given("que voy a utlizar el microservicio para crear guias", () => {
  console.log(`Consulta de guia`);
});

Given(
  "genere el cuerpo de la peticion con caracteres no permiticos dentro del campo referencia",
  () => {
    console.log(`Consulta de guia`);
  }
);

When("se envie la peticion para crear una guia", async function (this: IWorld) {
  const peticionCreacion = new PeticionCrearGuia();

  // Puedes reemplazar esta línea para probar distintos casos
  const postCrearGuias = new BodyPostICrearGuias({
    referenciaGuia: "&%/((//&",
  });
  requestBody = JSON.stringify(JSON.parse(postCrearGuias.toJSON()), null, 2);
  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
  await this.attach(`Body enviado:\n${requestBody}`, "text/plain");

  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
});

Then(
  "debe salir un error con {int}",
  async function (this: IWorld, statusCode: number) {
    console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
    expect(requestApi.status()).toBe(statusCode);
    await this.attach(`status obtenido:\n${statusCode}`, "text/plain");
  }
);

Then(
  "el mensaje que describe el error {string}",
  async function (this: IWorld, message: string) {
    console.log(`Then: Verificando la respuesta del POST: ${message}`);
    const responseJson = await requestApi.json();
    expect(responseJson.message).toBe(message);
    await this.attach(`status obtenido:\n${message}`, "text/plain");
  }
);

/**********************************************************************************************************************************/

Given(
  "que voy a utlizar el microservicio que me sirve para crear guias desde test",
  () => {
    console.log(`Creacion de guia`);
  }
);

Given(
  "genere el cuerpo de la peticion con valores tanto para colombia como para mexico",
  () => {
    console.log(`Creacion de guia`);
  }
);

When(
  "se haga el envio de la solicitud para crear la guia",
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

Then("debe crearse la guia y devolver un {int}", async (statusCode: number) => {
  console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
  expect(requestApi.status()).toBe(statusCode);
});

Then(
  "el mensaje indicando cual es el numero de la guia que se creo",
  async function (this: IWorld) {
    const responseJson = await requestApi.json();

    console.log("Campos recibidos en la respuesta:", responseJson);

    // Validar que venga el campo 'data.codigo_remision'
    expect(responseJson).toHaveProperty("data.codigo_remision");

    // Validar que ese valor no esté vacío
    const numeroGuia = responseJson.data.codigo_remision;
    expect(typeof numeroGuia).toBe("string");
    expect(numeroGuia.length).toBeGreaterThan(5);

    // Adjuntarlo al reporte
    await this.attach(`Número de guía creado: ${numeroGuia}`, "text/plain");
  }
);

/**********************************************************************************************************************************/

Given("que voy a usar el microservicio de creación de guías", () => {
  console.log(`Creacion de guia`);
});

Given("el cuerpo de la solicitud no incluye el campo obligatorio", () => {
  console.log(`Creacion de guia`);
});

When("se envía la solicitud", async function (this: IWorld) {
  const peticionCreacion = new PeticionCrearGuia();

  // Puedes reemplazar esta línea para probar distintos casos
  const postCrearGuias = new BodyPostICrearGuias({
    identificacion: undefined,
  });
  requestBody = JSON.stringify(JSON.parse(postCrearGuias.toJSON()), null, 2);
  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
  await this.attach(`Body enviado:\n${requestBody}`, "text/plain");

  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
});

Then("la respuesta debe ser un error con {int}", async (statusCode: number) => {
  console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
  expect(requestApi.status()).toBe(statusCode);
});

Then(
  "un mensaje de error con {string}",
  async function (this: IWorld, message: string) {
    console.log(`Then: Verificando la respuesta del POST: ${message}`);
    const responseJson = await requestApi.json();
    expect(responseJson.message).toBe(message);
    await this.attach(`status obtenido:\n${message}`, "text/plain");
  }
);

/**********************************************************************************************************************************/

Given("que tengo el cuerpo de la solicitud con un campo con tipo incorrecto", () => {
  console.log(`Creacion de guia`);
});

When("se envía la petición", async function (this: IWorld) {
  const peticionCreacion = new PeticionCrearGuia();

  // Puedes reemplazar esta línea para probar distintos casos
  const postCrearGuias = new BodyPostICrearGuias({
    valorRecaudar: "8798798jj",
  });
  requestBody = JSON.stringify(JSON.parse(postCrearGuias.toJSON()), null, 2);
  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
  await this.attach(`Body enviado:\n${requestBody}`, "text/plain");

  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log("Campos enviados en la solicitud POST:", postCrearGuias);
});

Then("obtengo un {int}", async (statusCode: number) => {
  console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
  expect(requestApi.status()).toBe(statusCode);
});

Then(
  "un mensaje indicando el error de tipo {string}",
  async function (this: IWorld, cause: string) {
    console.log(`Then: Verificando la respuesta del POST: ${cause}`);
    const responseJson = await requestApi.json();
    expect(responseJson.cause).toBe(cause);
    await this.attach(`status obtenido:\n${cause}`, "text/plain");
  }
);

/**********************************************************************************************************************************/

Given("que no envío ningún cuerpo en la solicitud", () => {
  console.log(`Creacion de guia`);
});

When("realizo la petición al microservicio", async function (this: IWorld) {
  const peticionCreacion = new PeticionCrearGuia();

  const requestBodyVacio = JSON.stringify({});
  const response = await peticionCreacion.sendRequest(requestBodyVacio);

  // Adjuntar cuerpo vacío para debugging
  await this.attach(`Body enviado:\n${JSON.stringify(requestBodyVacio, null, 2)}`, "text/plain");

  this.response = response;
});

Then("debo obtener un {int}", async (statusCode: number) => {
  console.log(`Then: Verificando StatusCode del POST: ${statusCode}`);
  expect(requestApi.status()).toBe(statusCode);
});

Then(
  "un mensaje indicando {string}",
  async function (this: IWorld, message: string) {
    console.log(`Then: Verificando la respuesta del POST: ${message}`);
    const responseJson = await requestApi.json();
    expect(responseJson.message).toBe(message);
    await this.attach(`status obtenido:\n${message}`, "text/plain");
  }
);

/**********************************************************************************************************************************/
