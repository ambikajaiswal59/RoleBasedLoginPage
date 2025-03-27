import React from "react";

export const Table = ({ children }) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <table className="w-full text-left border-collapse">
        {children}
      </table>
    </div>
  );
};

export const TableHead = ({ children }) => (
  <thead className="bg-gray-100">{children}</thead>
);

export const TableRow = ({ children }) => (
  <tr className="border-b">{children}</tr>
);

export const TableCell = ({ children }) => (
  <td className="p-3">{children}</td>
);

export const TableHeaderCell = ({ children }) => (
  <th className="p-3 font-semibold">{children}</th>
);
