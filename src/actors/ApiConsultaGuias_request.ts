import { APIResponse } from "playwright";
import { manager } from "../actions/MakeRequest";

export default class PeticionConsultarGuia {
  async sendRequest(numeroGuia: string): Promise<APIResponse> {
    try {
      console.log(`Consultando guía: ${numeroGuia}`);
      
      const context = await manager.getContext();
      const response = await context.get(
        `/guias/cm-guias-consultas-ms/guia/${numeroGuia}`
      );

      if (!response) {
        throw new Error("No se recibió respuesta de la API.");
      }

      if (response.status() >= 400) {
        const body = await response.text();
        throw new Error(`Error en la consulta: ${response.status()} - ${body}`);
      }

      return response;

    } catch (error) {
      console.error("Error en la petición:", error);
      if (error instanceof Error) {
        throw new Error("Fallo en la petición: " + error.message);
      }
      throw new Error("Fallo en la petición desconocida.");
    }
  }
}