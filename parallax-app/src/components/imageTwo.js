import { Parallax } from 'react-parallax';
import Satallite from '../images/space2.jpg';

const ImageTwo = () => (
    <Parallax className='image' bgImage={Satallite} strength={600}>
        <div className='content'>
            <span className='img-txt'>A trip To Space</span>
        </div>
    </Parallax>
);

export default ImageTwo;