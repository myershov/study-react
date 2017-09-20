import React from 'react';

const portfolioCategories = [
    'all',
    'panoramas',
    'portraits',
    'macro',
    'journal'
];

const PotrfolioCategoryButtons = (props) => (
    <nav className="tab-menu trigger-victim">

        {portfolioCategories.map((item)=> (
            <li key={item}><a onClick={props.update.bind(this)}>{item}</a></li>
        ))}
    </nav>
);

export default PotrfolioCategoryButtons;