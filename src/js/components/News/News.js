import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getNews } from "../../actions/news";

function Post(props) {
  const data = props.data;

  /* State related with filters */
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('reactJS');

  useEffect(() => {
    props.getNews(page, keyword);
  });

  return (
    <ul>
      {data[0] && data[0].articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

export default connect(
  mapStateToProps,
  { getNews }
)(Post);