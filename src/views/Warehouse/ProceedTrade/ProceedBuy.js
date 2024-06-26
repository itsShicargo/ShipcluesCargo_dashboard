import React from 'react'
import { Button } from 'components/ui'
import { paymentList } from 'views/Warehouse/TradeForm/options.data'
import NumberFormat from 'react-number-format'
import Success from './Success'
import Failed from './Failed'
import InfoItem from './InfoItem'

const ProceedBuy = (props) => {
    const {
        price,
        cryptoSymbol,
        payWith = '',
        amount,
        status,
        loading,
        onConfirm,
    } = props

    return (
        <div className="mt-4">
            {status === 'SUCCESS' && <Success {...props} />}
            {status === 'FAILED' && <Failed {...props} />}
            {!status && (
                <>
                    <div className="text-center my-8">
                        <p className="mb-2">You will get</p>
                        <h3 className="font-bold">
                            {price} {cryptoSymbol}
                        </h3>
                    </div>
                    <InfoItem
                        label="Pay with"
                        value={(() => {
                            const payment = paymentList.find(
                                (p) => p.value === payWith
                            )
                            return (
                                <div className="flex items-center gap-1">
                                    <img
                                        className="max-w-[35px]"
                                        src={payment.img}
                                        alt=""
                                    />
                                    <span>{payment.label}</span>
                                </div>
                            )
                        })()}
                    />
                    <InfoItem label="Price" value={price} />
                    <InfoItem
                        label="Amount"
                        value={
                            <NumberFormat
                                value={amount}
                                displayType="text"
                                suffix=" USD"
                                thousandSeparator={true}
                                allowNegative={true}
                                decimalScale={2}
                                fixedDecimalScale={true}
                            />
                        }
                    />
                    <InfoItem
                        label="Transaction Fees (0.05%)"
                        value={
                            <NumberFormat
                                value={amount * 0.05}
                                displayType="text"
                                suffix=" USD"
                                thousandSeparator={true}
                                allowNegative={true}
                                decimalScale={2}
                                fixedDecimalScale={true}
                            />
                        }
                    />
                    <InfoItem
                        label="Total"
                        value={
                            <NumberFormat
                                value={amount * 0.05 + amount}
                                displayType="text"
                                suffix=" USD"
                                thousandSeparator={true}
                                allowNegative={true}
                                decimalScale={2}
                                fixedDecimalScale={true}
                            />
                        }
                    />
                    <Button
                        className="mt-6"
                        block
                        variant="solid"
                        onClick={onConfirm}
                        loading={loading}
                    >
                        Confirm
                    </Button>
                </>
            )}
        </div>
    )
}

export default ProceedBuy
