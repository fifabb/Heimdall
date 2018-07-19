import { Table } from 'antd';

const PlayerList = ({ className, columns, payload }) => (
  <div className={className}>
    <Table
      columns={columns}
      dataSource={payload}
    />
  </div>
);

export default PlayerList;
