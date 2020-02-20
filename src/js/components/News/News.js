import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../../actions/news";

export class Post extends Component {
  //constructor(props) {
    //super(props);
  //}

  componentDidMount() {
    this.props.getNews(2, 'reactJS');
  }


  render() {
    const { data } = this.props;

    console.log(data);
  
    return (
      <ul>
        {data[0] && data[0].articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
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