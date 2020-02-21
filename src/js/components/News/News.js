import React, { Fragment, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getNews, getPopularNews } from "../../actions/news";

/* Adding Icons to the Fontawesome Library */
library.add(faChevronLeft, faChevronRight);

function Post(props) {
  const data = props.data;
  const topNews = props.topNews;

  console.log(data);
  console.log(topNews);

  /* State related with filters */
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('reactJS');

  useEffect(() => {
    props.getNews(page, keyword);
    props.getPopularNews();
  }, []);

  return (
    <Fragment>
      <h2>Popular</h2>
      <ul>
        {topNews && topNews[0] && topNews[0].articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
      <h2>All by keyword</h2>
      <ul>
        {data && data[0] && data[0].articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </Fragment>
  );
}

function mapStateToProps(state) {
  return {
    data: state.data,
    topNews: state.topNews
  };
}

export default connect(
  mapStateToProps,
  { getNews, getPopularNews }
)(Post);