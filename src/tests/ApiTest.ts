import { Given, Then, When } from "@cucumber/cucumber";
import { expect, APIResponse } from '@playwright/test';
import PeticionCrearGuia from "../actors/apiActor_request";
import { BodyPostICrearGuias } from "../actors/apiActor";



let requestApi: APIResponse;
let requestBody: string;

Given('que tengo el microservicio de creacion de guias', () => {
  console.log(`Creacion de guia`);
});

When('al realizar la peticion', async () => {
  const peticionCreacion = new PeticionCrearGuia();
  const postCrearGuias = new BodyPostICrearGuias();
  requestApi = await peticionCreacion.sendRequest(postCrearGuias.toJSON());
  console.log('Campos enviados en la solicitud POST:', postCrearGuias);
});

Then('el servicio debe responder con {int} y {string}', async (statusCode: number, isError: string) => {
  console.log(`Then: Verificando StatusCode del POST: ${statusCode}, ${isError}`);
  expect(requestApi.status()).toBe(statusCode);

  const responseBody = await requestApi.text();
  const responseJson = JSON.parse(responseBody);

  console.log(`Then: Verificando JSON de la respuesta POST para ${isError}`);
  console.log('Campos recibidos:', responseJson);
});

/**********************************************************************************************************************************/
