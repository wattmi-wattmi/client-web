const Api_Routes = {
    login : () => '/api/auth/login' as const, 
    register : () => '/api/auth/register' as const, 
    logout : () => '/api/auth/logout' as const, 
    get_users : ({ search } : { search : string}) => `api/users?search=${search}` as const
};

export default Api_Routes;