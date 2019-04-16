import React, { Component } from 'react';
import SimpleProperties from './SimpleProperties'

class FullSet extends Component {

    render() {
        let { item } = this.props
        //h5: style="text-align: center; width: 100%"
        //partial: style="display:block; text-align: center; font-weight: bold;"
        //full: style="margin-top: 10px; display:block; text-align: center; font-weight: bold;"
        return (

            <div className="item row">

                <div className="row u-cf-ctr" id={item.index}>

                    <h5 className="diablo_green">{item.name}</h5>
                    <span className="item-property  b block">Partial Set Bonus</span>
                    <SimpleProperties key="partial-set-props" color="green" itemProps={item.partialProps} />
                    <span className="item-property b block m-top-10" >Complete Set Bonus</span>
                    <SimpleProperties key="full-set-props" color="gold" itemProps={item.fullProps} />

                </div>
            </div >


        )
    }

}


export default FullSet;
