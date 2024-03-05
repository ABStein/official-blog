import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


export async function getPosts() {
    const { data: posts, error } = await supabase.from('posts').select();
    return posts;
}

export async function getPost(id) {
    const { data: post, error } = await supabase.from('posts').select().eq('id', id);
    return post[0];
}
