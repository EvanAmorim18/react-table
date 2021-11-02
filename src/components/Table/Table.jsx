import { useState, useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { COLUMNS, DATA } from './Data';
import GlobalFilter from './GlobalFilter';
import * as SC from './Table.styles';

const Table = () => {
    const [users, setUsers] = useState([]);
    DATA.then(val => setUsers(val));

    const columns = useMemo(() => COLUMNS, []);
    const data = useMemo(() => users, [users]);

    const tableInstance = useTable({
        columns,
        data 
    },
    useGlobalFilter,
    useSortBy);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance;

    const { globalFilter } = state;

    return (
        <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

            <SC.Table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <SC.Tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <SC.Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : ''}
                                    </span>
                                </SC.Th>
                            ))}
                        </SC.Tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <SC.Tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <SC.Td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </SC.Td>
                                    )
                                })}
                            </SC.Tr>
                        )
                    })}
                </tbody>
            </SC.Table>
        </>
    );
}

export default Table;