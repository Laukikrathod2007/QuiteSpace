import { Client, Account, Databases, Realtime, Functions } from 'appwrite';

const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT as string;
const project = import.meta.env.VITE_APPWRITE_PROJECT_ID as string;

if (!endpoint || !project) {
  // Non-fatal: allows the app to render, but logs for developer
  // eslint-disable-next-line no-console
  console.warn('Appwrite env is missing: VITE_APPWRITE_ENDPOINT or VITE_APPWRITE_PROJECT_ID');
}

export const client = new Client()
  .setEndpoint(endpoint || '')
  .setProject(project || '');

export const account = new Account(client);
export const databases = new Databases(client);
export const realtime = new Realtime(client);
export const functions = new Functions(client);

export type AppwriteIds = {
  databaseId: string;
  sessionsCollectionId: string;
  automationsCollectionId: string;
};
