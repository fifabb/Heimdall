import {
  Form, Row, Col, Input, Button,
} from 'antd';

const FormItem = Form.Item;

const Search = props => (
  <div>
    <Form
      className="search-form"
    >
      <Row>
        <Col span={6}>
          <FormItem label="球员姓名">
            <Input />
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="位置">
            <Input />
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="活动">
            <Input />
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="国家">
            <Input />
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="联赛">
            <Input />
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="球队">
            <Input />
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="天赋">
            <Input />
          </FormItem>
        </Col>
        <Col span={6}>
          <FormItem label="常用脚">
            <Input />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
          <Button className="btn-clear">
            清空
          </Button>
        </Col>
      </Row>
    </Form>
    <style jsx global>
      {`
      .search-form {
        padding: 24px;
        background: #fbfbfb;
        border: 1px solid #d9d9d9;
        borderR-radius: 6px;

        & .ant-form-item {
          display: flex;
        }
        & .ant-form-item-label {
          width: 100px;
        }
        & .ant-form-item-control-wrapper {
          flex: 1;
        }

        & .btn-clear {
          margin-left: 8px;
        }
      }
    `}
    </style>
  </div>
);

export default Search;
