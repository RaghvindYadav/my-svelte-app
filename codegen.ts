import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'https://api.firstspark.io/fsdata/api/graphql',
  documents: ['src/**/*.{ts,svelte}'],
  ignoreNoDocuments: true,
  generates: {
    './src/lib/graphql/generated/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false
      },
      config: {
        enumsAsTypes: true,
        dedupeFragments: true,
        skipTypename: false,
        useTypeImports: true,
        scalars: {
          DateTime: 'string',
          JSON: '{ [key: string]: any }',
        },
        inputMaybeValue: "T | null | undefined",
      }
    }
  }
}

export default config
