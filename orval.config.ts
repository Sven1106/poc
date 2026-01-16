import { defineConfig } from "orval";

export default defineConfig({
  fakestore: {
    input: {
      target: "./src/api/openapi.json",
    },
    output: {
      target: "src/api/generated/client.ts",
      schemas: "src/api/generated/models",
      client: "vue-query",
      httpClient: "fetch",
      clean: true,
      urlEncodeParameters: true,
      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
        mutator: {
          path: "./src/api/mutator/custom-fetch.ts",
          name: "customFetch",
        },
        query: {
          useInvalidate: true,
        },
      },
    },
  },
});
