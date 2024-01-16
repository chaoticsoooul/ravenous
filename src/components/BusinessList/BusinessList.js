import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = (props) => {

  

  return (
    <div className={styles.BusinessList}>

      {props.data.map(business =>
      <Business businessObject={business} />)
     }
      
    </div>
  );
};

export default BusinessList;
