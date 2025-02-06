import { get } from 'svelte/store';
import { apollo } from './store';

export async function query(query: any, variables?: any) {
  const client = get(apollo);
  try {
    const { data, errors } = await client.query({
      query,
      variables,
    });

    if (errors) {
      throw new Error(errors[0].message);
    }

    return data;
  } catch (error) {
    console.error('GraphQL Query Error:', error);
    throw error;
  }
}

export async function mutate(mutation: any, variables?: any) {
  const client = get(apollo);
  try {
    const { data, errors } = await client.mutate({
      mutation,
      variables,
    });

    if (errors) {
      throw new Error(errors[0].message);
    }

    return data;
  } catch (error) {
    console.error('GraphQL Mutation Error:', error);
    throw error;
  }
}

export function subscribe(subscription: any, variables: any, callbacks: {
  next?: (data: any) => void;
  error?: (error: any) => void;
  complete?: () => void;
}) {
  const client = get(apollo);
  return client.subscribe({
    query: subscription,
    variables
  }).subscribe(callbacks);
}
