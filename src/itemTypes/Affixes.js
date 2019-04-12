import React, { Component } from 'react';
import SimpleProperties from './SimpleProperties'
import ItemList from '../ItemList';

class Affixes extends Component {

    render() {
        let { item } = this.props

        let itemList = item.items.join(", ");
        let notList = item.eItems.join(", ");
        return (

            <tr>
                <td>
                    <span className={"no-wrap diablo_" + item.color}>{item.name}</span>
                </td>
                <td>
                    {item.props}
                </td>
                <td>
                    {itemList}
                    {item.eItems.length > 0 &&
                        <p><span className="diablo_red">NOT:<br />{notList}</span></p>}
                </td>
            </tr>



        )
    }

}

export default Affixes;
