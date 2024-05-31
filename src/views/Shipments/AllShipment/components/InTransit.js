

import { useState, useMemo } from 'react';
import { Table, Pagination, Select } from 'components/ui';
import "./AllShipmennt.css"


import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table';

const { Tr, Th, Td, THead, TBody } = Table;

const tableData = () => {
    const arr = [];
    for (let i = 0; i < 0; i++) {
        arr.push({
            courier: `Courier `,
            fromcity: `Faridabad(Haryana)`,
            tocity: `Faridabad(Haryana)`,
            package:`34 units Dead Wt:782.00 kg.Volumetric wt:120.67 kg`,
            status:`Cancelled`,
            currentlocation:`24 May, 2024 10:45 AM`,
            waybill:`20904211480846`,
            totalboxes:`1 units Dead Wt0.10 kg.Volumetric Wt. 1.00 kg.`,
            shipdate:`shipdate`,
            edd:``

        });
    }
    return arr;
};

const pageSizeOption = [
    { value: 10, label: '10 / page' },
    { value: 20, label: '20 / page' },
    { value: 30, label: '30 / page' },
    { value: 40, label: '40 / page' },
    { value: 50, label: '50 / page' },
];

const InTransit = () => {
    const columns = useMemo(
        () => [
            {
                header: 'Waybill Number',
                accessorKey: 'waybill',
            },
            
            {
                header: `Courier`,
                accessorKey: 'courier',
            },
           
            {
                header: 'To City',
                accessorKey: 'tocity',
            },
            {
                header: 'Package details (wt.in kg) ',
                accessorKey: 'package',
            },
            {
                header: 'From City',
                accessorKey: 'fromcity',
            },
        
            {
                header: 'Status',
                accessorKey: 'status',
            },
            
            {
                header: 'Current Location ',
                accessorKey: 'currentlocation',
            },
            {
                header: 'Ship Date',
                accessorKey: 'shipdate',
            },
            {
                header: 'EDD (Day To EDD)',
                accessorKey: 'edd',
            },
            {
                header: 'Actions',
                accessorKey: 'action',
            },
            
        ],
        []
    );

    const [data] = useState(() => tableData());

    const table = useReactTable({
        data,
        columns,
        // Pipeline
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    const onPaginationChange = (page) => {
        table.setPageIndex(page - 1);
    };

    const onSelectChange = (value = 0) => {
        table.setPageSize(Number(value));
    };

    return (
        <div className="max-h-[500px] overflow-y-auto">
            <Table className="table-auto">
                <THead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <Tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <Th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                    >
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </Th>
                                );
                            })}
                        </Tr>
                    ))}
                </THead>
                <TBody>
                    {table.getRowModel().rows.map((row) => {
                        return (
                            <Tr key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    return (
                                        <Td key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </Td>
                                    );
                                })}
                            </Tr>
                        );
                    })}
                </TBody>
            </Table>
            <div className="flex items-center justify-between mt-4">
                <Pagination
                    pageSize={table.getState().pagination.pageSize}
                    currentPage={table.getState().pagination.pageIndex + 1}
                    total={data.length} 
                    onChange={onPaginationChange}
                />
                <div style={{ minWidth: 130 }}>
                    <Select
                        size="sm"
                        isSearchable={false}
                        value={pageSizeOption.filter(
                            (option) =>
                                option.value ===
                                table.getState().pagination.pageSize
                        )}
                        options={pageSizeOption}
                        onChange={(option) => onSelectChange(option?.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default InTransit;
