function FeatureItem({ icon, title, description }) {
    return (
        <div class="feature-item">
            <img src={icon} alt="Chat Icon" class="feature-item__icon" />
            <h3 class="feature-item__title">{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default FeatureItem