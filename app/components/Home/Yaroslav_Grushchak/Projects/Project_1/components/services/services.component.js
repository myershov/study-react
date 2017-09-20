import React from 'react';
// import './services.component.css';
import './services.component.styl';
import ServicesItem from '../services-item/services-item.component';

import services from '../../shared/services.data';

const Services = () => (
    <div className="services container-fluid">
        <a id="services"></a>
        <section className="container">
            <h2 className="stn-heading">Services</h2>

            <div className="row">
                {services.map((elem) =>
                    <ServicesItem
                        key={elem.id}
                        class_name={elem.class_name}
                        title={elem.title}
                        text={elem.text} />
                )}
            </div>
        </section>
    </div>
);

export default Services;