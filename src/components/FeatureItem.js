function FeatureItem({ icon, alt, title, description }) {
    return (
        <div className="feature-item">
            <img src={icon} alt={alt} className="feature-item__icon" />
            <h3 className="feature-item__title">{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default FeatureItem