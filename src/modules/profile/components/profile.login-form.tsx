export default function LoginForm() {
    return (
        <form className={'space-y-5'}>
            <div className={'text-2xl font-semibold'}>Login</div>

            <div className={'space-y-2'}>
                <div className={'text-lg font-medium'}>username</div>
                <input type={'text'} className={'input'}/>
            </div>
            <div className={'space-y-2'}>
                <div className={'text-lg font-medium'}>password</div>
                <input type={'password'} className={'input'}/>
            </div>

            <button className={'bg-primary-purple text-white font-bold text-lg w-full py-3'}>
                Login
            </button>
        </form>
    )
}