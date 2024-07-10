import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import { USERS } from '../data';

const Table = () => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('policyNumber', {
      cell: (info) => {
        const policyNumber = info.getValue();
        const policyLink = `https://policies.example.com/${policyNumber.replace(/<\/?[^>]+(>|$)/g, "")}`;
        return (
          <a href={policyLink} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">
            {policyNumber}
          </a>
        );
      },
      header: 'Policy Number',
    }),
    columnHelper.accessor('name', {
      cell: (info) => <span className="text-black">{info.getValue()}</span>,
      header: 'Name',
    }),
    columnHelper.accessor('effectiveDate', {
      cell: (info) => <span className="text-black">{info.getValue()}</span>,
      header: 'Effective Date',
    }),
  ];

  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = useState([]);

  const [data] = useState(() => USERS);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="p-2 max-w-5xl mx-auto text-black bg-gray">
      <div className="flex justify-between mb-2">
        <div className="w-full flex items-center gap-1">
          <input
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500 text-black placeholder-custom"
            placeholder="Search all columns..."
          />
        </div>
      </div>
      <table className="border border-gray-700 w-full text-left max-w-screen-2xl">
        <thead className="bg-blue-300 text-black">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="capitalize px-3.5 py-2 cursor-pointer text-black"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                  {{
                    asc: ' 🔼',
                    desc: ' 🔽'
                  }[header.column.getIsSorted()] ?? null}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row, i) => (
              <tr key={row.id} className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-100'}`}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-3.5 py-2 text-black">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="text-center h-32">
              <td colSpan={3} className="text-black">No Record Found!</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex items-center justify-end mt-2 gap-2">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="p-1 border border-black-300 px-2 disabled:opacity-30 text-black"
        >
          {'<'}
        </button>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="p-1 border border-black-300 px-2 disabled:opacity-30 text-black"
        >
          {'>'}
        </button>

        <span className="flex items-center gap-1">
          <div className="flex text-black">Page</div>
          <strong className="text-black flex">
            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </span>
        <span className="flex items-center gap-1 text-black">
          | Go to page:
          <input
            type="number"
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            className="border p-1 rounded w-16 text-black"
          />
        </span>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
          className="p-2 text-black"
        >
          {[10, 20, 30, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Table;
