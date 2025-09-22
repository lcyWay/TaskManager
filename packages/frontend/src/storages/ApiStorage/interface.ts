export const BASE_FAILURE_RESPONSE: { success: false } = { success: false };

export type SendRequestResponseInterface<DataType> =
  | {
      success: true;
      result: DataType;
      headers: Headers;
    }
  | {
      success: false;
    };

export interface SendRequestParamsInterface {
  url: string;
  method?: string;
  body?: Record<any, any>;
  formData?: FormData;
  convertIn?: "json" | "blob" | "text";
  hideErrorMessage?: boolean;
  withCommonParams?: boolean;
}
