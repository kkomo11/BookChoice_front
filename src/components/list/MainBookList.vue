<template>
  <div class="welcome_main_content_area" id="welcome_new_topic">
    <div class="contents_inner">
      <div class="title_wrap title_size_xxl">
        <p class="title_heading">화제의 신상</p>
        <ul class="category_tag_list">
          <li
            class="category_item active"
            data-target="#topicAll"
            onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '', '탭_전체', '');"
          >
            <button
              type="button"
              class="btn_category"
              onclick="javascript:KbbJS.util.clickTab(this)"
            >
              <span class="text">전체</span>
            </button>
          </li>
          <li
            class="category_item"
            data-target="#224"
            onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '', '탭_국내도서', '');"
          >
            <button
              type="button"
              class="btn_category"
              onclick="javascript:KbbJS.util.clickTab(this);"
            >
              <span class="text">국내도서</span>
            </button>
          </li>
          <li
            class="category_item"
            data-target="#225"
            onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '', '탭_외국도서', '');"
          >
            <button
              type="button"
              class="btn_category"
              onclick="javascript:KbbJS.util.clickTab(this);"
            >
              <span class="text">외국도서</span>
            </button>
          </li>
        </ul>
        <div class="right_area">
          <a
            href="https://product.kyobobook.co.kr/new/"
            class="btn_more_plus_text"
            onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '', '더보기', '');"
            ><span class="text">더보기</span><span class="ico_plus"></span
          ></a>
        </div>
      </div>
      <div id="topicAll" class="welcome_prod_swiper_wrap outside_nav">
        <div class="swiper-container swiper-container-horizontal">
          <ul
            class="swiper-wrapper"
            style="transform: translate3d(0px, 0px, 0px)"
          >
            <li
              class="prod_item swiper-slide swiper-slide-visible swiper-slide-active"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '흐드러지는 봉황의 색채'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200664049', item_name: '흐드러지는 봉황의 색채', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200664049', ep_item_name: '상품1_흐드러지는 봉황의 색채'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200664049"
                    class="prod_link"
                  >
                    <span class="img_box">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200664049"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791190090834.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791190090834.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200664049"
                    class="prod_info"
                  >
                    <span class="prod_name"> 흐드러지는 봉황의 색채 </span>
                  </a>
                  <span class="prod_author"> 이윤하 ·허블 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">14,400</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide swiper-slide-visible swiper-slide-next"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '생에 감사해'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200417162', item_name: '생에 감사해', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200417162', ep_item_name: '상품1_생에 감사해'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200417162"
                    class="prod_link"
                  >
                    <span class="img_box">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200417162"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791190382915.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791190382915.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200417162"
                    class="prod_info"
                  >
                    <span class="prod_name"> 생에 감사해 </span>
                  </a>
                  <span class="prod_author"> 김혜자 ·수오서재 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">15,300</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide swiper-slide-visible"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '슬램덩크 신장재편판 세트(1-20권)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200409872', item_name: '슬램덩크 신장재편판 세트(1-20권)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200409872', ep_item_name: '상품1_슬램덩크 신장재편판 세트(1-20권)'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200409872"
                    class="prod_link"
                  >
                    <span class="img_box">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200409872"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/2090000125146.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/2090000125146.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200409872"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      슬램덩크 신장재편판 세트(1-20권)
                    </span>
                  </a>
                  <span class="prod_author"> Takehiko Inoue ·대원씨아이 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">126,450</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide swiper-slide-visible"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '사피엔스(양장 특별판)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200641463', item_name: '사피엔스(양장 특별판)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200641463', ep_item_name: '상품1_사피엔스(양장 특별판)'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200641463"
                    class="prod_link"
                  >
                    <span class="img_box">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200641463"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788934943235.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788934943235.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200641463"
                    class="prod_info"
                  >
                    <span class="prod_name"> 사피엔스(양장 특별판) </span>
                  </a>
                  <span class="prod_author"> 유발 하라리 ·김영사 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">27,000</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide swiper-slide-visible"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '몸으로 읽는 세계사'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200664107', item_name: '몸으로 읽는 세계사', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200664107', ep_item_name: '상품1_몸으로 읽는 세계사'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200664107"
                    class="prod_link"
                  >
                    <span class="img_box">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200664107"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791130695303.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791130695303.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200664107"
                    class="prod_info"
                  >
                    <span class="prod_name"> 몸으로 읽는 세계사 </span>
                  </a>
                  <span class="prod_author"> 캐스린 페트라스 ·다산초당 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">17,820</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '나의 해방일지 세트'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200687191', item_name: '나의 해방일지 세트', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200687191', ep_item_name: '상품1_나의 해방일지 세트'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200687191"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200687191"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791130696065.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791130696065.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200687191"
                    class="prod_info"
                  >
                    <span class="prod_name"> 나의 해방일지 세트 </span>
                  </a>
                  <span class="prod_author"> 박해영 ·오브제 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">57,600</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '10대를 위한 세계미래보고서 2035-2055 사회탐구+직업탐구 세트(전 2권)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200745993', item_name: '10대를 위한 세계미래보고서 2035-2055 사회탐구+직업탐구 세트(전 2권)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200745993', ep_item_name: '상품1_10대를 위한 세계미래보고서 2035-2055 사회탐구+직업탐구 세트(전 2권)'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200745993"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200745993"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/S000200745993.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/S000200745993.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200745993"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      10대를 위한 세계미래보고서 2035-2055 사회탐구+직업탐구
                      세트(전 2권)
                    </span>
                  </a>
                  <span class="prod_author"> </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">23,040</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '곰곰 걷다'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200661861', item_name: '곰곰 걷다', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200661861', ep_item_name: '상품1_곰곰 걷다'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200661861"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200661861"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788954690492.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788954690492.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200661861"
                    class="prod_info"
                  >
                    <span class="prod_name"> 곰곰 걷다 </span>
                  </a>
                  <span class="prod_author"> 남윤잎 ·문학동네 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">15,120</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '7~9세 독립보다 중요한 것은 없습니다'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200645965', item_name: '7~9세 독립보다 중요한 것은 없습니다', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200645965', ep_item_name: '상품1_7~9세 독립보다 중요한 것은 없습니다'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200645965"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200645965"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788950978907.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788950978907.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200645965"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      7~9세 독립보다 중요한 것은 없습니다
                    </span>
                  </a>
                  <span class="prod_author"> 이서윤 ·아울북 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">17,100</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '돈은 좋지만 재테크는 겁나는 너에게'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200738016', item_name: '돈은 좋지만 재테크는 겁나는 너에게', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200738016', ep_item_name: '상품1_돈은 좋지만 재테크는 겁나는 너에게'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200738016"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200738016"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788960306134.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788960306134.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200738016"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      돈은 좋지만 재테크는 겁나는 너에게
                    </span>
                  </a>
                  <span class="prod_author"> 뿅글이 ·황금부엉이 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">14,850</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '아주 작은 시작의 힘'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200581598', item_name: '아주 작은 시작의 힘', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200581598', ep_item_name: '상품1_아주 작은 시작의 힘'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200581598"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200581598"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791191825701.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791191825701.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200581598"
                    class="prod_info"
                  >
                    <span class="prod_name"> 아주 작은 시작의 힘 </span>
                  </a>
                  <span class="prod_author"> 박민선 ·빅피시 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">14,850</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '어반라이크(Urbanlike)(No.45)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200489599', item_name: '어반라이크(Urbanlike)(No.45)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200489599', ep_item_name: '상품1_어반라이크(Urbanlike)(No.45)'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200489599"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200489599"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791189096359.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791189096359.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200489599"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      어반라이크(Urbanlike)(No.45)
                    </span>
                  </a>
                  <span class="prod_author"> 어반라이크 편집부 ·어반북스 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">23,850</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '2023 투자자산운용사 실제유형 모의고사+특별부록 PASSCODE Premium ver 2.0'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200632050', item_name: '2023 투자자산운용사 실제유형 모의고사+특별부록 PASSCODE Premium ver 2.0', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200632050', ep_item_name: '상품1_2023 투자자산운용사 실제유형 모의고사+특별부록 PASSCODE Premium ver 2.0'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200632050"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200632050"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791138341134.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791138341134.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200632050"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      2023 투자자산운용사 실제유형 모의고사+특별부록 PASSCODE
                      Premium ver 2.0
                    </span>
                  </a>
                  <span class="prod_author"> 유창호 ·시대고시기획 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">44,100</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '파울루 벤투'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200743303', item_name: '파울루 벤투', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200743303', ep_item_name: '상품1_파울루 벤투'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200743303"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200743303"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791169780032.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791169780032.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200743303"
                    class="prod_info"
                  >
                    <span class="prod_name"> 파울루 벤투 </span>
                  </a>
                  <span class="prod_author"> 선수 에디터스 ·브레인스토어 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">15,120</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '환자가 몰리는 병원은 서비스가 다르다'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200738082', item_name: '환자가 몰리는 병원은 서비스가 다르다', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200738082', ep_item_name: '상품1_환자가 몰리는 병원은 서비스가 다르다'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200738082"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200738082"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791192259802.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791192259802.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200738082"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      환자가 몰리는 병원은 서비스가 다르다
                    </span>
                  </a>
                  <span class="prod_author"> 전희진 ·굿웰스북스 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">14,400</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '매3언어와매체 매일 개념 3개씩 공부하는 언어(문법)와 매체 수능 기출(2023)(2024 수능대비)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200572304', item_name: '매3언어와매체 매일 개념 3개씩 공부하는 언어(문법)와 매체 수능 기출(2023)(2024 수능대비)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200572304', ep_item_name: '상품1_매3언어와매체 매일 개념 3개씩 공부하는 언어(문법)와 매체 수능 기출(2023)(2024 수능대비)'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200572304"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200572304"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791165269975.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791165269975.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200572304"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      매3언어와매체 매일 개념 3개씩 공부하는 언어(문법)와 매체
                      수능 기출(2023)(2024 수능대비)
                    </span>
                  </a>
                  <span class="prod_author"> 안인숙 ·키출판사 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">14,400</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '2023 기초학력 진단평가 초5(8절)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200212503', item_name: '2023 기초학력 진단평가 초5(8절)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200212503', ep_item_name: '상품1_2023 기초학력 진단평가 초5(8절)'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200212503"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200212503"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788954768467.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788954768467.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200212503"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      2023 기초학력 진단평가 초5(8절)
                    </span>
                  </a>
                  <span class="prod_author">
                    EBS 편집부 ·한국교육방송공사(EBSi)
                  </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">11,700</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '비됴클래스의 유튜브 영상 편집 with 프리미어 프로'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200609935', item_name: '비됴클래스의 유튜브 영상 편집 with 프리미어 프로', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200609935', ep_item_name: '상품1_비됴클래스의 유튜브 영상 편집 with 프리미어 프로'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200609935"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200609935"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791169210669.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791169210669.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200609935"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      비됴클래스의 유튜브 영상 편집 with 프리미어 프로
                    </span>
                  </a>
                  <span class="prod_author"> 하지원 ·한빛미디어 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">20,700</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '영어가 술술 나오는 만능패턴 100'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200563569', item_name: '영어가 술술 나오는 만능패턴 100', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200563569', ep_item_name: '상품1_영어가 술술 나오는 만능패턴 100'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200563569"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200563569"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791159098291.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791159098291.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200563569"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      영어가 술술 나오는 만능패턴 100
                    </span>
                  </a>
                  <span class="prod_author"> 세리나 황 ·교보문고 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">11,700</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '하버드식 호흡의 기술'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200688685', item_name: '하버드식 호흡의 기술', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200688685', ep_item_name: '상품1_하버드식 호흡의 기술'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200688685"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200688685"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791158463854.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791158463854.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200688685"
                    class="prod_info"
                  >
                    <span class="prod_name"> 하버드식 호흡의 기술 </span>
                  </a>
                  <span class="prod_author"> 네고로 히데유키 ·비타북스 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">14,400</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', 'Let's Talk About Race'); ga360.EcommerceSet('select_item', [ {item_id: 'S000002226268', item_name: 'Let's Talk About Race', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000002226268', ep_item_name: '상품1_Let's Talk About Race'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000002226268"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000002226268"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9780064462266.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9780064462266.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000002226268"
                    class="prod_info"
                  >
                    <span class="prod_name"> Let's Talk About Race </span>
                  </a>
                  <span class="prod_author">
                    Lester, Julius/ Barbour, Karen (ILT) ·Harpercollins Juvenile
                  </span>
                  <div class="prod_price">
                    <span class="percent">30%</span>
                    <span class="price">
                      <span class="val">8,750</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', 'SPY×FAMILY  10'); ga360.EcommerceSet('select_item', [ {item_id: 'S000061758766', item_name: 'SPY×FAMILY  10', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000061758766', ep_item_name: '상품1_SPY×FAMILY  10'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000061758766"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000061758766"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9784088831275.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9784088831275.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000061758766"
                    class="prod_info"
                  >
                    <span class="prod_name"> SPY×FAMILY 10 </span>
                  </a>
                  <span class="prod_author"> 遠藤 達哉 著 ·集英社 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">5,350</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', 'Dragon Masters 22: Guarding the Invisible Dragons'); ga360.EcommerceSet('select_item', [ {item_id: 'S000003163117', item_name: 'Dragon Masters 22: Guarding the Invisible Dragons', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000003163117', ep_item_name: '상품1_Dragon Masters 22: Guarding the Invisible Dragons'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000003163117"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000003163117"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9781338776904.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9781338776904.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000003163117"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      Dragon Masters 22: Guarding the Invisible Dragons
                    </span>
                  </a>
                  <span class="prod_author">
                    West, Tracey ·Scholastic Inc
                  </span>
                  <div class="prod_price">
                    <span class="percent">30%</span>
                    <span class="price">
                      <span class="val">5,460</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', 'Verity'); ga360.EcommerceSet('select_item', [ {item_id: 'S000003200085', item_name: 'Verity', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000003200085', ep_item_name: '상품1_Verity'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000003200085"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000003200085"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9781408726600.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9781408726600.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000003200085"
                    class="prod_info"
                  >
                    <span class="prod_name"> Verity </span>
                  </a>
                  <span class="prod_author">
                    Hoover, Colleen ·Little Brown and Co. (UK)
                  </span>
                  <div class="prod_price">
                    <span class="percent">25%</span>
                    <span class="price">
                      <span class="val">11,000</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', 'What If? 2'); ga360.EcommerceSet('select_item', [ {item_id: 'S000002703866', item_name: 'What If? 2', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000002703866', ep_item_name: '상품1_What If? 2'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000002703866"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000002703866"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9780593542903.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9780593542903.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000002703866"
                    class="prod_info"
                  >
                    <span class="prod_name"> What If? 2 </span>
                  </a>
                  <span class="prod_author">
                    Randall Munroe ·Riverhead Books
                  </span>
                  <div class="prod_price">
                    <span class="percent">18%</span>
                    <span class="price">
                      <span class="val">17,700</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', 'The Incredible Math Games Book'); ga360.EcommerceSet('select_item', [ {item_id: 'S000003282389', item_name: 'The Incredible Math Games Book', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000003282389', ep_item_name: '상품1_The Incredible Math Games Book'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000003282389"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000003282389"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9781465436283.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9781465436283.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000003282389"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      The Incredible Math Games Book
                    </span>
                  </a>
                  <span class="prod_author">
                    Dk Publishing (COR) ·DK Publishing (Dorling Kindersley)
                  </span>
                  <div class="prod_price">
                    <span class="percent">38%</span>
                    <span class="price">
                      <span class="val">13,700</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', 'The Cold Start Problem'); ga360.EcommerceSet('select_item', [ {item_id: 'S000002224720', item_name: 'The Cold Start Problem', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000002224720', ep_item_name: '상품1_The Cold Start Problem'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000002224720"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000002224720"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9780062969743.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9780062969743.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000002224720"
                    class="prod_info"
                  >
                    <span class="prod_name"> The Cold Start Problem </span>
                  </a>
                  <span class="prod_author">
                    Chen, Andrew ·Harper Business
                  </span>
                  <div class="prod_price">
                    <span class="percent">30%</span>
                    <span class="price">
                      <span class="val">24,900</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', 'THE FIRST SLAM DUNK re:SOURCE'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200098101', item_name: 'THE FIRST SLAM DUNK re:SOURCE', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200098101', ep_item_name: '상품1_THE FIRST SLAM DUNK re:SOURCE'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200098101"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200098101"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9784087926026.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9784087926026.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200098101"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      THE FIRST SLAM DUNK re:SOURCE
                    </span>
                  </a>
                  <span class="prod_author"> 井上雄彦 ·集英社 </span>
                  <div class="prod_price">
                    <span class="percent">12%</span>
                    <span class="price">
                      <span class="val">20,350</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '「하이큐-!! TO THE TOP (애니판)」마스코트 챰 일본식 복장 응원단 히나타 쇼요'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200524732', item_name: '「하이큐-!! TO THE TOP (애니판)」마스코트 챰 일본식 복장 응원단 히나타 쇼요', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200524732', ep_item_name: '상품1_「하이큐-!! TO THE TOP (애니판)」마스코트 챰 일본식 복장 응원단 히나타 쇼요'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200524732"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200524732"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/4549743755588.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/4549743755588.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200524732"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      「하이큐-!! TO THE TOP (애니판)」마스코트 챰 일본식 복장
                      응원단 히나타 쇼요
                    </span>
                  </a>
                  <span class="prod_author"> ム-ビック ·ム-ビック </span>
                  <div class="prod_price">
                    <span class="percent">5%</span>
                    <span class="price">
                      <span class="val">16,070</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_전체', '클릭_상품', '모노마스터 MONOMASTER 2023.03 (무라카미 다카시 FLOWER LED ROOM LIGHT)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200307035', item_name: '모노마스터 MONOMASTER 2023.03 (무라카미 다카시 FLOWER LED ROOM LIGHT)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200307035', ep_item_name: '상품1_모노마스터 MONOMASTER 2023.03 (무라카미 다카시 FLOWER LED ROOM LIGHT)'}, {});"
              style="margin-right: 36px"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200307035"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200307035"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/4910187770336.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/4910187770336.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200307035"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      모노마스터 MONOMASTER 2023.03 (무라카미 다카시 FLOWER LED
                      ROOM LIGHT)
                    </span>
                  </a>
                  <span class="prod_author"> 寶島社 ·寶島社 </span>
                  <div class="prod_price">
                    <span class="price">
                      <span class="val">22,500</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
        <button
          type="button"
          class="swiper-button-prev type_white swiper-button-disabled"
          onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '', '좌측', '');"
          tabindex="0"
          role="button"
          aria-label="Previous slide"
          aria-disabled="true"
        >
          <span class="hidden">이전</span>
        </button>
        <button
          type="button"
          class="swiper-button-next type_white"
          onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '', '우측', '');"
          tabindex="0"
          role="button"
          aria-label="Next slide"
          aria-disabled="false"
        >
          <span class="hidden">다음</span>
        </button>
      </div>
      <!--'전체'탭 하드코딩 구성 (E)-->
      <div id="224" class="welcome_prod_swiper_wrap outside_nav hidden">
        <div class="swiper-container swiper-container-horizontal">
          <ul class="swiper-wrapper" style="transition-duration: 0ms">
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '흐드러지는 봉황의 색채'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200664049', item_name: '흐드러지는 봉황의 색채', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200664049', ep_item_name: '상품1_흐드러지는 봉황의 색채'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200664049"
                    class="prod_link"
                  >
                    <span class="img_box">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200664049"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791190090834.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791190090834.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200664049"
                    class="prod_info"
                  >
                    <span class="prod_name"> 흐드러지는 봉황의 색채 </span>
                  </a>
                  <span class="prod_author"> 이윤하 · 허블 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">14,400</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '생에 감사해'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200417162', item_name: '생에 감사해', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200417162', ep_item_name: '상품1_생에 감사해'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200417162"
                    class="prod_link"
                  >
                    <span class="img_box">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200417162"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791190382915.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791190382915.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200417162"
                    class="prod_info"
                  >
                    <span class="prod_name"> 생에 감사해 </span>
                  </a>
                  <span class="prod_author"> 김혜자 · 수오서재 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">15,300</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '슬램덩크 신장재편판 세트(1-20권)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200409872', item_name: '슬램덩크 신장재편판 세트(1-20권)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200409872', ep_item_name: '상품1_슬램덩크 신장재편판 세트(1-20권)'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200409872"
                    class="prod_link"
                  >
                    <span class="img_box">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200409872"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/2090000125146.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/2090000125146.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200409872"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      슬램덩크 신장재편판 세트(1-20권)
                    </span>
                  </a>
                  <span class="prod_author"> Takehiko Inoue · 대원씨아이 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">126,450</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '사피엔스(양장 특별판)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200641463', item_name: '사피엔스(양장 특별판)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200641463', ep_item_name: '상품1_사피엔스(양장 특별판)'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200641463"
                    class="prod_link"
                  >
                    <span class="img_box">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200641463"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788934943235.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788934943235.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200641463"
                    class="prod_info"
                  >
                    <span class="prod_name"> 사피엔스(양장 특별판) </span>
                  </a>
                  <span class="prod_author"> 유발 하라리 · 김영사 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">27,000</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '몸으로 읽는 세계사'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200664107', item_name: '몸으로 읽는 세계사', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200664107', ep_item_name: '상품1_몸으로 읽는 세계사'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200664107"
                    class="prod_link"
                  >
                    <span class="img_box">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200664107"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791130695303.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791130695303.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200664107"
                    class="prod_info"
                  >
                    <span class="prod_name"> 몸으로 읽는 세계사 </span>
                  </a>
                  <span class="prod_author"> 캐스린 페트라스 · 다산초당 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">17,820</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '나의 해방일지 세트'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200687191', item_name: '나의 해방일지 세트', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200687191', ep_item_name: '상품1_나의 해방일지 세트'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200687191"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200687191"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791130696065.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791130696065.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200687191"
                    class="prod_info"
                  >
                    <span class="prod_name"> 나의 해방일지 세트 </span>
                  </a>
                  <span class="prod_author"> 박해영 · 오브제 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">57,600</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '10대를 위한 세계미래보고서 2035-2055 사회탐구+직업탐구 세트(전 2권)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200745993', item_name: '10대를 위한 세계미래보고서 2035-2055 사회탐구+직업탐구 세트(전 2권)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200745993', ep_item_name: '상품1_10대를 위한 세계미래보고서 2035-2055 사회탐구+직업탐구 세트(전 2권)'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200745993"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200745993"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/S000200745993.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/S000200745993.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200745993"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      10대를 위한 세계미래보고서 2035-2055 사회탐구+직업탐구
                      세트(전 2권)
                    </span>
                  </a>
                  <span class="prod_author"> </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">23,040</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '곰곰 걷다'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200661861', item_name: '곰곰 걷다', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200661861', ep_item_name: '상품1_곰곰 걷다'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200661861"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200661861"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788954690492.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788954690492.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200661861"
                    class="prod_info"
                  >
                    <span class="prod_name"> 곰곰 걷다 </span>
                  </a>
                  <span class="prod_author"> 남윤잎 · 문학동네 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">15,120</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '7~9세 독립보다 중요한 것은 없습니다'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200645965', item_name: '7~9세 독립보다 중요한 것은 없습니다', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200645965', ep_item_name: '상품1_7~9세 독립보다 중요한 것은 없습니다'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200645965"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200645965"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788950978907.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788950978907.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200645965"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      7~9세 독립보다 중요한 것은 없습니다
                    </span>
                  </a>
                  <span class="prod_author"> 이서윤 · 아울북 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">17,100</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '돈은 좋지만 재테크는 겁나는 너에게'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200738016', item_name: '돈은 좋지만 재테크는 겁나는 너에게', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200738016', ep_item_name: '상품1_돈은 좋지만 재테크는 겁나는 너에게'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200738016"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200738016"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788960306134.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788960306134.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200738016"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      돈은 좋지만 재테크는 겁나는 너에게
                    </span>
                  </a>
                  <span class="prod_author"> 뿅글이 · 황금부엉이 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">14,850</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '아주 작은 시작의 힘'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200581598', item_name: '아주 작은 시작의 힘', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200581598', ep_item_name: '상품1_아주 작은 시작의 힘'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200581598"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200581598"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791191825701.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791191825701.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200581598"
                    class="prod_info"
                  >
                    <span class="prod_name"> 아주 작은 시작의 힘 </span>
                  </a>
                  <span class="prod_author"> 박민선 · 빅피시 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">14,850</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '어반라이크(Urbanlike)(No.45)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200489599', item_name: '어반라이크(Urbanlike)(No.45)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200489599', ep_item_name: '상품1_어반라이크(Urbanlike)(No.45)'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200489599"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200489599"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791189096359.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791189096359.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200489599"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      어반라이크(Urbanlike)(No.45)
                    </span>
                  </a>
                  <span class="prod_author">
                    어반라이크 편집부 · 어반북스
                  </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">23,850</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '2023 투자자산운용사 실제유형 모의고사+특별부록 PASSCODE Premium ver 2.0'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200632050', item_name: '2023 투자자산운용사 실제유형 모의고사+특별부록 PASSCODE Premium ver 2.0', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200632050', ep_item_name: '상품1_2023 투자자산운용사 실제유형 모의고사+특별부록 PASSCODE Premium ver 2.0'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200632050"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200632050"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791138341134.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791138341134.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200632050"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      2023 투자자산운용사 실제유형 모의고사+특별부록 PASSCODE
                      Premium ver 2.0
                    </span>
                  </a>
                  <span class="prod_author"> 유창호 · 시대고시기획 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">44,100</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '파울루 벤투'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200743303', item_name: '파울루 벤투', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200743303', ep_item_name: '상품1_파울루 벤투'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200743303"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200743303"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791169780032.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791169780032.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200743303"
                    class="prod_info"
                  >
                    <span class="prod_name"> 파울루 벤투 </span>
                  </a>
                  <span class="prod_author">
                    선수 에디터스 · 브레인스토어
                  </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">15,120</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '환자가 몰리는 병원은 서비스가 다르다'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200738082', item_name: '환자가 몰리는 병원은 서비스가 다르다', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200738082', ep_item_name: '상품1_환자가 몰리는 병원은 서비스가 다르다'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200738082"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200738082"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791192259802.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791192259802.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200738082"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      환자가 몰리는 병원은 서비스가 다르다
                    </span>
                  </a>
                  <span class="prod_author"> 전희진 · 굿웰스북스 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">14,400</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '매3언어와매체 매일 개념 3개씩 공부하는 언어(문법)와 매체 수능 기출(2023)(2024 수능대비)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200572304', item_name: '매3언어와매체 매일 개념 3개씩 공부하는 언어(문법)와 매체 수능 기출(2023)(2024 수능대비)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200572304', ep_item_name: '상품1_매3언어와매체 매일 개념 3개씩 공부하는 언어(문법)와 매체 수능 기출(2023)(2024 수능대비)'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200572304"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200572304"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791165269975.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791165269975.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200572304"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      매3언어와매체 매일 개념 3개씩 공부하는 언어(문법)와 매체
                      수능 기출(2023)(2024 수능대비)
                    </span>
                  </a>
                  <span class="prod_author"> 안인숙 · 키출판사 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">14,400</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '2023 기초학력 진단평가 초5(8절)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200212503', item_name: '2023 기초학력 진단평가 초5(8절)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200212503', ep_item_name: '상품1_2023 기초학력 진단평가 초5(8절)'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200212503"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200212503"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788954768467.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9788954768467.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200212503"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      2023 기초학력 진단평가 초5(8절)
                    </span>
                  </a>
                  <span class="prod_author">
                    EBS 편집부 · 한국교육방송공사(EBSi)
                  </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">11,700</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '비됴클래스의 유튜브 영상 편집 with 프리미어 프로'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200609935', item_name: '비됴클래스의 유튜브 영상 편집 with 프리미어 프로', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200609935', ep_item_name: '상품1_비됴클래스의 유튜브 영상 편집 with 프리미어 프로'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200609935"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200609935"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791169210669.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791169210669.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200609935"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      비됴클래스의 유튜브 영상 편집 with 프리미어 프로
                    </span>
                  </a>
                  <span class="prod_author"> 하지원 · 한빛미디어 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">20,700</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '영어가 술술 나오는 만능패턴 100'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200563569', item_name: '영어가 술술 나오는 만능패턴 100', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200563569', ep_item_name: '상품1_영어가 술술 나오는 만능패턴 100'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200563569"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200563569"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791159098291.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791159098291.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200563569"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      영어가 술술 나오는 만능패턴 100
                    </span>
                  </a>
                  <span class="prod_author"> 세리나 황 · 교보문고 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">11,700</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_국내도서', '클릭_상품', '하버드식 호흡의 기술'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200688685', item_name: '하버드식 호흡의 기술', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200688685', ep_item_name: '상품1_하버드식 호흡의 기술'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200688685"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200688685"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791158463854.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9791158463854.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200688685"
                    class="prod_info"
                  >
                    <span class="prod_name"> 하버드식 호흡의 기술 </span>
                  </a>
                  <span class="prod_author"> 네고로 히데유키 · 비타북스 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">14,400</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
        <button
          type="button"
          class="swiper-button-prev type_white"
          onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '', '좌측', '');"
          tabindex="0"
          role="button"
          aria-label="Previous slide"
          aria-disabled="false"
        >
          <span class="hidden">이전</span>
        </button>
        <button
          type="button"
          class="swiper-button-next type_white"
          onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '', '우측', '');"
          tabindex="0"
          role="button"
          aria-label="Next slide"
          aria-disabled="false"
        >
          <span class="hidden">다음</span>
        </button>
      </div>
      <div id="225" class="welcome_prod_swiper_wrap outside_nav hidden">
        <div class="swiper-container swiper-container-horizontal">
          <ul class="swiper-wrapper" style="transition-duration: 0ms">
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_외국도서', '클릭_상품', 'Let's Talk About Race'); ga360.EcommerceSet('select_item', [ {item_id: 'S000002226268', item_name: 'Let's Talk About Race', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000002226268', ep_item_name: '상품1_Let's Talk About Race'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000002226268"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000002226268"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9780064462266.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9780064462266.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000002226268"
                    class="prod_info"
                  >
                    <span class="prod_name"> Let's Talk About Race </span>
                  </a>
                  <span class="prod_author">
                    Lester, Julius/ Barbour, Karen (ILT) · Harpercollins
                    Juvenile
                  </span>
                  <div class="prod_price">
                    <span class="percent">30%</span>
                    <span class="price">
                      <span class="val">8,750</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_외국도서', '클릭_상품', 'SPY×FAMILY  10'); ga360.EcommerceSet('select_item', [ {item_id: 'S000061758766', item_name: 'SPY×FAMILY  10', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000061758766', ep_item_name: '상품1_SPY×FAMILY  10'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000061758766"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000061758766"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9784088831275.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9784088831275.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000061758766"
                    class="prod_info"
                  >
                    <span class="prod_name"> SPY×FAMILY 10 </span>
                  </a>
                  <span class="prod_author"> 遠藤 達哉 著 · 集英社 </span>
                  <div class="prod_price">
                    <span class="percent">10%</span>
                    <span class="price">
                      <span class="val">5,350</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_외국도서', '클릭_상품', 'Dragon Masters 22: Guarding the Invisible Dragons'); ga360.EcommerceSet('select_item', [ {item_id: 'S000003163117', item_name: 'Dragon Masters 22: Guarding the Invisible Dragons', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000003163117', ep_item_name: '상품1_Dragon Masters 22: Guarding the Invisible Dragons'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000003163117"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000003163117"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9781338776904.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9781338776904.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000003163117"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      Dragon Masters 22: Guarding the Invisible Dragons
                    </span>
                  </a>
                  <span class="prod_author">
                    West, Tracey · Scholastic Inc
                  </span>
                  <div class="prod_price">
                    <span class="percent">30%</span>
                    <span class="price">
                      <span class="val">5,460</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_외국도서', '클릭_상품', 'Verity'); ga360.EcommerceSet('select_item', [ {item_id: 'S000003200085', item_name: 'Verity', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000003200085', ep_item_name: '상품1_Verity'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000003200085"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000003200085"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9781408726600.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9781408726600.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000003200085"
                    class="prod_info"
                  >
                    <span class="prod_name"> Verity </span>
                  </a>
                  <span class="prod_author">
                    Hoover, Colleen · Little Brown and Co. (UK)
                  </span>
                  <div class="prod_price">
                    <span class="percent">25%</span>
                    <span class="price">
                      <span class="val">11,000</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_외국도서', '클릭_상품', 'What If? 2'); ga360.EcommerceSet('select_item', [ {item_id: 'S000002703866', item_name: 'What If? 2', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000002703866', ep_item_name: '상품1_What If? 2'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000002703866"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000002703866"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9780593542903.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9780593542903.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000002703866"
                    class="prod_info"
                  >
                    <span class="prod_name"> What If? 2 </span>
                  </a>
                  <span class="prod_author">
                    Randall Munroe · Riverhead Books
                  </span>
                  <div class="prod_price">
                    <span class="percent">18%</span>
                    <span class="price">
                      <span class="val">17,700</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_외국도서', '클릭_상품', 'The Incredible Math Games Book'); ga360.EcommerceSet('select_item', [ {item_id: 'S000003282389', item_name: 'The Incredible Math Games Book', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000003282389', ep_item_name: '상품1_The Incredible Math Games Book'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000003282389"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000003282389"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9781465436283.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9781465436283.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000003282389"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      The Incredible Math Games Book
                    </span>
                  </a>
                  <span class="prod_author">
                    Dk Publishing (COR) · DK Publishing (Dorling Kindersley)
                  </span>
                  <div class="prod_price">
                    <span class="percent">38%</span>
                    <span class="price">
                      <span class="val">13,700</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_외국도서', '클릭_상품', 'The Cold Start Problem'); ga360.EcommerceSet('select_item', [ {item_id: 'S000002224720', item_name: 'The Cold Start Problem', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000002224720', ep_item_name: '상품1_The Cold Start Problem'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000002224720"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000002224720"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9780062969743.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9780062969743.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000002224720"
                    class="prod_info"
                  >
                    <span class="prod_name"> The Cold Start Problem </span>
                  </a>
                  <span class="prod_author">
                    Chen, Andrew · Harper Business
                  </span>
                  <div class="prod_price">
                    <span class="percent">30%</span>
                    <span class="price">
                      <span class="val">24,900</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_외국도서', '클릭_상품', 'THE FIRST SLAM DUNK re:SOURCE'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200098101', item_name: 'THE FIRST SLAM DUNK re:SOURCE', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200098101', ep_item_name: '상품1_THE FIRST SLAM DUNK re:SOURCE'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200098101"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200098101"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9784087926026.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/9784087926026.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200098101"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      THE FIRST SLAM DUNK re:SOURCE
                    </span>
                  </a>
                  <span class="prod_author"> 井上雄彦 · 集英社 </span>
                  <div class="prod_price">
                    <span class="percent">12%</span>
                    <span class="price">
                      <span class="val">20,350</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_외국도서', '클릭_상품', '「하이큐-!! TO THE TOP (애니판)」마스코트 챰 일본식 복장 응원단 히나타 쇼요'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200524732', item_name: '「하이큐-!! TO THE TOP (애니판)」마스코트 챰 일본식 복장 응원단 히나타 쇼요', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200524732', ep_item_name: '상품1_「하이큐-!! TO THE TOP (애니판)」마스코트 챰 일본식 복장 응원단 히나타 쇼요'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200524732"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200524732"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/4549743755588.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/4549743755588.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200524732"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      「하이큐-!! TO THE TOP (애니판)」마스코트 챰 일본식 복장
                      응원단 히나타 쇼요
                    </span>
                  </a>
                  <span class="prod_author"> ム-ビック · ム-ビック </span>
                  <div class="prod_price">
                    <span class="percent">5%</span>
                    <span class="price">
                      <span class="val">16,070</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
            <li
              class="prod_item swiper-slide"
              onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '탭_외국도서', '클릭_상품', '모노마스터 MONOMASTER 2023.03 (무라카미 다카시 FLOWER LED ROOM LIGHT)'); ga360.EcommerceSet('select_item', [ {item_id: 'S000200307035', item_name: '모노마스터 MONOMASTER 2023.03 (무라카미 다카시 FLOWER LED ROOM LIGHT)', item_category: '종이책', item_list_name: '웰컴_화제의신상'} ], {currency: 'KRW'}, {ep_ecommerce_section: 'select_item>웰컴_화제의신상', ep_item_id: 'S000200307035', ep_item_name: '상품1_모노마스터 MONOMASTER 2023.03 (무라카미 다카시 FLOWER LED ROOM LIGHT)'}, {});"
            >
              <div class="prod_area">
                <div class="prod_thumb_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200307035"
                    class="prod_link"
                  >
                    <span class="img_box no_img">
                      <img
                        data-kbbfn="s3-image"
                        loading="lazy"
                        alt="S000200307035"
                        src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/4910187770336.jpg"
                        data-src="https://contents.kyobobook.co.kr/sih/fit-in/300x0/pdt/4910187770336.jpg"
                      />
                    </span>
                  </a>
                </div>
                <div class="prod_info_box">
                  <a
                    href="https://product.kyobobook.co.kr/detail/S000200307035"
                    class="prod_info"
                  >
                    <span class="prod_name">
                      모노마스터 MONOMASTER 2023.03 (무라카미 다카시 FLOWER LED
                      ROOM LIGHT)
                    </span>
                  </a>
                  <span class="prod_author"> 寶島社 · 寶島社 </span>
                  <div class="prod_price">
                    <span class="price">
                      <span class="val">22,500</span>
                      <span class="unit">원</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <span
            class="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          ></span>
        </div>
        <button
          type="button"
          class="swiper-button-prev type_white"
          onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '', '좌측', '');"
          tabindex="0"
          role="button"
          aria-label="Previous slide"
          aria-disabled="false"
        >
          <span class="hidden">이전</span>
        </button>
        <button
          type="button"
          class="swiper-button-next type_white"
          onclick="ga360.GA_Event('click_종이책_웰컴_PC', '화제의신상', '', '우측', '');"
          tabindex="0"
          role="button"
          aria-label="Next slide"
          aria-disabled="false"
        >
          <span class="hidden">다음</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<script setup></script>
