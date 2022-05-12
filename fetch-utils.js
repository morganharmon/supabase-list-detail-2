const SUPABASE_URL = 'https://yxfajitmasxbcohtbkqt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4ZmFqaXRtYXN4YmNvaHRia3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyODY4MTEsImV4cCI6MTk2Nzg2MjgxMX0.2L8306PS1qjxKhAvOhaxYHjp8eowvQquvK3yZw7Nyj8';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchAllData() {
    const juices = await client.from('juices').select('*');
    return juices.data;
}

export async function fetchItemDataById(id) {
    const juice = await client.from('juices').select('*').match({ id: id }).single();
    return juice.data;
}