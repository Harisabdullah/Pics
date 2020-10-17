import axios from 'axios';

// IPaB6gQUvkgHGYBEuTqEWtfY7lkd0Tsby05_t_wa_rw  Apikey
// TDqcHnNnxsaonLu8Aabzw5ASUTj7UJSeprWgnoudaW4   SecretKey

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID IPaB6gQUvkgHGYBEuTqEWtfY7lkd0Tsby05_t_wa_rw'
    }
});