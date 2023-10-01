function ImageShow({image, key}){
    console.log(image)
    return(
        <div>
            <div>{image.alt_description}</div>
            <div>{key}</div>
        <img   src={image.urls.small} alt={image.alt_description} />
        </div>
    )
}
export default ImageShow;