import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  
  throw error(404, 'Not found');
}