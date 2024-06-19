import React from 'react';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import useSort from '../hooks/useSort';

const SortableTable = (props) => {
  const { config, data } = props;

  const { sortOrder, sortBy, setSortColumn, sortedData } = useSort(
    data,
    config
  );

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  }
  if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
};

export default SortableTable;
