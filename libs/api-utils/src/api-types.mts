// api-types.ts
export type ApiResponse = {
  data: any;
  url: string;
};

export type ProcessedResponse = ApiResponse & { processed: boolean };
