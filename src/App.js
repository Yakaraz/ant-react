import React, { useState } from "react";
import { Avatar, Card, Button, Switch } from "antd";
import Meta from "antd/lib/card/Meta";

const App = (props) => {
  const [disabled, setDisabled] = useState(true);
  const toggle = () => setDisabled(!disabled);
  return (
    <Card
      style={{
        width: 300,
        margin: "2em",
      }}
      cover={<img alt="example" src="https://via.placeholder.com/300" />}
      type="primary"
    >
      <Meta
        avatar={<Avatar src="https://via.placeholder.com/50" />}
        title="Card title"
        description="This is the description"
        style={{ marginBottom: "1em" }}
      />
      <Switch
        disabled={disabled}
        defaultChecked
        style={{ marginBottom: "1em" }}
      />
      <br />
      <Button type="primary" onClick={toggle}>
        {disabled ? "Enable" : "Disable"} toggle
      </Button>
    </Card>
  );
};

export default App;
