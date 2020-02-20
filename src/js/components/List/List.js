import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { news: state.news };
};

const ConnectedList = ({ news }) => (
  <ul>
    {news.map(el => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;