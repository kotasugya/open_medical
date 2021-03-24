import React, {Fragment, useReducer, useEffect, useState} from 'react';
import axios from 'axios'
import {reviewsShow} from '../../urls/index'

const initialState = {
  "review":{
    "review_content": ""
  }
}

export const ReviewsShow = ()=> {
  const [content, setContent] = useState(initialState)

  const fetchReviewsShow = (companyId, id) => {
    return axios.get(reviewsShow(companyId, id))
    .then(response => {
      return response.data
    })
    .catch((error) => console.error(error))
  }

  useEffect(() => {
    fetchReviewsShow(1,1)
    .then((data) =>
      setContent(data),
      console.log({content})
    )
  }, [])

  return(
    <Fragment>
      {content.review.review_content}
    </Fragment>
  )
}