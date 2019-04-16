import React from 'react';
import ItemProperties from './ItemProperties'


function Unique(props) {


    let { item } = props
    return (

        <div className="item row">

            <div className="row" id="{item.index}">

                <div className="item-left four columns">
                    <span className="item-graphic "><img alt="" src={'/images/items/' + item.imageFile} /></span>
                    <span className="item-name diablo_unique">{item.name}</span>
                    <span className="item-type">{item.item}</span>
                </div>

                <div key={item.index} className="item-right eight columns">
                    <ItemProperties key="unique-baseProps" itemProps={item.baseProps} />
                    <ItemProperties key="unique-props" itemProps={item.props} />
                </div>
            </div>
        </div >


    )
}





export default Unique;
