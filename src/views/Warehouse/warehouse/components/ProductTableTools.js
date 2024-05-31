import React from 'react'
import { Button} from 'components/ui'
import { HiPlusCircle, HiUpload } from 'react-icons/hi'
// import ProductFilter from './ProductFilter'
import { Link } from 'react-router-dom'

const ProductTableTools = () => {
    return (
        <div className="flex flex-col lg:flex-row lg:items-center">
                {/* <h1>Hello world</h1> */}
            {/* <ProductTableSearch /> */}
            {/* <ProductFilter /> */}

            <Link
                className="block lg:inline-block md:mb-0 mb-4"
                to="/app/AddWarehouse/AddWarehouse"
            >
                
                <Button block variant="solid" size="sm" icon={<HiPlusCircle />}>
                New WareHouse
                </Button>
            </Link>
            <Link
                className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
                to="/data/product-list.csv"
                target="_blank"
                download
            >
                <Button variant="solid" size="sm" icon={<HiUpload />}>
                  Bulk Upload
                </Button>
            </Link>
            
        </div>
    )
}

export default ProductTableTools
