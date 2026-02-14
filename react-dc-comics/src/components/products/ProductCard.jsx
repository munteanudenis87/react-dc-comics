const ProductCard = (props) => {
    const { id, thumb, title } = props;

    return (
        <article className="product-card">
            <img src={thumb} alt={title} />
            <h4 className="py-3 px-1">
                {title}
            </h4>
        </article>
    )
}

export default ProductCard;