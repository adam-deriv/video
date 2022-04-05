import { useTable, useSortBy } from 'react-table'
import './VideoAccountBilling.scss';

// convert data in table to json
const data = [
    {
        referenceId: "4571222f6rthswfg9981fr55",
        date: "8/12/2020",
        amount: "$28",
        invoice: 'invoice1',
    },
    {
        referenceId: "4571222f6rthswfg9981fr54",
        date: "7/12/2020",
        amount: "$36",
        invoice: 'invoice2',
    },
    {
        referenceId: "4571222f6rthswfg9981fr53",
        date: "6/12/2020",
        amount: "$14",
        invoice: 'invoice3',
    }
];

const columns = [
    {
        Header: "REFERENCE ID",
        accessor: "referenceId",
    },
    {
        Header: "DATE",
        accessor: "date",
        isSorted: true,
    },
    {
        Header: "AMOUNT",
        accessor: "amount",
    },
    {
        Header: "INVOICE",
        accessor: "invoice",
        disableSortBy: true,
        Cell: ({ cell: { value } }) => (<div className="pdfIcon" onClick={() => downloadInvoice(value)} />)
    }
];

const initialState = {
    sortBy: [
        {
            id: 'date',
            desc: true,
        }
    ]
}

const downloadInvoice = (invoice) => {
    const blob = new Blob([invoice], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${invoice}.pdf`;
    link.click();
};

const Table = () => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
        initialState,
    }, useSortBy);

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render("Header")}
                                <span>
                                    {column.isSorted
                                    ? column.isSortedDesc
                                        ? <div className="arrowDownIcon" />
                                        : <div className="arrowUpIcon" />
                                    : ''}
                                </span>
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;