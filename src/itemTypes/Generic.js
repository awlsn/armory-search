import React, { Component } from 'react';
import ItemProperties from './ItemProperties'
class Generic extends Component {

    render() {
        let { item } = this.props
        return (

            <div className="item row">

                <div className="row" id="{item.index}">

                    <div className="item-left four columns">
                        <span className="item-graphic "><img alt="" src={'/images/items/' + item.imageFile} /></span>
                        <span className="item-name diablo_unique">{item.name}</span>
                        <span className="item-type">{item.item}</span>
                    </div>

                    <div className="item-right eight columns">
                        <ItemProperties key="generic-props" itemProps={item.props} />


                    </div>
                </div>
            </div >


        )
    }

}

export default Generic;
