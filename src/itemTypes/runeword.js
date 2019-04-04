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

                        <div style="text-align: center; display: block;">
                            <span className="diablo_white" style="display: inline;">Runes: </span>
                            <span className="diablo_unique" style="display: inline;">El, El, El</span>
                        </div>

                        <span className="diablo_white">Sockets: 3</span>
                        <span className="diablo_white">cLvl Req: 11</span>

                        <div style="text-align: center; display: block;">
                            <span className="diablo_white" style="display: inline;">Items: Paladin Item</span>
                        </div>

                        <div className="item-right eight columns">
                            <ItemProperties itemProps={item.baseProps} />
                            <ItemProperties itemProps={item.props} />
                            <span className="no-wrap diablo_white" style="display: block; text-align: center;">Rune bonuses for: Weapon</span>
                        </div>
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
        return <p>Search to find items.</p>
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

export default Runeword;