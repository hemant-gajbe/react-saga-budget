import React from 'react'
import { Statistic } from 'semantic-ui-react';

function DisplayBalance(props) {
    const {title, value, color='black', size='tiny'} = props
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{ textAlign: "left" }}>
                {title}
            </Statistic.Label>
            <Statistic.Value>
                {value}
            </Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance
