import React, { Component } from 'react';
class Runeword extends Component {



    render() {
        let { item } = this.props

        return (

            <div className="item row">

                <div className="row" id="{item.index}">

                    <div className="item-left four columns">
                        <span className="item-graphic "><img alt="" src={'/images/items/' + item.imageFile} /></span>
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
                        <RuneProps itemProps={item.armorHelmProps} />
                        {item.weaponProps.length > 0 && <span className="no-wrap diablo_white u-cf-ctr">Rune bonuses for: Weapon</span>}
                        <RuneProps itemProps={item.weaponProps} />
                        {item.shieldProps.length > 0 && <span className="no-wrap diablo_white u-cf-ctr">Rune bonuses for: Shield</span>}
                        <RuneProps itemProps={item.shieldProps} />
                    </div>

                </div>
            </div >


        )
    }

}


function ItemProperties(props) {

    const { itemProps } = props;

    if (itemProps.length > 0) {
        const propHTML = (

            itemProps.map((itemPropSet) =>
                <span className="item-property">
                    <ItemPropSet propSet={itemPropSet} />
                </span>

            )

        );
        return (propHTML)
    } else {
        return ""
    }

}

function ItemPropSet(props) {
    const { propSet } = props;
    let ps = [];

    for (let i = 0; i < propSet.length; i += 2) {
        ps.push({ color: propSet[i], text: propSet[i + 1] })
    }

    const psHTML = ps.map((prop) => <span className={'no-wrap diablo_' + prop.color}> {prop.text}</span>);
    return psHTML;
}


function RuneProps(props) {
    const { itemProps } = props
    //console.log(itemProps);
    if (itemProps.length > 0) {
        let runeProps = itemProps.map((itemPropSet) =>
            (<span className="item-property">
                <span className='no-wrap diablo_blue'>{itemPropSet}</span>
            </span>)
        )
        return (runeProps)
    } else {
        return "";
    }
}



export default Runeword;