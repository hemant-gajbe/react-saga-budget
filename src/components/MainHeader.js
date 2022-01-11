import React from 'react'
import { Header } from 'semantic-ui-react';

function MainHeader(props) {
    const {title, type = 'h1'} = props
    return (
        <div>
            <Header as={type}>
                {title}
            </Header>
        </div>
    )
}

export default MainHeader
