import { defineConfig } from "orval";

export default defineConfig({
  fakestore: {
    input: {
      target: "./src/api/fakestoreapi.json",
    },
    output: {
      target: "src/api/generated/client.ts",
      schemas: "src/api/generated/models",
      client: "vue-query",
      httpClient: "axios",
      clean: true,
      prettier: true,
      override: {
        mutator: {
          path: "./src/api/mutator/custom-instance.ts",
          name: "customInstance",
        },
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: "limit",
        },
      },
    },
    hooks: {
      afterAllFilesWrite: {
        command: 'echo "Generation complete"',
      },
    },
  },
});
