import { Icon } from '@iconify/react';
import { icons } from '@/constants/icons';
export default function Home() {
    return (
        <div className="">
            My Home Page
            <div className=''>
                 <Icon icon={icons.home} />
            </div>
        </div>
    );
}
