/* eslint-disable @typescript-eslint/no-unused-vars */
import { NotificationsStorage } from "storages/NotificationsStorage";

import { BASE_FAILURE_RESPONSE, SendRequestParamsInterface, SendRequestResponseInterface } from "./interface";

export function mockSuccessResponse<DataType>(result: DataType): SendRequestResponseInterface<DataType> {
  return { success: true, headers: new Headers(), result };
}

export class ApiStorageClass {
  bodyCommonParams(body: Record<string, any>) {}
  formDataCommonParams(formData: FormData) {}

  async sendRequest<DataType>({
    url,
    body,
    formData,
    method = "POST",
    convertIn = "json",
    withCommonParams = true,
    hideErrorMessage,
  }: SendRequestParamsInterface): Promise<SendRequestResponseInterface<DataType>> {
    try {
      const options: Record<string, any> = {
        method,
        headers: {},
      };

      if (body) {
        const payload = typeof body === "object" && body !== null ? body : {};
        if (withCommonParams) this.bodyCommonParams(payload);

        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(payload);
      }

      if (formData) {
        if (withCommonParams) this.formDataCommonParams(formData);
        options.body = formData;
      }

      const response = await fetch(url, options);
      const result = await response[convertIn]();

      if (result?.error || !response.ok) throw new Error(result?.message);
      return { success: true, result, headers: response.headers };
    } catch (error) {
      const message = error instanceof Error ? error.message : null;

      if (!hideErrorMessage) NotificationsStorage.pushNotification(message || "Ошибка. Запрос не выполнен", "error");

      return BASE_FAILURE_RESPONSE;
    }
  }
}

export const ApiStorage = new ApiStorageClass();
