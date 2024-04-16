import { Parallax } from 'react-parallax';
import SpaceStation from '../images/space.jpg';

const ImageThree = () => (
    <Parallax className='image' bgImage={SpaceStation} strength={800}>
        <div className='content'>
            <span className='img-txt'>A trip To Space</span>
        </div>
    </Parallax>
);

export default ImageThree;