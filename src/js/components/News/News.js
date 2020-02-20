import React, { Component } from "react";
import { connect } from "react-redux";
import { getNews } from "../../actions/index";

export class Post extends Component {
  //constructor(props) {
    //super(props);
  //}

  componentDidMount() {
    this.props.getNews();
  }


  render() {

    return (
      <ul>
        {this.props.data[0] && this.props.data[0].articles.map(el => (
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