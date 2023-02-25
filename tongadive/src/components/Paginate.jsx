import { Pagination } from "antd";
import React from "react";
import "../styles/Paginate.css";
const Paginate = ({ onChange, current, total,onShowSizeChange, pageSize }) => {
  return (
    <div className="paginate">
      <Pagination
        showSizeChanger
        total={total}
        className="pagenum"
        onChange={onChange}
        current={current}
        onShowSizeChange={onShowSizeChange}
        pageSize={pageSize}
      ></Pagination>
    </div>
  );
};

export default Paginate;
