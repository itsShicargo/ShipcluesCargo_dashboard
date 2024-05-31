import React from 'react'
import "./AllShipmennt.css"

import {Tabs} from 'components/ui'
// import ShipmentTableTools from './ShimentTableTools'
import Orders from './Orders';
import NeedAction from './NeedAction';
import PendingPickup from './PendingPickup';
import PickupScheduled from './PickupScheduled';
import InTransit from './InTransit';
import RTO from './RTO';
import Delivered from './Delivered';


const { TabNav, TabList, TabContent } = Tabs

const AllShipment = () => {
    return (
        <div>
            <Tabs defaultValue="tab1">
                <TabList>
                    <TabNav value="tab1">Orders</TabNav>
                    <TabNav value="tab2">Need Action</TabNav>
                    <TabNav value="tab3">Pending Pickups</TabNav>
                    <TabNav value="tab4">Pickup Scheduled</TabNav>
                    <TabNav value="tab5">In Transit</TabNav>
                    <TabNav value="tab6">RTO</TabNav>
                    <TabNav value="tab7">Delivered</TabNav>
                    <TabNav value="tab8">All Shipments</TabNav>
                </TabList>
                {/* <ShipmentTableTools /> */}
                <div className="p-4">
                    <TabContent value="tab1">
                        <Orders />
                    </TabContent>
                    <TabContent value="tab2">
                        

                        <NeedAction/>
                    </TabContent>
                    <TabContent value="tab3">
                       <PendingPickup />
                    </TabContent>
                    <TabContent value="tab4">
                        <PickupScheduled />
                        <p className='flex justify-center items-center mt-40'>
                        No records to display

                        </p>
                    </TabContent>
                    <TabContent value="tab5">
                        <InTransit /> 
                        <p className='flex justify-center items-center mt-40'>
                        No records to display

                        </p>
                    </TabContent>
                    <TabContent value="tab6">
                        <RTO />
                        <p className='flex justify-center items-center mt-40'>
                        No records to display

                        </p>
                    </TabContent>
                    <TabContent value="tab7">
                        <Delivered />
                        <p className='flex justify-center items-center mt-40'>
                        No records to display
                        </p>
                    </TabContent>
                    <TabContent value="tab8">
                        <NeedAction />
                      
                    </TabContent>
                </div>
            </Tabs>
        </div>
    )
}

export default AllShipment