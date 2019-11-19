/*
   
Paginate

*/
/** ****************************** Import packages *************************** */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

class Paginate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      pageSize: 6,
      pageList: [],
      totalPages: 0
    };
  }

  componentWillMount() {
    const { totalRecords, pageLimit } = this.props;
    const self = this;
    setTimeout(() => {
      self.calculatePages(totalRecords, pageLimit);
    }, 500);
  }

  componentWillReceiveProps = nextProps => {
    const { totalRecords, pageLimit } = this.props;
    const self = this;
    if (
      nextProps.totalRecords !== totalRecords ||
      nextProps.pageLimit !== pageLimit
    ) {
      setTimeout(() => {
        self.calculatePages(nextProps.totalRecords, nextProps.pageLimit);
      }, 500);
    }
    return true;
  };

  calculatePages = (totalRecords, pageLimit) => {
    const { currentPage, pageSize } = this.state;
    const _pages = parseInt(totalRecords / pageLimit, 10);
    let pageEnd;
    const pageStart = currentPage > 1 ? currentPage : 1;
    const pageList = [];
    const _totalPages = totalRecords % pageLimit === 0 ? _pages : _pages + 1;

    if (_totalPages <= pageSize) {
      pageEnd = _totalPages;
    } else {
      pageEnd = pageStart + pageSize;
    }

    for (let i = pageStart; i <= pageEnd; i++) {
      pageList.push(i);
    }

    this.setState({
      totalPages: _totalPages,
      pageList
    });
  };

  // _onPrev = event => {
  //   const { onPaginate } = this.props;
  //   const { currentPage, pageSize, totalPages } = this.state;
  //   const pageList = [];
  //   event.preventDefault();
  //   if (currentPage - 1 < 1) {
  //     return false;
  //   }
  //   let pageStart = currentPage !== 1 ? currentPage - 1 : currentPage;
  //   const previousPage = pageStart;
  //   let endPage = pageStart + pageSize;

  //   if (totalPages < pageSize) {
  //     startPage = 1;
  //     endPage = totalPages;
  //   } else if (pageStart + pageSize >= totalPages) {
  //     pageStart = totalPages - pageSize;
  //     endPage = totalPages;
  //   }
  //   for (let i = pageStart; i < endPage; i++) {
  //     pageList.push(i);
  //   }
  //   this.setState({
  //     currentPage: previousPage,
  //     pageList
  //   });
  //   onPaginate(previousPage);
  // };

  // _onNext = event => {
  //   const { onPaginate } = this.props;
  //   const { currentPage, pageSize, totalPages } = this.state;
  //   const pageList = [];
  //   event.preventDefault();

  //   if (currentPage + 1 >= totalPages) {
  //     return false;
  //   }
  //   let pageStart = currentPage + 1;
  //   const nextPage = pageStart;
  //   let endPage = pageStart + pageSize;

  //   if (totalPages < pageSize) {
  //     startPage = 1;
  //     endPage = totalPages;
  //   } else if (pageStart + pageSize >= totalPages) {
  //     pageStart = totalPages - pageSize;
  //     endPage = totalPages;
  //   }

  //   for (let i = pageStart; i < endPage; i++) {
  //     pageList.push(i);
  //   }
  //   this.setState({
  //     currentPage: nextPage,
  //     pageList
  //   });

  //   onPaginate(nextPage);
  // };

  // _onPaginate = (event, _page) => {
  //   const { pageSize, totalPages } = this.state;
  //   const { onPaginate } = this.props;
  //   const pageList = [];
  //   event.preventDefault();
  //   let startPage = _page;
  //   let endPage = startPage + pageSize;
  //   if (totalPages < pageSize) {
  //     startPage = 1;
  //     endPage = totalPages;
  //   } else if (startPage + pageSize >= totalPages) {
  //     startPage = totalPages - pageSize + 1;
  //     endPage = totalPages;
  //   }
  //   // calculate page list
  //   for (let i = startPage; i <= endPage; i++) {
  //     pageList.push(i);
  //   }
  //   this.setState({
  //     currentPage: _page,
  //     pageList
  //   });
  //   onPaginate(_page);
  // };

  render() {
    const { pageList, currentPage, totalPages } = this.state;
    const { totalRecords } = this.props;
    if (!totalRecords) return null;
    return (
      <ul id="pagination" className="pagination justify-content-center mb-0">
        <li className="page-item">
          <NavLink
            to=""
            className="page-link"
            onClick={event => this._onPaginate(event, 1)}
          >
            <span aria-hidden="true">&laquo;</span>
            <span className="sr-only">First</span>
          </NavLink>
        </li>
        <li className="page-item">
          <NavLink
            to=""
            className="page-link"
            onClick={event => this._onPrev(event)}
          >
            <span aria-hidden="true">&lt;</span>
            <span className="sr-only">Previous</span>
          </NavLink>
        </li>
        {pageList.map(page => (
          <li
            className={currentPage === page ? "page-item active" : "page-item"}
            key={page}
          >
            <NavLink
              to=""
              className="page-link"
              onClick={event => this._onPaginate(event, page)}
            >
              {page}
            </NavLink>
          </li>
        ))}

        <li className="page-item">
          <NavLink
            to=""
            className="page-link"
            onClick={event => this._onNext(event)}
          >
            <span aria-hidden="true">&gt;</span>
            <span className="sr-only">Next</span>
          </NavLink>
        </li>
        <li
          className={
            totalPages === currentPage ? "page-item active" : "page-item"
          }
        >
          <NavLink
            to=""
            className="page-link"
            onClick={event => this._onPaginate(event, totalPages)}
          >
            <span aria-hidden="true">&raquo;</span>
            <span className="sr-only">Last</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}

Paginate.propTypes = {
  pageLimit: PropTypes.number.isRequired,
  totalRecords: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired
};

export default Paginate;
