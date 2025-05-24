import { APIResponse } from "playwright";
import { manager } from "../actions/MakeRequest";

export default class PeticionCrearGuia {
    async sendRequest(requestBody: string): Promise<APIResponse> {
        try {
            const Crear = await manager.getContext();
            console.log('Crear:', Crear);
            const response = await Crear.post('/guias/cm-guias-ms/guia', {
                headers: { 'Content-Type': 'application/json' },
                data: requestBody,
            });

            if (!response) {
                throw new Error("No se recibió respuesta de la API.");
            }

            return response;
        } catch (error) {
            console.error("Error en la petición:", error);
            throw new Error("Fallo en la petición: " + error);
        }
    }
}