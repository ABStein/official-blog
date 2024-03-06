'use client';

import { ReactTyped } from 'react-typed';

const AnimatedComponent = ({ word }) => {
    return (
        <ReactTyped
            className='font-bold text-indigo-500'
            strings={[word]}
            typeSpeed={200}
            startWhenVisible={true}
        />
    )
}

export default AnimatedComponent;
