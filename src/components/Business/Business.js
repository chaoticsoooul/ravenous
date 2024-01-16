import React from "react";
import styles from "./Business.module.css";



const Business = (props) => {
  return (
    <div className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={props.businessObject.imageSrc} alt="" />
      </div>
      <h2>{props.businessObject.name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <p>{props.businessObject.address}</p>
          <p>{props.businessObject.city}</p>
          <p>{`${props.businessObject.state} ${props.businessObject.zipCode}`}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{props.businessObject.category.toUpperCase()}</h3>
          <h3 className={styles.rating}>{`${props.businessObject.rating} stars`}</h3>
          <p>{`${props.businessObject.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
