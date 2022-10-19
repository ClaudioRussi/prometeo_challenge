import { Button, Form, Input, Select } from 'antd';
import axios from 'axios';
import React, {useContext, useEffect, useState} from 'react';
import SessionContext from '../contexts/SessionContext';
const { Option } = Select;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};
const LoginPage = () => {
  const {saveSession} = useContext(SessionContext);
  const [form] = Form.useForm();
  const [banks, setBanks] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api/providers/")
    .then((response) => {
      console.log(response.data);
      setBanks(response.data);
    }).catch((error) => {
      console.log(error)
    }, []);
  })
  const onFinish = (values) => {
    axios.post("http://localhost:8000/api/login/", values)
    .then((response) => {
      saveSession(response.data.key);
    }).catch((error) => {
      console.log(error)
    });
  };
  return (
    <Form style={{textAlign: "left"}} {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item
        style={{textAlign: "left"}}
        name="username"
        label="Username"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        style={{textAlign: "left"}}
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        style={{textAlign: "left"}}
        name="bank"
        label="Bank"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          {
            banks.map(bank => (
              <Option key={bank.code} value={bank.code}>{bank.name}</Option>
            ))
          }
          
        </Select>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;