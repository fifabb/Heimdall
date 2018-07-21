import React from 'react';

export default {
  columns: [{
    title: '',
    dataIndex: 'avatar',
  }, {
    title: '评分',
    dataIndex: 'Overall',
  }, {
    title: '姓名',
    dataIndex: 'Chinese Name',
    render: text => (
      <a href="javascript:;">
        {text}
      </a>
    ),
  }, {
    title: '位置',
    dataIndex: 'Position',
  }, {
    title: '俱乐部',
    dataIndex: 'club_logo',
  }, {
    title: '国家',
    dataIndex: 'nation_logo',
  }, {
    title: '活动',
    dataIndex: 'activity',
  }, {
    title: '步频',
    dataIndex: 'pace',
  }, {
    title: '射术',
    dataIndex: 'shooting',
  }, {
    title: '传球',
    dataIndex: 'passing',
  }, {
    title: '灵活',
    dataIndex: 'agilty',
  }, {
    title: '体格',
    dataIndex: 'body',
  }, {
    title: '合计',
    dataIndex: 'total',
  }],
};
