# GraphQL Code Generation Setup Guide

This guide explains how to set up and use GraphQL code generation in a SvelteKit project with TypeScript.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A SvelteKit project with TypeScript

## Installation Steps

1. Install required dependencies:

```bash
npm install --save-dev @graphql-codegen/cli@5.0.0 \
                      @graphql-codegen/client-preset@4.1.0 \
                      @graphql-codegen/typescript@4.0.1 \
                      @graphql-codegen/typescript-operations@4.0.1 \
                      @graphql-codegen/typescript-graphql-request@6.0.1 \
                      string-width@4.2.3 \
                      strip-ansi@6.0.1

# Install runtime dependencies
npm install @apollo/client graphql graphql-ws
```

2. Create configuration files:

Create `codegen.ts` in your project root:
```typescript
import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'YOUR_GRAPHQL_ENDPOINT', // e.g., 'http://localhost:8090/api/graphql'
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
```

Create `.npmrc` in your project root:
```
legacy-peer-deps=true
```

3. Add script to `package.json`:
```json
{
  "scripts": {
    "generate": "NODE_OPTIONS='--experimental-json-modules' graphql-codegen"
  }
}
```

## Project Structure

Create the following folder structure:
```
src/
├── lib/
│   ├── apollo/
│   │   ├── client.ts
│   │   ├── operations.ts
│   │   └── hooks.ts
│   └── graphql/
│       └── generated/
│           ├── graphql.ts
│           └── gql.ts
```

## Usage Examples

1. Define GraphQL operations in `src/lib/apollo/operations.ts`:
```typescript
import { gql } from '@apollo/client/core';
import type {
  SignUpUserInput,
  SignInUserInput,
  SignUpUserMutation,
  SignInUserMutation
} from '../graphql/generated/graphql';

export const SIGN_UP_MUTATION = gql`
  mutation SignUpUser($input: SignUpUserInput!) {
    signUpUser(input: $input) {
      firstName
      userId
      authToken
      authTokenExpiresAt
      userHandle
    }
  }
`;

export const SIGN_IN_MUTATION = gql`
  mutation SignInUser($input: SignInUserInput!) {
    signInUser(input: $input) {
      email
      firstName
      lastName
      userId
      userHandle
      authToken
    }
  }
`;
```

2. Use in Svelte components:
```typescript
<script lang="ts">
  import { mutate } from '$lib/apollo/hooks';
  import { SIGN_IN_MUTATION } from '$lib/apollo/operations';
  import type { SignInUserInput, SignInUserMutation } from '$lib/graphql/generated/graphql';

  async function handleSignIn(email: string, password: string) {
    const input: SignInUserInput = {
      ident: email,
      password: password
    };

    try {
      const result = await mutate<SignInUserMutation>(SIGN_IN_MUTATION, { input });
      // Handle successful sign-in
    } catch (error) {
      // Handle error
    }
  }
</script>
```

## Generating Types

Run the following command whenever your GraphQL schema changes:
```bash
npm run generate
# or
yarn generate
```

## Troubleshooting

1. If you encounter ESM/CommonJS compatibility issues:
   - Ensure you're using the exact versions specified in the installation step
   - Try using yarn instead of npm
   - Clear node_modules and reinstall dependencies

2. If generation fails due to schema access:
   - Verify your GraphQL endpoint is accessible
   - Check if you need authentication headers in codegen.ts

3. For type generation issues:
   - Ensure all .graphql files are properly formatted
   - Check if all referenced types exist in your schema

## Best Practices

1. Version Control:
   - Commit generated files to version control
   - Include codegen.ts in version control
   - Add node_modules to .gitignore

2. Type Safety:
   - Always use generated types for GraphQL operations
   - Avoid using any or unknown types
   - Use strict TypeScript configuration

3. Code Organization:
   - Keep GraphQL operations in separate files
   - Group related queries and mutations
   - Use fragments for shared fields

## Additional Resources

- [GraphQL Code Generator Documentation](https://www.graphql-code-generator.com/)
- [Apollo Client Documentation](https://www.apollographql.com/docs/react/)
- [SvelteKit Documentation](https://kit.svelte.dev/docs)