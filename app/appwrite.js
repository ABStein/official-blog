import { Client, Account, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65de2c9d25999e3b3532');

export const databases = new Databases(client);

export async function getPosts() {
    const req = await databases.listDocuments('65de2e37ed03e92b1de0', '65de2e45f20e6bd7518c');
    const posts = req.documents;
    return posts;
}

export const account = new Account(client);
export { ID } from 'appwrite';
