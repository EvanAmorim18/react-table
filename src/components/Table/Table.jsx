import { useState, useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter } from 'react-table';
import { COLUMNS, DATA } from './columns';
import GlobalFilter from './GlobalFilter';

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

            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? '▼' : '▲') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default Table;