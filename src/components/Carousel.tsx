import {useState} from 'react';

export default function Carousel(){
    const [activeImage, setActiveImage] = useState();

    return (<>
    <div>
        <div className='carousel'>
            <ul className='carousel__slides'>
                <input type="radio" />
            </ul>
      
        </div>
    </div>
    </>)
}