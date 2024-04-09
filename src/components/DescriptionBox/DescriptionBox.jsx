import React from "react";
import './DescriptionBox.css'

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">
                    Description
                </div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>Ecommerce is a method of buying and selling goods and services online. The definition of ecommerce business can also include tactics like affiliate marketing. You can use ecommerce channels such as your own website, an established selling website like Amazon, or social media to drive online sales.</p>
                <p>As for style guides, the Associated Press Style Guide (AP Style) and the Chicago Manual of Style also dictate that the correct spelling is e-commerce. Per the AP Stylebook: “AP uses hyphenated e- for generic terms such as e-commerce and e-strategies.</p>
            </div>
        </div>
    )
}

export default DescriptionBox