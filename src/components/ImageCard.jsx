import "./ImageCard.css"
export default function ImageCard({src, alt, description}) {
    return (
        <div className="image-card">
            <img src={src} alt={alt}/>
            <div className="description">
                <p>{description}</p>
            </div>
        </div>
    )
}