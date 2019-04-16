import React, { Component } from 'react';
import SimpleProperties from './SimpleProperties'

class Crafting extends Component {

    render() {
        let { item } = this.props
        return (

            <div className="item row">

                <div className="row" id="{item.index}">

                    <div className="item-left four columns">
                        <span className="item-graphic "><img alt="" src={item.imageFile} /></span>
                        <span className="item-name diablo_unique">{item.name}</span>
                        <span className="item-type capitalize">{item.type}</span>
                    </div>

                    <div className="item-right eight columns">
                        <SimpleProperties key="generic-props" color="white" itemProps={item.props} />


                    </div>
                </div>
            </div >


        )
    }

}

export default Crafting;
