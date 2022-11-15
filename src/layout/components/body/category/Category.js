import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import axios from "axios";
import "./Category.styles.css";

export default function Category(props) {
  const [category, setCategory] = useState([]);

  const fetchCategory = async () => {
    try {
      const { data: response } = await axios.get(
        "http://svcy3.myclass.vn/api/Product/getAllCategory"
      );
      setCategory(response.content);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div style={{ marginLeft: "250px" }}>
      <Menu mode="horizontal">
        {category.map((item, index) => (
          <Menu.SubMenu key={index} title={item.category}>
            <Menu.Item key={Math.random()} icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
            <Menu.Item key={Math.random()} icon={<AppstoreOutlined />}>
              Navigation Three
            </Menu.Item>
            <Menu.ItemGroup key={index} title="Item Group">
              <Menu.Item key={Math.random()} icon={<AppstoreOutlined />}>
                Navigation Four
              </Menu.Item>
              <Menu.Item key={Math.random()} icon={<AppstoreOutlined />}>
                Navigation Five
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.SubMenu>
        ))}
      </Menu>
    </div>
  );
}
