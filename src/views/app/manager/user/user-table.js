import React from 'react'

import { Row } from "reactstrap";
import { Colxx } from '../../../../components/common/CustomBootstrap'
import { ReactTableAdvancedCard } from '../../../../containers/user/ReactTableCards'

function UserTable() {
    return (
        <Row>
            <Colxx xxs="12">
                <ReactTableAdvancedCard />
            </Colxx>
        </Row>
    )
}

export default UserTable
