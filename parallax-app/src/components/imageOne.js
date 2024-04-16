import { Parallax } from 'react-parallax';
import Nasa from '../images/space3.jpg';

const ImageOne = () => (
    <Parallax className='image' bgImage={Nasa} strength={500}>
        <div className='content'>
            <span className='img-txt'>A trip To Space</span>
        </div>
    </Parallax>
);

export default ImageOne;