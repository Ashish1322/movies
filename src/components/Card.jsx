function Card({image, name})
{
    return (
        <div className="card">
            <img src={image} />
            <p>{name}</p>
        </div>
    )
}
export default Card;