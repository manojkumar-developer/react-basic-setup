

/**
 * Trigger assignment collection API call
 */
const charitiesFetch = (params = {}, url) => () => {
    return request({
      method: "get",
      url,
      token,
      data,
    })
      .then(
        
        ({ data, headers }) => {
          /**
           * Update assignments list in the store
           */
          dispatch(assignmentsFetched(data));
  
          /**
           * Update assignments pagination in the store
           */
          dispatch({
            type: actionTypes.ASSIGNMETS_FETCHED_PAGINATION,
            pagination: parsePaginationHeaders(headers),
          });
  
        },
        (error) => dispatch(assignmentsFetched([], error)),
      );
  };
  