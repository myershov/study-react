import React from 'react';

const ServicesItem = (props) => (
    <article className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
        <div className={props.class_name}></div>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </article>
);

export default ServicesItem;