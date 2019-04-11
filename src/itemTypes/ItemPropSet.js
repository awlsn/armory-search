import React from 'react'

function ItemPropSet(props) {
    const { propSet } = props;
    let ps = [];

    for (let i = 0; i < propSet.length; i += 2) {
        ps.push({ color: propSet[i], text: propSet[i + 1] })
    }

    return ps.map((prop, i) => <span key={i} className={'no-wrap diablo_' + prop.color}> {prop.text}</span>);

}

export default ItemPropSet