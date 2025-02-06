import { readable } from 'svelte/store';
import { client } from './client';

export const apollo = readable(client);