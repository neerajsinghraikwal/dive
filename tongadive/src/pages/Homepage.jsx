import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/Homepage.css";

const Homepage = () => {
    const [info, setInfo] = useState([]);
    const [current, setCurrent] = useState(1);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [pageSize, setPageSize] = useState(10);

  //   fetch the data from database
  let api = "https://tongadive.onrender.com/info";
  //   let localapi = "http://localhost:8080/info";
  async function getData() {
    setLoading(true);
    try {
      let data = await axios.get(`${api}?page=${current}&limit=${pageSize}`);
      console.log(data);
      setInfo(data.data.data);
      setTotal(data.data.total);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  }

  //   change the page
  const onChange = (page) => {
    setCurrent(page);
  };

  //   change the pageSize
  const onShowSizeChange = (page, pageSize) => {
    setPageSize(pageSize);
  };

  useEffect(() => {
    getData();
  }, [current, pageSize]);

  return (
    <div className="home">
      {loading ? (
        <Spinner />
      ) : (
        <Table
          info={info}
          onChange={onChange}
          current={current}
          total={total}
          onShowSizeChange={onShowSizeChange}
          pageSize={pageSize}
        ></Table>
      )}
    </div>
  );
};

export default Homepage;
