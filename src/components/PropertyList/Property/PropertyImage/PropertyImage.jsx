import "./PropertyImage.css";

const PropertyImage = ({ image, children }) => {
    const imageUrl = image?.startsWith("/") ? image : `/${image}`;

    return (
        <div
            className="property-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {children}
        </div>
    );
};

export default PropertyImage;