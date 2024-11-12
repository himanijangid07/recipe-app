export default function CustomImage({imgSrc, pt="100%"}) {
    return (
        <div className="custom-image" style={{paddingTop: pt}}>
            <img src={imgSrc} alt=""/>
        </div>
    )
}