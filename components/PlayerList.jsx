import React from 'react';
import { Table } from 'antd';

const PlayerList = ({ className, columns, payload }) => (
  <div className={className}>
    <Table
      columns={columns}
      dataSource={payload}
      rowKey="ID"
    />
  </div>
);

export default PlayerList;
