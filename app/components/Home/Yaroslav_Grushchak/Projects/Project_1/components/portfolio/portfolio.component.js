import React from 'react';
// import './portfolio.component.css';
import './portfolio.component.styl';
import PotrfolioCategoryButtons from '../portfolio-category-buttons/portfolio-category-buttons';

const portfolio = [
    {
        id: 1,
        class_name: 'thumb-1',
        section: ['panoramas', 'macro']
    },
    {
        id: 2,
        class_name: 'thumb-2',
        section: ['panoramas', 'journal']
    },
    {
        id: 3,
        class_name: 'thumb-3',
        section: ['panoramas', 'macro']
    },
    {
        id: 4,
        class_name: 'thumb-4',
        section: ['panoramas', 'journal']
    },
    {
        id: 5,
        class_name: 'thumb-5',
        section: ['portraits', 'macro']
    },
    {
        id: 6,
        class_name: 'thumb-6',
        section: ['portraits', 'journal']
    },
    {
        id: 7,
        class_name: 'thumb-7',
        section: ['portraits', 'macro']
    },
    {
        id: 8,
        class_name: 'thumb-8',
        section: ['portraits', 'journal']
    }
];

class Portfolio extends React.Component
{
    constructor(){
        super();
        this.portfolio=portfolio;
        this.state={section: 'all', filteredPortfolio: portfolio};
    }
    isEqual(item, section){
        let equal = false;

        item.section.forEach((s) => {
            if(s == section){
                equal = true;
                return ;
            }
        });
        return equal;
    }
    update(e){
        let section = e.target.text.toLowerCase();
        let filteredPortfolio;

        if(section != 'all'){                       //фильтрация элементов, если выбран любая категория, кроме 'all'
            filteredPortfolio = this.portfolio.filter((item) => {
                return this.isEqual(item, section);
            });

        }
        else{
            filteredPortfolio=this.portfolio;
        }

        this.setState({
            section: section,
            filteredPortfolio: filteredPortfolio
        });
    }
    render(){
        return (
            <div className="portfolio container-fluid">

                <a id="portfolio"></a>

                <section className="container tab-wrapper">
                    <h2 className="stn-heading">Portfolio</h2>

                    <span className="main-nav-trigger trigger-nav glyphicon glyphicon-menu-hamburger"></span>
                    <PotrfolioCategoryButtons update={this.update.bind(this)}/>

                    <div className="row thumbs-row">
                        {
                            this.state.filteredPortfolio.map(item =>
                                <div key={item.id} className="col-lg-3 col-md-6 col-sm-6"><a href="#!" className={item.class_name}></a></div>
                            )
                        }
                    </div>

                </section>
            </div>
        );
}
};

export default Portfolio;