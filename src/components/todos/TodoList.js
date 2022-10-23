import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoAdded, todoToggled } from "./todosSlice";
import Todo from "./Todo";
import { Button, Col, Form, Input, List, Row, Typography } from "antd";

const { Search } = Input;

const TodoList = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  let [count, setCount] = useState(0);
  const todos = useSelector((state) => state.todos);

  const onFinish = (values) => {
    values &&
      dispatch(todoAdded({ text: values.todo, id: count })) &&
      setCount(++count);
    form.resetFields();
  };
  return (
    <Row justify="center">
      <Col span={20}>
        <Row justify="center">
          <Typography.Title>Vos tout doux.</Typography.Title>
        </Row>
      </Col>
      <Col span={20}>
        <Form
          form={form}
          name="todos"
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Tout doux"
            name="todo"
            rules={[
              {
                required: true,
                message: "Ajouter votre tout doux",
              },
            ]}
          >
            <Search
              placeholder="Que faire... "
              allowClear
              preserve="false"
              enterButton={<Button htmlType="submit">Ajouter</Button>}
            />
          </Form.Item>
        </Form>
        <List
          size="small"
          bordered
          dataSource={todos}
          renderItem={(todo) => (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => dispatch(todoToggled(todo.id))}
            />
          )}
        />
      </Col>
    </Row>
  );
};

export default TodoList;
