import { useState, React } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

function App(){
    const [images, setImages] = useState([]);

    const handleSubmit = async (term)=>{
    //    console.log('Do a search with', term);
       const result = await searchImages(term);
    //    console.log(result);
       setImages(result);
    }

    return (
        <div>
            <SearchBar onFormSubmit={handleSubmit}/>
            <ImageList imagesList={images}/>
        </div>
    )
}
export default App;