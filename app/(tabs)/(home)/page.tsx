import { Icon } from '@iconify/react';
import { icons } from '@/constants/icons';
export default function Home() {
    return (
        <div className="">
            <div className=''>My Home</div>
            <div className=''>
                 <Icon icon={icons.home} />
            </div>
        </div>
    );
}
