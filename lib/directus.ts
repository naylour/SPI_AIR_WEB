import ky from 'ky';

const api = ky.extend({
    prefixUrl: 'https://air.myappdemo.fyi',
    credentials: 'same-origin',
    throwHttpErrors: false,
    hooks: {
        afterResponse: [
            async ({ headers }) => {
                console.log(headers)
            }
        ],

    }
});

interface LoginResult {
    access_token: string;
    expires: number;
}

export const login = async (email: string, password: string) => {
    const result = await api.post<{ data: LoginResult }>('auth/login', {
        json: {
            mode: 'cookie',
            email, password
        }
    });

    if(result.ok) {
        const { data } = await result.json();
        console.log(data)
    } else {
        console.log(result.status)
    }
}


export default api;
