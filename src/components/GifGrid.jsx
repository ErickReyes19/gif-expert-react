

import { GifExpertApp } from '../GifExpertApp';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './gifItem';



export const GifGrid = ({ category }) => {



    const { images, isLoading } = useFetchGifs(category);
    


    return (
        <>
            <div className='category-name'>
                <h1>{category}</h1>
                {
                    isLoading
                        ? (<h2>Cargando...</h2>)
                        : null
                }

            </div>


            <div className='card-grid'>
                {images.map((imagen) => (
                    <GifItem key={imagen.id}
                        {...imagen} />
                ))}
            </div>
        </>
    )
} 