import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { getNews, getPopularNews } from "../../actions/news";
import styles from './styles.module.scss';

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

  /* Slider settings */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  useEffect(() => {
    props.getNews(page, keyword);
    props.getPopularNews();
  }, []);

  return (
    <div className={styles.news}>
      <Slider {...settings}>
        {topNews && topNews[0] && topNews[0].articles.map(item => (
          <div key={item.title} className={styles.slide}>
            <div className={styles.imgBg} style={{ backgroundImage: `url(${item.urlToImage})` }}>
              <div className={styles.content}>
                <h1>{item.title}</h1>
                <p className={styles.description}>{item.description}</p>
                <p className={styles.information}>
                  <small className={styles.source}><span>{item.source.name}</span></small>
                  {item.author ?
                    <small className={styles.author}>by <span>{item.author}</span></small>
                  : null
                }
                </p>
              </div>
              <div className={styles.overlay} />
            </div>
          </div>
        ))}
      </Slider>
      {/*<<h2>All by keyword</h2>
      ul>
        {data && data[0] && data[0].articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
        </ul>*/}
    </div>
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