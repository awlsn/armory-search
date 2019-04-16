import React, { Component } from 'react';
import ItemProperties from './ItemProperties'
import SimpleProperties from './SimpleProperties'

class Runeword extends Component {



    render() {
        let { item } = this.props

        return (

            <div className="item row">

                <div className="row" id="{item.index}">

                    <div className="item-left four columns">
                        <span className="item-name diablo_unique">{item.name}</span>
                        <div className="u-cf-ctr">
                            <span className="diablo_white inline;">Runes: </span>
                            <span className="diablo_unique inline;">{item.runes.reduce((runes, thisRune) => runes + ", " + thisRune)}</span>
                        </div>
                        <span className="diablo_white">Sockets: {item.runes.length}</span>
                        <span className="diablo_white">cLvl Req: {item.lvlreq}</span>

                        <div className="u-cf-ctr">
                            <span className="diablo_white" >Items: {item.items.reduce((items, thisItem) => items + ", " + thisItem)}</span>
                        </div>
                    </div>


                    <div className="item-right eight columns">
                        <ItemProperties itemProps={item.props} />
                        {item.armorHelmProps.length > 0 && <span className="no-wrap diablo_white u-cf-ctr">Rune bonuses for: Helm</span>}
                        <SimpleProperties itemProps={item.armorHelmProps} />
                        {item.weaponProps.length > 0 && <span className="no-wrap diablo_white u-cf-ctr">Rune bonuses for: Weapon</span>}
                        <SimpleProperties itemProps={item.weaponProps} />
                        {item.shieldProps.length > 0 && <span className="no-wrap diablo_white u-cf-ctr">Rune bonuses for: Shield</span>}
                        <SimpleProperties itemProps={item.shieldProps} />
                    </div>

                </div>
            </div >


        )
    }

}



export default Runeword;