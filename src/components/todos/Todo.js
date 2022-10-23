import { List } from "antd";
import React from "react";

const { Item } = List;

const Todo = ({ id, onClick, completed, text }) => (
  <Item
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
    onClick={onClick}
  >
    {text}
  </Item>
);
export default Todo;
