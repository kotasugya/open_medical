import React, { useState } from 'react'
import './reviews.css'
import axios from 'axios'
import { reviewsNew } from '../../urls/index'
// import { SearchCompanies } from '../companies/SearchCompanies'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
// import { EnrollmentsNew } from '../enrollments/EnrollmentsNew'

export const ReviewsNew = () => {
  // const [searchKeyWord, setSearchKeyWord] = useState('')
  // const companyInformation = SearchCompanies(searchKeyWord)
  const [content1, setContent1] = useState('')
  const [content2, setContent2] = useState('')
  const [content3, setContent3] = useState('')
  const [content4, setContent4] = useState('')
  const [content5, setContent5] = useState('')
  const [reviewCategoryId1, setReviewCategoryId1] = useState()
  const [reviewCategoryId2, setReviewCategoryId2] = useState()
  const [reviewCategoryId3, setReviewCategoryId3] = useState()
  const [reviewCategoryId4, setReviewCategoryId4] = useState()
  const [reviewCategoryId5, setReviewCategoryId5] = useState()

  // const handleChange = (e) => {
  //   setSearchKeyWord(e.target.value)
  // }

  const handleSubmit1 = () => {
    setReviewCategoryId1(1)
    console.log(reviewCategoryId1)

    const body = {
      review: {
        user_id: 1,
        company_id: companyInformation.companies[0].id,
        review_category_id: reviewCategoryId1,
        review_content: content1,
      },
    }
    console.log(companyInformation, reviewCategoryId1, body)
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(reviewsNew, body, headers)
      .then((response) => {
        console.log('success', response)
        alert('レポート投稿が成功しました')
      })
      .catch((error) => {
        console.log('failed', error)
        alert('投稿に失敗しました')
      })
  }
  const handleSubmit2 = () => {
    setReviewCategoryId2(2)
    console.log(reviewCategoryId2)

    const body = {
      review: {
        user_id: 1,
        company_id: companyInformation.companies[0].id,
        review_category_id: reviewCategoryId2,
        review_content: content2,
      },
    }
    console.log(companyInformation, reviewCategoryId2, body)
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(reviewsNew, body, headers)
      .then((response) => {
        console.log('success', response)
        alert('レポート投稿が成功しました')
      })
      .catch((error) => {
        console.log('failed', error)
        alert('投稿に失敗しました')
      })
  }
  const handleSubmit3 = () => {
    setReviewCategoryId3(3)
    console.log(reviewCategoryId3)

    const body = {
      review: {
        user_id: 1,
        company_id: companyInformation.companies[0].id,
        review_category_id: reviewCategoryId3,
        review_content: content3,
      },
    }
    console.log(companyInformation, reviewCategoryId3, body)
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(reviewsNew, body, headers)
      .then((response) => {
        console.log('success', response)
        alert('レポート投稿が成功しました')
      })
      .catch((error) => {
        console.log('failed', error)
        alert('投稿に失敗しました')
      })
  }
  const handleSubmit4 = () => {
    setReviewCategoryId4(4)
    console.log(reviewCategoryId4)

    const body = {
      review: {
        user_id: 1,
        company_id: companyInformation.companies[0].id,
        review_category_id: reviewCategoryId4,
        review_content: content4,
      },
    }
    console.log(companyInformation, reviewCategoryId4, body)
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(reviewsNew, body, headers)
      .then((response) => {
        console.log('success', response)
        alert('レポート投稿が成功しました')
      })
      .catch((error) => {
        console.log('failed', error)
        alert('投稿に失敗しました')
      })
  }
  const handleSubmit5 = () => {
    setReviewCategoryId5(5)
    console.log(reviewCategoryId5)

    const body = {
      review: {
        user_id: 1,
        company_id: companyInformation.companies[0].id,
        review_category_id: reviewCategoryId5,
        review_content: content5,
      },
    }
    console.log(companyInformation, reviewCategoryId5, body)
    const headers = { 'Content-Type': 'application/json' }
    axios
      .post(reviewsNew, body, headers)
      .then((response) => {
        console.log('success', response)
        alert('レポート投稿が成功しました')
      })
      .catch((error) => {
        console.log('failed', error)
        alert('投稿に失敗しました')
      })
  }
  const companyCulturePlaceholder =
    'ex) スタッフ同士の仲が良く、強く気を遣わなくても問題ありません。ただし、院長の機嫌の良し悪しの差が大きく、たまにピリピリしている事があります。'
  const joinReasonPlaceholder =
    'ex) 経験が浅くてもしっかりと教えて頂けそうな教育環境が整っていると聞いており、着実に成長出来ると思ったから。実際に勤務してからはマニュアルが完全に整っているというよりは、OJTのような教わり方になるので積極性が多少必要となります。'
  const growthPlaceholder =
    'ex) 患者様へのコミュニケーション能力は勿論、自費診療などの特定分野の治療を多く経験出来る為、歯科医師として扱える診療範囲を増やす事ができます。'
  const leavePlaceholder =
    'ex) 入職して1年と少し経ちますが、一向に昇給する気配が無く院長に雇用条件の事に関して相談しても、話す度に仰る事が異なる為、将来的に不安で退職を決めました。'
  const salarySystemPlaceholder =
    'ex) 最低保証付きの歩合制、又は固定給を選択出来ます。歩合制の場合は最低保障40万円〜60万円で、歩合率(保険20% / 自費20%)を比較して高い方が支給されます。         固定給の場合は賞与が出ます。私は歩合給の方が稼げると思ったので歩合給を選択しました。'

  return (
    <>
      <body>
        <div className="mainWrapper">
          <Header />
          <h3>評価レポート (STEP2)</h3>
          {/* <input
          type="text"
          placeholder="医院で検索する"
          onChange={handleChange}
        />
        <h3>レポート対象企業</h3>
        <div>{companyInformation.companies[0].name}</div> */}
          {/* <EnrollmentsNew companyInformation={companyInformation} /> */}
          <div className="reviewsNewForm">
            <h4>職場の雰囲気</h4>
            <p className="exp-culture">
              この医院は又は病院の勤務する上での雰囲気は、どのような特徴がありますか。
            </p>
            <form className="reviewsForm">
              <textarea
                name="companyCulture"
                placeholder={companyCulturePlaceholder}
                value={content1}
                onChange={(event) => setContent1(event.target.value)}
              />
              <button
                className="reviews-btn"
                onClick={handleSubmit1}
                type="button"
              >
                このレポートを投稿する
              </button>
            </form>
            <h4>入職した理由 / 勤務後のギャップ</h4>
            <p className="exp-joinReason">
              この医院又は病院へ入職を決めた理由は何ですか？
              <br />
              また、入職後に感じたギャップや入職前に認識すべきだったと感じる事はありますか？
            </p>
            <form className="reviewsForm">
              <textarea
                name="JoinReason"
                placeholder={joinReasonPlaceholder}
                value={content2}
                onChange={(event) => setContent2(event.target.value)}
              />
              <button
                className="reviews-btn"
                onClick={handleSubmit2}
                type="button"
              >
                このレポートを投稿する
              </button>
            </form>
            <h4>働きがい/成長</h4>
            <p className="exp-growth">
              振り返って、この医院又は病院に入職してどのような点で成長出来ると考えていますか。
            </p>
            <form className="reviewsForm">
              <textarea
                name="Motivation"
                placeholder={growthPlaceholder}
                value={content3}
                onChange={(event) => setContent3(event.target.value)}
              />
              <button
                className="reviews-btn"
                onClick={handleSubmit3}
                type="button"
              >
                このレポートを投稿する
              </button>
            </form>
            <h4>退職理由</h4>
            <p className="exp-leaveReason">
              どのような理由でこの医院又は病院から退職(の検討)をしましたか。
            </p>
            <form className="reviewsForm">
              <textarea
                name="LeaveReason"
                placeholder={leavePlaceholder}
                value={content4}
                onChange={(event) => setContent4(event.target.value)}
              />
              <button
                className="reviews-btn"
                onClick={handleSubmit4}
                type="button"
              >
                このレポートを投稿する
              </button>
            </form>
            <h4>給与体系</h4>
            <p className="exp-salarySystem">
              給与制度はどのようになっておりますか。
            </p>
            <form className="reviewsForm">
              <textarea
                name="LeaveReason"
                placeholder={salarySystemPlaceholder}
                value={content5}
                onChange={(event) => setContent5(event.target.value)}
              />
              <button
                className="reviews-btn"
                onClick={handleSubmit5}
                type="button"
              >
                このレポートを投稿する
              </button>
            </form>
          </div>
          <Footer />
        </div>
      </body>
    </>
  )
}
