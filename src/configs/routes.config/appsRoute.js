import React from 'react'
import { APP_PREFIX_PATH } from 'constants/route.constant'
import { ADMIN, USER } from 'constants/roles.constant'

const appsRoute = [
    {
        key: 'appsProject.dashboard',
        path: `${APP_PREFIX_PATH}/project/dashboard`,
        component: React.lazy(() => import('views/project/ProjectDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsProject.projectList',
        path: `${APP_PREFIX_PATH}/project/project-list`,
        component: React.lazy(() => import('views/project/ProjectList')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsProject.scrumBoard',
        path: `${APP_PREFIX_PATH}/project/scrum-board`,
        component: React.lazy(() => import('views/project/ScrumBoard')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
        },
    },
    {
        key: 'appsProject.issue',
        path: `${APP_PREFIX_PATH}/project/issue`,
        component: React.lazy(() => import('views/project/Issue')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrm.dashboard',
        path: `${APP_PREFIX_PATH}/crm/dashboard`,
        component: React.lazy(() => import('views/crm/CrmDashboard')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrm.calendar',
        path: `${APP_PREFIX_PATH}/crm/calendar`,
        component: React.lazy(() => import('views/crm/Calendar')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsCrm.customers',
        path: `${APP_PREFIX_PATH}/crm/customers`,
        component: React.lazy(() => import('views/crm/Customers')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Customers',
        },
    },
    {
        key: 'appsCrm.customerDetails',
        path: `${APP_PREFIX_PATH}/crm/customer-details`,
        component: React.lazy(() => import('views/crm/CustomerDetail')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Customer Details',
            headerContainer: true,
        },
    },
    {
        key: 'appsCrm.mail',
        path: `${APP_PREFIX_PATH}/crm/mail`,
        component: React.lazy(() => import('views/crm/Mail')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'appsCrm.mail',
        path: `${APP_PREFIX_PATH}/crm/mail/:category`,
        component: React.lazy(() => import('views/crm/Mail')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
            footer: false,
        },
    },
    {
        key: 'appsSales.dashboard',
        path: `${APP_PREFIX_PATH}/sales/dashboard`,
        component: React.lazy(() => import('views/Shipments/SalesDashboard')),
        authority: [ADMIN, USER],
    },

    
    // {
    //     key: 'appsSales.productList',
    //     path: `${APP_PREFIX_PATH}/sales/product-list`,
    //     component: React.lazy(() => import('views/Shipments/ProductList')),
    //     authority: [ADMIN, USER],
    // },
    // {
    //     key: 'appsSales.productEdit',
    //     path: `${APP_PREFIX_PATH}/sales/product-edit/:productId`,
    //     component: React.lazy(() => import('views/Shipments/ProductEdit')),
    //     authority: [ADMIN, USER],
    //     meta: {
    //         header: 'Edit Product',
    //     },
    // },
    // {
    //     key: 'appsSales.productNew',
    //     path: `${APP_PREFIX_PATH}/sales/product-new`,
    //     component: React.lazy(() => import('views/Shipments/ProductNew')),
    //     authority: [ADMIN, USER],
    //     meta: {
    //         header: 'Add New Product',
    //     },
    // },
    // {
    //     key: 'appsSales.orderList',
    //     path: `${APP_PREFIX_PATH}/sales/order-list`,
    //     component: React.lazy(() => import('views/Shipments/OrderList')),
    //     authority: [ADMIN, USER],
    // },
    // {
    //     key: 'appsSales.orderDetails',
    //     path: `${APP_PREFIX_PATH}/sales/order-details/:orderId`,
    //     component: React.lazy(() => import('views/Shipments/OrderDetails')),
    //     authority: [ADMIN, USER],
    // },
    // {
    //     key: 'appsCrypto.dashboard',
    //     path: `${APP_PREFIX_PATH}/crypto/dashboard`,
    //     component: React.lazy(() => import('views/Warehouse/CryptoDashboard')),
    //     authority: [ADMIN, USER],
    // },
    // {
    //     key: 'appsCrypto.portfolio',
    //     path: `${APP_PREFIX_PATH}/crypto/portfolio`,
    //     component: React.lazy(() => import('views/Warehouse/Portfolio')),
    //     authority: [ADMIN, USER],
    //     meta: {
    //         header: 'Portfolio',
    //     },
    // },
    // {
    //     key: 'appsCrypto.market',
    //     path: `${APP_PREFIX_PATH}/crypto/market`,
    //     component: React.lazy(() => import('views/Warehouse/Market')),
    //     authority: [ADMIN, USER],
    //     meta: {
    //         header: 'Market',
    //     },
    // },
    // {
    //     key: 'appsCrypto.wallets',
    //     path: `${APP_PREFIX_PATH}/crypto/wallets`,
    //     component: React.lazy(() => import('views/Warehouse/Wallets')),
    //     authority: [ADMIN, USER],
    //     meta: {
    //         header: 'Wallets',
    //     },
    // },
    {
        key: 'appsknowledgeBase.helpCenter',
        path: `${APP_PREFIX_PATH}/knowledge-base/help-center`,
        component: React.lazy(() => import('views/knowledge-base/HelpCenter')),
        authority: [ADMIN, USER],
        meta: {
            pageContainerType: 'gutterless',
        },
    },
    {
        key: 'appsknowledgeBase.article',
        path: `${APP_PREFIX_PATH}/knowledge-base/article`,
        component: React.lazy(() => import('views/knowledge-base/Article')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsknowledgeBase.manageArticles',
        path: `${APP_PREFIX_PATH}/knowledge-base/manage-articles`,
        component: React.lazy(() =>
            import('views/knowledge-base/ManageArticles')
        ),
        authority: [ADMIN, USER],
        meta: {
            header: 'Manage Articles',
            extraHeader: React.lazy(() =>
                import(
                    'views/knowledge-base/ManageArticles/components/PanelHeader'
                )
            ),
            headerContainer: true,
        },
    },
    {
        key: 'appsknowledgeBase.editArticle',
        path: `${APP_PREFIX_PATH}/knowledge-base/edit-article`,
        component: React.lazy(() => import('views/knowledge-base/EditArticle')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsshipment.allshipment',
        path: `${APP_PREFIX_PATH}/shipment/allshipment/:tab`,
        component: React.lazy(() => import('views/Shipments/AllShipment')),
        authority: [ADMIN, USER],
        meta: {
            header: 'Allshipment',
            headerContainer: true,
        },
    },
    {
        key: 'appsAccount.invoice',
        path: `${APP_PREFIX_PATH}/account/invoice/:id`,
        component: React.lazy(() => import('views/account/Invoice')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsAccount.activityLog',
        path: `${APP_PREFIX_PATH}/account/activity-log`,
        component: React.lazy(() => import('views/account/ActivityLog')),
        authority: [ADMIN, USER],
    },
    {
        key: 'appsAccount.kycForm',
        path: `${APP_PREFIX_PATH}/account/kyc-form`,
        component: React.lazy(() => import('views/account/KycForm')),
        authority: [ADMIN, USER],
    },

    // Shipmemt route Start ...

    {
        key: 'allshipment',
        path: `${APP_PREFIX_PATH}/shipment/allshipment`,
        component: React.lazy(() => import('views/Shipments/AllShipment')),
        authority: [ADMIN, USER],
    },

    {
        key: 'shipment',
        path: `${APP_PREFIX_PATH}/shipment/create-shipment`,
        component: React.lazy(() => import('views/Shipments/CreateShipment')),
        authority: [ADMIN, USER],
    },

    {
        key: 'pickuprequest',
        path: `${APP_PREFIX_PATH}/shipment/pickuprequest`,
        component: React.lazy(() => import('views/Shipments/PickupRequest')),
        authority: [ADMIN, USER],
    },

    //  Warehouse
    {
        key: 'werehouse',
        path: `${APP_PREFIX_PATH}/werehouse/werehouse`,
        component: React.lazy(() => import('views/Warehouse/warehouse')),
        authority: [ADMIN, USER],
    },
    {
        key: 'AddWarehouse',
        path: `${APP_PREFIX_PATH}/AddWarehouse/AddWarehouse`,
        component: React.lazy(() => import('views/Warehouse/Add Warehouse')),
        authority: [ADMIN, USER],
    },

    // 

    {
        key: 'appsAccount.kycForm',
        path: `${APP_PREFIX_PATH}/shipment`,
        component: React.lazy(() => import('views/account/KycForm')),
        authority: [ADMIN, USER],
    },
]

export default appsRoute
