import { ID, Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID);

export const databases = new Databases(client);
export const id = new ID(client);

export async function getPosts() {
    const {documents} = await databases.listDocuments(process.env.APPWRITE_DB_ID, process.env.APPWRITE_COLLECTION_ID);
    return documents;
}

export async function getPost(id) {
    const post = await databases.getDocument(process.env.APPWRITE_DB_ID, process.env.APPWRITE_COLLECTION_ID, id);
    return post;
}
