export default function Profile_Page() {
    return (
        <div className={'pt-5 pb-10'}>
            <div>
                <div className={'mt-5 text-center text-2xl text-stroke'}>Please login to see your profile</div>
                <div className={'mt-5 border-2 bg-white px-4 py-8'}>
                    <form className={'space-y-5'}>
                        <div className={'text-2xl font-semibold'}>Register</div>

                        <div className={'space-y-2'}>
                            <div className={'text-lg font-medium'}>username</div>
                            <input type={'text'} className={'input'}/>
                            <div className={'text-sm text-gray-500 tracking-wide'}>
                                please choose carefully, username cannot be changed later
                            </div>
                        </div>
                        <div className={'space-y-2'}>
                            <div className={'text-lg font-medium'}>password</div>
                            <input type={'password'} className={'input'}/>
                        </div>
                        <div className={'space-y-2'}>
                            <div className={'text-lg font-medium'}>confirm password</div>
                            <input type={'password'} className={'input'}/>
                        </div>

                        <div className={'space-y-2'}>
                            <div className={'text-lg font-medium'}>gender</div>
                            <div className={'flex items-center gap-14'}>
                                <Checkbox condition={true} label={'female'}/>
                                <Checkbox condition={false} label={'male'}/>
                            </div>
                        </div>

                        <button className={'bg-primary-purple text-white font-bold text-lg w-full py-3'}>
                            Register
                        </button>
                    </form>
                    <div className={'text-sm tracking-wider mt-5'}>
                        already have an account? login <span className={'text-primary-purple underline underline-offset-2'}>here</span>.
                    </div>
                </div>
            </div>
        </div>
    );
}

function Checkbox({condition, label}: { condition: boolean, label: string }) {
    return (
        <div className={'flex items-center gap-2'}>
            <div className={'w-8 aspect-square border p-1.5'}>
                {condition && (
                    <div className={'w-full h-full bg-primary-sky-blue'}></div>
                )}
            </div>
            <div className={'text-sm tracking-wide'}>{label}</div>
        </div>
    )
}
