import React, { Fragment } from 'react';

const Table = ({ data, config }) => {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData, index) => {
    const renderedCells = config.map((column, index) => {
      return (
        <td className="p-3" key={index}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={index}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
