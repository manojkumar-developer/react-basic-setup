/*
   
Component : BlogDetails

*/
/** ****************************** Import Packages *************************** * */
import React, { Component } from "react";
import { BeatLoader } from "react-spinners";

/** ****************************** Import SubClasses *************************** */
import BlogList from "./BlogList";
import Sidebar from "./Sidebar";

/** ****************************** Import APIS *************************** */
//import { getBlogs } from "/imports/api/blogs";

class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      newsList: [],
      tipId: null
    };
  }

  componentWillMount = () => {
    const { match } = this.props;
    const params = match.params;
    if (params && params.id) {
      this.setState({ tipId: params.id });
      this.loadTips();
    }
  };

  componentWillReceiveProps = nextprops => {
    if (nextprops) {
      const params = nextprops.match.params;
      if (params && params.id) {
        this.setState({ tipId: params.id });
        this.loadTips();
      }
    }
  };

  // loadTips = () => {
  //   const self = this;
  //   getBlogs(1, 10).then(list => {
  //     if (list) {
  //       this.setState({ newsList: list[0].data });
  //     }
  //     setTimeout(function() {
  //       self.setState({ loading: false });
  //     }, 300);
  //   });
  // };

  renderLoader = () => {
    const { loading } = this.state;
    return (
      <div className="card-deck text-dark loader-box justify-content-center">
        <div className="row">
          <div className="col-xs-12 ml-auto mr-auto">
            <div className="jumbotron justify-content-center">
              <BeatLoader color="#57B1FB" loading={loading} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderList = () => {
    const { newsList, tipId } = this.state;
    if (newsList.length === 0) return null;
    const currentTip = newsList.find(obj => obj._id === tipId);
    return (
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-xl-9 col-lg-9 col-md-9">
          {currentTip ? <BlogList details={currentTip} /> : null}
        </div>
        {/* <!-- Right Sidebar --> */}
        <div className="col-xl-3 col-lg-3 col-md-3">
          <Sidebar dataList={newsList} />
        </div>
      </div>
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="blog tips-single mt-3 pt-5 pb-5">
        <div className="container">
          {loading ? this.renderLoader() : this.renderList()}
        </div>
      </div>
    );
  }
}

export default BlogDetails;
