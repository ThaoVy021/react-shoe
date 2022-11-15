import React from "react";
import { HeartTwoTone } from "@ant-design/icons";
import "../../../../index.css";
import "antd/dist/antd.min.css";
import { Space } from "antd";

export default function Favourites() {
  return (
    <Space>
      <HeartTwoTone twoToneColor="#eb2f96" />
    </Space>
  );
}
