import { cache } from 'react'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


export async function getPosts() {
    const { data: posts, error } = await supabase.from('posts').select();
    try {
        return posts;
    } catch (e) {
        console.log(e);
        return error;
    }
}

export const getPostBySlug = cache(async (slug) => {
    const { data: post, error } = await supabase.from('posts').select().eq('slug', slug);
    try {
        return post[0];
    } catch (e) {
        console.log(e);
        return error;
    }
})
