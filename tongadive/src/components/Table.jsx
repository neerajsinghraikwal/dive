import React from "react";
import Paginate from "./Paginate";
import "../styles/Table.css";
const Table = ({
  info,
  onChange,
  current,
  total,
  onShowSizeChange,
  pageSize,
}) => {
  return (
    <div className="table">
      <h1 className="heading">Info Table</h1>
      
      <div className="titlebox">
        <div className="name">Person</div>
        <div className="desc">Description</div>
        <div className="quant">Quantity</div>
        <div className="total">Total</div>
        <div className="amount">Amount</div>
        <div className="profit">Profit</div>
      </div>
      <div id="rowsouter">
        {info?.map((el) => {
          return (
            <div className="titlebox rowinner">
              <div className="name rowcell">{el.Person}</div>
              <div className="desc rowcell">{el.description}</div>
              <div className="quant rowcell">{el.Quantity}</div>
              <div className="total rowcell">{el.Total}</div>
              <div className="amount rowcell">{el.Amount}</div>
              <div className="profit rowcell">{el.Profit}</div>
            </div>
          );
        })}
      </div>
      <Paginate
        onChange={onChange}
        current={current}
        total={total}
        onShowSizeChange={onShowSizeChange}
        pageSize={pageSize}
      ></Paginate>
    </div>
  );
};

export default Table;
