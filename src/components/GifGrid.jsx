
import { useEffect, useState } from 'react';
import { getGift } from '../helpers/getGifs'
import { GifItem } from './gifItem';


export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    console.log(images);

    const getImages = async () => {
        const newImages = await getGift(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, [])


    return (
        <>
            <h3>{category}</h3>

            <div className='card-grid'>
                {images.map((imagen) => (
                    <GifItem key={imagen.id}
                    {...imagen}/>
                ))}
            </div>
        </>
    )
} 