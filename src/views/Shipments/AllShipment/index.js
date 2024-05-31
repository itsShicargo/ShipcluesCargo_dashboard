// import React from 'react'
// import AllShipment from './components/AllShipment'

// function Shipment() {
//   return (
//     <>
//         <AllShipment />
//     </>
//   )
// }

// export default Shipment

import React, { lazy } from 'react'
import { Tabs } from 'components/ui'
import { AdaptableCard, Container } from 'components/shared'
const AllShipment = lazy(() => import ( './components/AllShipment'))



const { TabNav, TabList } = Tabs



const Shipment = () => {


    return (
        <Container>
            <AdaptableCard>
              <AllShipment/>
            </AdaptableCard>
        </Container>
    )
}

export default Shipment
