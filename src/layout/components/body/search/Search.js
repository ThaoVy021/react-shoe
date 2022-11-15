import React from "react";
import "../../../../index.css";
import { Input, Space } from "antd";
import "antd/dist/antd.min.css";

export default function Search() {
  return (
    <Space direction="vertical">
      <Input placeholder="Search" enterbutton="true" />
    </Space>
  );
}
