<template>
  <header
    class="header_wrapper has_banner perform sps sps--abv has_hot_line sps-abv"
    id="welcome_header_wrap"
    data-sps-offset="191"
    style=""
  >
    <div class="top_banner_wrap" id="welcome_top_banner">
      <div class="top_banner_inner">
        <a href="https://event.kyobobook.co.kr/detail/205040">
          <img
            class="img_top_banner"
            src="https://contents.kyobobook.co.kr/display/INK_00_공통_01_상단띠배너_1920x70_b60753f089e140c0aaa5224a0d1a2215.jpg"
            alt="[sam x 북모닝] 도전! 연간독서"
          />
        </a>
        <button type="button" class="btn_close_banner">배너 닫기</button>
      </div>
    </div>

    <div class="service_mall_wrap">
      <div class="service_mall_inner">
        <div class="customer_service_box">
          <ul class="customer_service_list">
            <li class="customer_service_item" style="">
              <a
                href="https://mmbr.kyobobook.co.kr/join"
                class="util_link"
                onclick="ga360.GA_Event('click_공통_PC', '헤더', '', '회원가입', '');"
                >회원가입</a
              >
            </li>
            <li class="customer_service_item" style="">
              <a
                class="util_link"
                onclick="ga360.GA_Event('click_공통_PC', '헤더', '', '로그인', '');"
                href="#"
                data-role="login"
                >로그인</a
              >
            </li>
            <li class="customer_service_item">
              <a
                href="https://www.kyobobook.co.kr/cscenter"
                class="util_link"
                onclick="ga360.GA_Event('click_공통_PC', '헤더', '', '고객센터', '');"
                >고객센터</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header_inner">
      <div class="gnb_search_wrap">
        <div class="logo_box">
          <a
            href="https://www.kyobobook.co.kr/"
            class="logo_link"
            onclick="ga360.GA_Event('click_공통_PC', '헤더', '', '교보문고', '');"
          >
            <span class="hidden">교보문고</span>
          </a>
        </div>
        <link
          rel="stylesheet"
          href="https://contents.kyobobook.co.kr/pmtn/2022/general/221223_seasonal/seasonal_ink.css"
        />
        <div class="gnb_search_box">
          <div class="form_sel type_gnb" data-class="type_gnb">
            <span
              tabindex="0"
              id="gbCode-button"
              role="combobox"
              aria-expanded="false"
              aria-autocomplete="list"
              aria-owns="gbCode-menu"
              aria-haspopup="true"
              title="검색유형선택"
              class="ui-selectmenu-button ui-button ui-widget ui-selectmenu-button-closed ui-corner-all"
              aria-activedescendant="ui-id-1"
              aria-labelledby="ui-id-1"
              aria-disabled="false"
              style="position: relative"
              ><span class="ui-selectmenu-text" style="line-height: 45px"
                >통합검색</span
              ></span
            >
          </div>
          <div class="search_input_wrap">
            <input
              id="searchKeyword"
              type="search"
              class="ip_gnb_search"
              title="통합검색어 입력"
              autocomplete="off"
              value=""
              onclick="ga360.GA_Event('click_공통_MO', '헤더', '', '검색창클릭', '');"
              placeholder="냉담의 시대, 쿨함의 가면을 쓴 사람들"
            />
            <input
              type="hidden"
              name="searchBoxEventurl"
              id="searchBoxEventurl"
              value="http://imac.kyobobook.co.kr/click/INK/ink_wel_new/ink_wel@wel_02?adsno=130613&amp;ctvno=93303&amp;clkno=93342"
            />
            <button type="button" class="btn_ip_clear">
              <span class="hidden">초기화</span>
            </button>
          </div>
          <a
            href="javascript:goAutoSearchLayer()"
            data-role="gnb-search-submit"
            class="btn_gnb_search"
          >
            <span class="hidden">검색</span>
          </a>
        </div>
        <ul class="user_menu_list">
          <li class="user_menu_item cart">
            <a
              href="https://order.kyobobook.co.kr/cart"
              class="user_menu_link"
              onclick="ga360.GA_Event('click_공통_PC', '헤더', '', '장바구니', '');"
            >
              <span class="hidden">장바구니</span>
              <!-- DESC :: 0개인경우 count 영역 미노출 / 최대 99 -->
              <span
                data-kbbfn="cart-size"
                style="display: none"
                class="cnt"
              ></span>
            </a>
          </li>
          <!-- DESC : 로그인 후 li.user_menu_item [ login ] class 추가 -->
          <li class="user_menu_item my">
            <a
              href="#"
              class="user_menu_link"
              onclick="ga360.GA_Event('click_공통_PC', '헤더', '', '마이룸', '');"
            >
              <span class="img_box no_img"> <img /> </span>
              <span class="hidden">마이</span
              ><!-- 수정 220428 메뉴명 변경(마이) -->
            </a>
          </li>
        </ul>
        <!-- DESC : 레이어 활성화 시 [ active ] class 추가 -->
        <div class="auto_complete_wrap auto_complete_maintain" id="hFrame">
          <div class="search_content_wrap inKeyword"></div>
          <div class="search_content_wrap noKeyword">
            <div class="recommend_keyword_area">
              <div class="title_wrap title_size_def">
                <p class="title_heading">추천 검색어</p>
              </div>
              <div class="tag_wrap" id="recommendKeywordBox"></div>
            </div>
            <div class="keyword_contents_area">
              <div class="recent_keyword_box"></div>
              <div class="keyword_prod_box" id="keyWordProdBox"></div>
              <div class="hot_keyword_box" id="hotKeywordBox">
                <div class="title_wrap title_size_def">
                  <p class="title_heading">실시간 인기 검색어</p>
                  <div class="right_area">
                    <!-- form_sel -->
                    <!--<div class="form_sel" data-class="type_arw auto_complete_maintain">
                            <select title="연령기준 정렬" id="ageSel">
                                <option value="">전연령</option>
                                <option value="10">10대</option>
                                <option value="20">20대</option>
                                <option value="30">30대</option>
                                <option value="40">40대↑</option>
                            </select>
                        </div>-->
                    <!-- //form_sel -->
                    <!-- form_sel -->
                    <!--<div class="form_sel" data-class="type_arw auto_complete_maintain">
                            <select title="성별기준 정렬" id="genderSel">
                                <option value="">전성별</option>
                                <option value="1">남성</option>
                                <option value="2">여성</option>
                            </select>
                        </div>-->
                    <!-- //form_sel -->
                  </div>
                </div>
                <div class="hot_keyword_list_wrap"></div>
              </div>
            </div>
            <div class="util_area">
              <a
                href="javascript:goDetailSearch();"
                class="btn_xs btn_light_gray"
                ><span class="ico_search"></span
                ><span class="text">상세검색</span></a
              >
              <a href="javascript:goCsCenter();" class="btn_xs btn_line_gray"
                ><span class="ico_link"></span
                ><span class="text">도움말</span></a
              >
            </div>
          </div>
          <button type="button" class="btn_layer_close" id="close_search_auto">
            <span class="ico_layer_close"></span
            ><span class="hidden">닫기</span>
          </button>
        </div>
      </div>
      <nav class="gnb_wrap">
        <div class="anb_wrap active animated">
          <button
            type="button"
            class="btn_anb"
            onclick="ga360.GA_Event('click_공통_PC', 'GNB', '', '햄버거', '');"
          >
            <span class="hidden">전체메뉴</span>
          </button>
          <div class="anb_area">
            <div
              class="tab_wrap ui-tabs ui-corner-all ui-widget ui-widget-content"
            >
              <div class="tab_list_wrap">
                <ul
                  class="tabs ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
                  role="tablist"
                >
                  <li
                    class="tab_item ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active"
                    role="tab"
                    tabindex="0"
                    aria-controls="tabAnbCategory"
                    aria-labelledby="ui-id-6"
                    aria-selected="true"
                    aria-expanded="true"
                  >
                    <a
                      href="#tabAnbCategory"
                      class="tab_link ui-tabs-anchor"
                      onclick="ga360.GA_Event('click_공통_PC', 'LNB', '', '카테고리전체보기', '');"
                      role="presentation"
                      tabindex="-1"
                      id="ui-id-6"
                      ><span class="tab_text">카테고리 전체보기</span></a
                    >
                  </li>
                  <li
                    class="tab_item ui-tabs-tab ui-corner-top ui-state-default ui-tab"
                    role="tab"
                    tabindex="-1"
                    aria-controls="tabAnbService"
                    aria-labelledby="ui-id-7"
                    aria-selected="false"
                    aria-expanded="false"
                  >
                    <a
                      href="#tabAnbService"
                      class="tab_link ui-tabs-anchor"
                      onclick="ga360.GA_Event('click_공통_PC', 'LNB', '', '서비스전체보기', '');"
                      role="presentation"
                      tabindex="-1"
                      id="ui-id-7"
                      ><span class="tab_text">서비스 전체보기</span></a
                    >
                  </li>
                </ul>
              </div>
              <div
                id="tabAnbCategory"
                class="tab_content ui-tabs-panel ui-corner-bottom ui-widget-content"
                aria-labelledby="ui-id-6"
                role="tabpanel"
                aria-hidden="false"
              >
                <div
                  class="tab_wrap type_md channel ui-tabs ui-corner-all ui-widget ui-widget-content"
                >
                  <div class="tab_list_wrap">
                    <ul
                      class="tabs ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
                      role="tablist"
                    >
                      <li
                        class="tab_item ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active"
                        role="tab"
                        tabindex="0"
                        aria-controls="tabAnbCategoryKyobo"
                        aria-labelledby="ui-id-8"
                        aria-selected="true"
                        aria-expanded="true"
                      >
                        <a
                          href="#tabAnbCategoryKyobo"
                          class="tab_link ui-tabs-anchor"
                          onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '', '');"
                          role="presentation"
                          tabindex="-1"
                          id="ui-id-8"
                          ><span class="tab_text">교보문고</span></a
                        >
                      </li>
                    </ul>
                  </div>
                  <div
                    id="tabAnbCategoryKyobo"
                    class="tab_content anb_category ui-tabs-panel ui-corner-bottom ui-widget-content"
                    aria-labelledby="ui-id-8"
                    role="tabpanel"
                    aria-hidden="false"
                  >
                    <div class="anb_category_inner">
                      <div
                        class="tab_wrap category ui-tabs ui-corner-all ui-widget ui-widget-content"
                      >
                        <div class="tab_list_wrap">
                          <ul
                            class="tabs ui-tabs-nav ui-corner-all ui-helper-reset ui-helper-clearfix ui-widget-header"
                            role="tablist"
                          >
                            <li
                              class="tab_item ui-tabs-tab ui-corner-top ui-state-default ui-tab ui-tabs-active ui-state-active"
                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서', '');"
                              role="tab"
                              tabindex="0"
                              aria-controls="tabAnbCategorySub01"
                              aria-labelledby="ui-id-12"
                              aria-selected="true"
                              aria-expanded="true"
                            >
                              <a
                                href="#tabAnbCategorySub01"
                                class="tab_link ui-tabs-anchor"
                                role="presentation"
                                tabindex="-1"
                                id="ui-id-12"
                              >
                                <span class="tab_text">국내도서</span>
                              </a>
                            </li>
                            <li
                              class="tab_item ui-tabs-tab ui-corner-top ui-state-default ui-tab"
                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서', '');"
                              role="tab"
                              tabindex="-1"
                              aria-controls="tabAnbCategorySub02"
                              aria-labelledby="ui-id-13"
                              aria-selected="false"
                              aria-expanded="false"
                            >
                              <a
                                href="#tabAnbCategorySub02"
                                class="tab_link ui-tabs-anchor"
                                role="presentation"
                                tabindex="-1"
                                id="ui-id-13"
                              >
                                <span class="tab_text">서양도서</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          id="tabAnbCategorySub01"
                          class="tab_content has_banner ui-tabs-panel ui-corner-bottom ui-widget-content"
                          aria-labelledby="ui-id-12"
                          role="tabpanel"
                          aria-hidden="false"
                        >
                          <div class="custom_scroll_wrap" data-simplebar="init">
                            <div class="simplebar-wrapper" style="margin: 0px">
                              <div
                                class="simplebar-height-auto-observer-wrapper"
                              >
                                <div
                                  class="simplebar-height-auto-observer"
                                ></div>
                              </div>
                              <div class="simplebar-mask">
                                <div
                                  class="simplebar-offset"
                                  style="right: 0px; bottom: 0px"
                                >
                                  <div
                                    class="simplebar-content-wrapper"
                                    style="height: auto; overflow: hidden"
                                  >
                                    <div
                                      class="simplebar-content"
                                      style="padding: 0px"
                                    >
                                      <div
                                        class="custom_scroll_inner"
                                        tabindex="0"
                                      >
                                        <div class="category_view_area">
                                          <a
                                            href="https://product.kyobobook.co.kr/"
                                            class="btn_arw_link"
                                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서', '');"
                                          >
                                            <span class="text"
                                              >국내도서 전체</span
                                            >
                                          </a>
                                          <div class="fold_box_wrap category">
                                            <div class="col_area">
                                              <ul class="fold_box_list">
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>소설', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/01"
                                                    >
                                                      소설
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0101"
                                                          class="category_link"
                                                          >한국소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0103"
                                                          class="category_link"
                                                          >영미소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0105"
                                                          class="category_link"
                                                          >일본소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0107"
                                                          class="category_link"
                                                          >중국소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0109"
                                                          class="category_link"
                                                          >러시아소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0111"
                                                          class="category_link"
                                                          >프랑스소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0112"
                                                          class="category_link"
                                                          >독일소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0115"
                                                          class="category_link"
                                                          >북유럽소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0116"
                                                          class="category_link"
                                                          >그외유럽소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0117"
                                                          class="category_link"
                                                          >기타나라소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0118"
                                                          class="category_link"
                                                          >청소년소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0121"
                                                          class="category_link"
                                                          >고전소설/문학선</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0124"
                                                          class="category_link"
                                                          >세계문학전집</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0126"
                                                          class="category_link"
                                                          >라이트노벨</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0128"
                                                          class="category_link"
                                                          >장르소설</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>시/에세이', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/03"
                                                    >
                                                      시/에세이
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0301"
                                                          class="category_link"
                                                          >한국시</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0302"
                                                          class="category_link"
                                                          >해외시</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0304"
                                                          class="category_link"
                                                          >테마에세이</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0307"
                                                          class="category_link"
                                                          >나라별 에세이</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0311"
                                                          class="category_link"
                                                          >인물/자전적에세이</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0317"
                                                          class="category_link"
                                                          >청소년 시/에세이</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0319"
                                                          class="category_link"
                                                          >시/에세이문고</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>인문', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/05"
                                                    >
                                                      인문
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0501"
                                                          class="category_link"
                                                          >인문학일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0503"
                                                          class="category_link"
                                                          >심리학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0505"
                                                          class="category_link"
                                                          >교육학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0507"
                                                          class="category_link"
                                                          >유아교육</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0509"
                                                          class="category_link"
                                                          >특수교육</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0511"
                                                          class="category_link"
                                                          >임용고시</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0513"
                                                          class="category_link"
                                                          >철학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0515"
                                                          class="category_link"
                                                          >문학이론</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0517"
                                                          class="category_link"
                                                          >한국문학론</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0519"
                                                          class="category_link"
                                                          >영미문학론</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0520"
                                                          class="category_link"
                                                          >중국문학론</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0521"
                                                          class="category_link"
                                                          >세계문학론</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0523"
                                                          class="category_link"
                                                          >언어학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0525"
                                                          class="category_link"
                                                          >독서/글쓰기</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0527"
                                                          class="category_link"
                                                          >문헌정보학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0529"
                                                          class="category_link"
                                                          >역학/사주</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0532"
                                                          class="category_link"
                                                          >대학교재</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0533"
                                                          class="category_link"
                                                          >인문교양총서</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0535"
                                                          class="category_link"
                                                          >인문고전총서</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0551"
                                                          class="category_link"
                                                          >방송통신대교재</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>가정/육아', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/07"
                                                    >
                                                      가정/육아
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0701"
                                                          class="category_link"
                                                          >결혼/가정</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0703"
                                                          class="category_link"
                                                          >임신/출산</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0704"
                                                          class="category_link"
                                                          >육아</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0705"
                                                          class="category_link"
                                                          >자녀교육</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0707"
                                                          class="category_link"
                                                          >살림의지혜</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0709"
                                                          class="category_link"
                                                          >홈인테리어</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>요리', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/08"
                                                    >
                                                      요리
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0801"
                                                          class="category_link"
                                                          >요리일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0802"
                                                          class="category_link"
                                                          >요리에세이</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0803"
                                                          class="category_link"
                                                          >테마별요리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0805"
                                                          class="category_link"
                                                          >베이킹/간식</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0807"
                                                          class="category_link"
                                                          >계절요리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0809"
                                                          class="category_link"
                                                          >재료별요리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0811"
                                                          class="category_link"
                                                          >나라별요리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0813"
                                                          class="category_link"
                                                          >생활요리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0815"
                                                          class="category_link"
                                                          >전문요리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0817"
                                                          class="category_link"
                                                          >와인/커피/음료</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0819"
                                                          class="category_link"
                                                          >요리수험서</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>건강', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/09"
                                                    >
                                                      건강
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0901"
                                                          class="category_link"
                                                          >건강일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0903"
                                                          class="category_link"
                                                          >뇌건강</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0905"
                                                          class="category_link"
                                                          >한방치료</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0907"
                                                          class="category_link"
                                                          >자연건강</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0908"
                                                          class="category_link"
                                                          >건강식사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0909"
                                                          class="category_link"
                                                          >질병치료/예방</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0911"
                                                          class="category_link"
                                                          >다이어트</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0913"
                                                          class="category_link"
                                                          >운동/트레이닝</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0915"
                                                          class="category_link"
                                                          >피부관리/메이크업</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/0920"
                                                          class="category_link"
                                                          >건강문고</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>취미/실용/스포츠', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/11"
                                                    >
                                                      취미/실용/스포츠
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1101"
                                                          class="category_link"
                                                          >가정원예</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1102"
                                                          class="category_link"
                                                          >홈인테리어/수납</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1103"
                                                          class="category_link"
                                                          >생활공예/DIY</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1104"
                                                          class="category_link"
                                                          >살림의지혜</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1105"
                                                          class="category_link"
                                                          >반려동물</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1107"
                                                          class="category_link"
                                                          >등산/낚시</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1109"
                                                          class="category_link"
                                                          >바둑/골프</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1113"
                                                          class="category_link"
                                                          >무술</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1115"
                                                          class="category_link"
                                                          >스포츠</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1117"
                                                          class="category_link"
                                                          >레크레이션/게임</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1118"
                                                          class="category_link"
                                                          >퀴즈/퍼즐/스도쿠</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1119"
                                                          class="category_link"
                                                          >무용</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1121"
                                                          class="category_link"
                                                          >체육</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1124"
                                                          class="category_link"
                                                          >취미일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1125"
                                                          class="category_link"
                                                          >취미관련상품</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1130"
                                                          class="category_link"
                                                          >대학교재</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>경제/경영', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/13"
                                                    >
                                                      경제/경영
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1301"
                                                          class="category_link"
                                                          >경영일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1303"
                                                          class="category_link"
                                                          >경영이론</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1305"
                                                          class="category_link"
                                                          >경영관리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1307"
                                                          class="category_link"
                                                          >경영전략</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1309"
                                                          class="category_link"
                                                          >경제일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1311"
                                                          class="category_link"
                                                          >경제이론</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1313"
                                                          class="category_link"
                                                          >경제실무</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1315"
                                                          class="category_link"
                                                          >각국경제</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1316"
                                                          class="category_link"
                                                          >세무/회계</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1319"
                                                          class="category_link"
                                                          >마케팅/광고/고객</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1321"
                                                          class="category_link"
                                                          >유통/창업</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1323"
                                                          class="category_link"
                                                          >재테크/금융</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1325"
                                                          class="category_link"
                                                          >무역/운송</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1327"
                                                          class="category_link"
                                                          >관광/호텔</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1329"
                                                          class="category_link"
                                                          >경제/경영문고</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1331"
                                                          class="category_link"
                                                          >대학교재</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>자기계발', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/15"
                                                    >
                                                      자기계발
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1501"
                                                          class="category_link"
                                                          >성공/처세</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1503"
                                                          class="category_link"
                                                          >자기능력계발</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1505"
                                                          class="category_link"
                                                          >비즈니스능력계발</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1506"
                                                          class="category_link"
                                                          >인간관계</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1507"
                                                          class="category_link"
                                                          >화술/협상</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1508"
                                                          class="category_link"
                                                          >청소년자기계발</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1509"
                                                          class="category_link"
                                                          >오디오북</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1519"
                                                          class="category_link"
                                                          >전자책단말기/전자기기</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>정치/사회', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/17"
                                                    >
                                                      정치/사회
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1701"
                                                          class="category_link"
                                                          >정치/외교</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1703"
                                                          class="category_link"
                                                          >행정/정책</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1705"
                                                          class="category_link"
                                                          >국방/군사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1707"
                                                          class="category_link"
                                                          >법학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1709"
                                                          class="category_link"
                                                          >사회학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1711"
                                                          class="category_link"
                                                          >사회문제/복지</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1713"
                                                          class="category_link"
                                                          >언론/신문/방송</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1715"
                                                          class="category_link"
                                                          >정치/사회문고</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1717"
                                                          class="category_link"
                                                          >대학교재</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1720"
                                                          class="category_link"
                                                          >정부간행물</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>역사/문화', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/19"
                                                    >
                                                      역사/문화
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1901"
                                                          class="category_link"
                                                          >역사일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1903"
                                                          class="category_link"
                                                          >세계사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1905"
                                                          class="category_link"
                                                          >서양사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1907"
                                                          class="category_link"
                                                          >동양사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1909"
                                                          class="category_link"
                                                          >한국사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1911"
                                                          class="category_link"
                                                          >신화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1912"
                                                          class="category_link"
                                                          >민속학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1913"
                                                          class="category_link"
                                                          >문화일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1915"
                                                          class="category_link"
                                                          >문화사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1917"
                                                          class="category_link"
                                                          >역사인물</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1918"
                                                          class="category_link"
                                                          >역사기행</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1919"
                                                          class="category_link"
                                                          >청소년 역사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1920"
                                                          class="category_link"
                                                          >지리학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/1921"
                                                          class="category_link"
                                                          >대학교재</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                            <div class="col_area">
                                              <ul class="fold_box_list">
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>종교', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/21"
                                                    >
                                                      종교
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2101"
                                                          class="category_link"
                                                          >종교일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2103"
                                                          class="category_link"
                                                          >기독교(개신교)</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2105"
                                                          class="category_link"
                                                          >가톨릭</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2107"
                                                          class="category_link"
                                                          >불교</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2109"
                                                          class="category_link"
                                                          >그외종교</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2111"
                                                          class="category_link"
                                                          >CD/TAPE/악보</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>예술/대중문화', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/23"
                                                    >
                                                      예술/대중문화
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2301"
                                                          class="category_link"
                                                          >예술일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2303"
                                                          class="category_link"
                                                          >미술</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2305"
                                                          class="category_link"
                                                          >만화/애니메이션</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2307"
                                                          class="category_link"
                                                          >디자인/색채</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2309"
                                                          class="category_link"
                                                          >패션/의류</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2313"
                                                          class="category_link"
                                                          >음악</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2315"
                                                          class="category_link"
                                                          >사진/영상</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2317"
                                                          class="category_link"
                                                          >연극</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2319"
                                                          class="category_link"
                                                          >영화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2320"
                                                          class="category_link"
                                                          >예술기행</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2321"
                                                          class="category_link"
                                                          >예술문고</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2325"
                                                          class="category_link"
                                                          >청소년예술</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2327"
                                                          class="category_link"
                                                          >대학교재</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>중/고등참고서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/25"
                                                    >
                                                      중/고등참고서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2501"
                                                          class="category_link"
                                                          >고등학교 출판사별</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2503"
                                                          class="category_link"
                                                          >고등학교 과목별</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2505"
                                                          class="category_link"
                                                          >중학교 출판사별</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2509"
                                                          class="category_link"
                                                          >중학교 학년별</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2513"
                                                          class="category_link"
                                                          >예비중학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2515"
                                                          class="category_link"
                                                          >중간고사(중등)</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2517"
                                                          class="category_link"
                                                          >기말고사(중등)</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2521"
                                                          class="category_link"
                                                          >EBS 중학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2522"
                                                          class="category_link"
                                                          >EBS 고등</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2523"
                                                          class="category_link"
                                                          >강남구청
                                                          인터넷교재</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2524"
                                                          class="category_link"
                                                          >중고등경시/올림피아드</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2525"
                                                          class="category_link"
                                                          >특목고대비교재</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2526"
                                                          class="category_link"
                                                          >NEAT(국가영어능력평가)</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2527"
                                                          class="category_link"
                                                          >영어/수학일반/한자</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2529"
                                                          class="category_link"
                                                          >논술/면접대비</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2531"
                                                          class="category_link"
                                                          >중고학습문학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2533"
                                                          class="category_link"
                                                          >검정고시</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2535"
                                                          class="category_link"
                                                          >공부방법/진학</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>기술/공학', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/26"
                                                    >
                                                      기술/공학
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2601"
                                                          class="category_link"
                                                          >건축/인테리어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2603"
                                                          class="category_link"
                                                          >토목/건설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2605"
                                                          class="category_link"
                                                          >환경/소방/도시/조경</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2607"
                                                          class="category_link"
                                                          >자동차/운전</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2608"
                                                          class="category_link"
                                                          >운전면허</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2609"
                                                          class="category_link"
                                                          >공학일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2611"
                                                          class="category_link"
                                                          >금속/재료</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2613"
                                                          class="category_link"
                                                          >기계/역학/항공</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2615"
                                                          class="category_link"
                                                          >전기/전자</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2617"
                                                          class="category_link"
                                                          >농수산/축산</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2619"
                                                          class="category_link"
                                                          >생활과학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2621"
                                                          class="category_link"
                                                          >의학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2623"
                                                          class="category_link"
                                                          >대학교재</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>외국어', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/27"
                                                    >
                                                      외국어
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2701"
                                                          class="category_link"
                                                          >영어일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2703"
                                                          class="category_link"
                                                          >영어회화/청취</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2705"
                                                          class="category_link"
                                                          >비즈니스영어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2707"
                                                          class="category_link"
                                                          >영어문법/독해/작문</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2709"
                                                          class="category_link"
                                                          >영어문고</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2711"
                                                          class="category_link"
                                                          >영어수입교재</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2715"
                                                          class="category_link"
                                                          >방송영어교재</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2717"
                                                          class="category_link"
                                                          >수험영어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2719"
                                                          class="category_link"
                                                          >유학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2721"
                                                          class="category_link"
                                                          >번역/통역</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2723"
                                                          class="category_link"
                                                          >일본어일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2725"
                                                          class="category_link"
                                                          >일본어회화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2727"
                                                          class="category_link"
                                                          >일본어문법/작문</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2729"
                                                          class="category_link"
                                                          >일본어능력시험/JPT</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2733"
                                                          class="category_link"
                                                          >중국어일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2735"
                                                          class="category_link"
                                                          >중국어회화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2737"
                                                          class="category_link"
                                                          >중국어문법/독해</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2739"
                                                          class="category_link"
                                                          >HSK/중국어시험</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2740"
                                                          class="category_link"
                                                          >중국원서</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2741"
                                                          class="category_link"
                                                          >독일어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2743"
                                                          class="category_link"
                                                          >프랑스어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2745"
                                                          class="category_link"
                                                          >기타외국어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2747"
                                                          class="category_link"
                                                          >어학사전</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2750"
                                                          class="category_link"
                                                          >대학교재</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2755"
                                                          class="category_link"
                                                          >어린이영어</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>과학', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/29"
                                                    >
                                                      과학
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2901"
                                                          class="category_link"
                                                          >과학이론</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2903"
                                                          class="category_link"
                                                          >도감</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2905"
                                                          class="category_link"
                                                          >교양과학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2907"
                                                          class="category_link"
                                                          >수학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2909"
                                                          class="category_link"
                                                          >물리학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2911"
                                                          class="category_link"
                                                          >화학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2913"
                                                          class="category_link"
                                                          >생물학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2915"
                                                          class="category_link"
                                                          >지구과학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2917"
                                                          class="category_link"
                                                          >천문학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2918"
                                                          class="category_link"
                                                          >청소년 교양과학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2919"
                                                          class="category_link"
                                                          >과학문고</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2921"
                                                          class="category_link"
                                                          >대학교재</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/2923"
                                                          class="category_link"
                                                          >초과학</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>취업/수험서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/31"
                                                    >
                                                      취업/수험서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3101"
                                                          class="category_link"
                                                          >취업</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3102"
                                                          class="category_link"
                                                          >공무원 과목별</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3104"
                                                          class="category_link"
                                                          >공무원 직군별</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3105"
                                                          class="category_link"
                                                          >인적성/직무능력</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3106"
                                                          class="category_link"
                                                          >공인중개사/주택관리사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3108"
                                                          class="category_link"
                                                          >변호사/로스쿨/외무행정고시</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3110"
                                                          class="category_link"
                                                          >전문직자격증</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3112"
                                                          class="category_link"
                                                          >국가자격증</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3114"
                                                          class="category_link"
                                                          >경제/금융/회계자격증</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3116"
                                                          class="category_link"
                                                          >편입/독학사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3130"
                                                          class="category_link"
                                                          >한자능력시험</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>여행', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/32"
                                                    >
                                                      여행
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3201"
                                                          class="category_link"
                                                          >국내여행</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3203"
                                                          class="category_link"
                                                          >해외여행</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3204"
                                                          class="category_link"
                                                          >여행에세이</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3205"
                                                          class="category_link"
                                                          >테마여행</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3206"
                                                          class="category_link"
                                                          >인기지역</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3214"
                                                          class="category_link"
                                                          >지도</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>컴퓨터/IT', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/33"
                                                    >
                                                      컴퓨터/IT
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3301"
                                                          class="category_link"
                                                          >컴퓨터공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3302"
                                                          class="category_link"
                                                          >IT일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3303"
                                                          class="category_link"
                                                          >컴퓨터입문/활용</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3305"
                                                          class="category_link"
                                                          >전산통계/해석</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3307"
                                                          class="category_link"
                                                          >OS</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3309"
                                                          class="category_link"
                                                          >네트워크</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3310"
                                                          class="category_link"
                                                          >보안/해킹</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3311"
                                                          class="category_link"
                                                          >데이터베이스</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3312"
                                                          class="category_link"
                                                          >개발방법론</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3313"
                                                          class="category_link"
                                                          >게임</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3314"
                                                          class="category_link"
                                                          >웹프로그래밍</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3315"
                                                          class="category_link"
                                                          >프로그래밍 언어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3316"
                                                          class="category_link"
                                                          >모바일프로그래밍</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3317"
                                                          class="category_link"
                                                          >OA/사무자동화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3319"
                                                          class="category_link"
                                                          >웹사이트</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3321"
                                                          class="category_link"
                                                          >그래픽</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3323"
                                                          class="category_link"
                                                          >멀티미디어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3325"
                                                          class="category_link"
                                                          >CAD</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3328"
                                                          class="category_link"
                                                          >자격증/수험서</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3329"
                                                          class="category_link"
                                                          >대학교재</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>잡지', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/35"
                                                    >
                                                      잡지
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3501"
                                                          class="category_link"
                                                          >여성/남성/패션</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3503"
                                                          class="category_link"
                                                          >인문/사회/종교</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3505"
                                                          class="category_link"
                                                          >자연/공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3507"
                                                          class="category_link"
                                                          >문학/교양</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3509"
                                                          class="category_link"
                                                          >어학/교육</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3511"
                                                          class="category_link"
                                                          >예술/대중문화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3513"
                                                          class="category_link"
                                                          >취미/레포츠</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3515"
                                                          class="category_link"
                                                          >컴퓨터/게임</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3517"
                                                          class="category_link"
                                                          >외국잡지</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3519"
                                                          class="category_link"
                                                          >주간/월간/계간지</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>청소년', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/38"
                                                    >
                                                      청소년
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3801"
                                                          class="category_link"
                                                          >청소년 논술</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3802"
                                                          class="category_link"
                                                          >청소년 공부/학습법</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3803"
                                                          class="category_link"
                                                          >청소년 진로/직업</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3804"
                                                          class="category_link"
                                                          >청소년 유학/진학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3805"
                                                          class="category_link"
                                                          >청소년 건강/성교육</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3809"
                                                          class="category_link"
                                                          >청소년 자기계발</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3811"
                                                          class="category_link"
                                                          >청소년 에세이</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3813"
                                                          class="category_link"
                                                          >청소년 소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3815"
                                                          class="category_link"
                                                          >청소년 시</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3817"
                                                          class="category_link"
                                                          >청소년 고전</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3821"
                                                          class="category_link"
                                                          >청소년 철학/심리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3823"
                                                          class="category_link"
                                                          >청소년 역사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3825"
                                                          class="category_link"
                                                          >청소년 예술/문화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3827"
                                                          class="category_link"
                                                          >청소년 인문교양</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3829"
                                                          class="category_link"
                                                          >청소년 경제</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3833"
                                                          class="category_link"
                                                          >청소년 과학/컴퓨터</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                            <div class="col_area">
                                              <ul class="fold_box_list">
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>초등참고서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/39"
                                                    >
                                                      초등참고서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3901"
                                                          class="category_link"
                                                          >학년별 개념/문제</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3903"
                                                          class="category_link"
                                                          >전과</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3904"
                                                          class="category_link"
                                                          >학교시험 기출문제</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3906"
                                                          class="category_link"
                                                          >월간학습지</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3908"
                                                          class="category_link"
                                                          >EBS 초등</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3909"
                                                          class="category_link"
                                                          >단계별 학습지</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3910"
                                                          class="category_link"
                                                          >미취학아동</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3911"
                                                          class="category_link"
                                                          >영재학습지</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3914"
                                                          class="category_link"
                                                          >경시대회/올림피아드</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3915"
                                                          class="category_link"
                                                          >예비중학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3921"
                                                          class="category_link"
                                                          >논술</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3923"
                                                          class="category_link"
                                                          >한자</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3925"
                                                          class="category_link"
                                                          >출판사별</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/3927"
                                                          class="category_link"
                                                          >학습교구</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>유아(0~7세)', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/41"
                                                    >
                                                      유아(0~7세)
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4107"
                                                          class="category_link"
                                                          >유아놀이</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4109"
                                                          class="category_link"
                                                          >유아그림책</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4111"
                                                          class="category_link"
                                                          >유아교양</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4115"
                                                          class="category_link"
                                                          >유아학습</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4117"
                                                          class="category_link"
                                                          >유아캐릭터</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4119"
                                                          class="category_link"
                                                          >0세부터100세그림책</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4121"
                                                          class="category_link"
                                                          >0~3세</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4123"
                                                          class="category_link"
                                                          >4~7세</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>어린이(초등)', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/42"
                                                    >
                                                      어린이(초등)
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4202"
                                                          class="category_link"
                                                          >교과서수록/연계도서</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4204"
                                                          class="category_link"
                                                          >어린이문학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4206"
                                                          class="category_link"
                                                          >어린이교양</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4208"
                                                          class="category_link"
                                                          >어린이만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4210"
                                                          class="category_link"
                                                          >초등학교 입학준비</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4212"
                                                          class="category_link"
                                                          >초등1-2학년</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4214"
                                                          class="category_link"
                                                          >초등3-4학년</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4216"
                                                          class="category_link"
                                                          >초등5-6학년</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4220"
                                                          class="category_link"
                                                          >초등1-6학년</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>만화', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/47"
                                                    >
                                                      만화
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4701"
                                                          class="category_link"
                                                          >교양만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4702"
                                                          class="category_link"
                                                          >역사만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4703"
                                                          class="category_link"
                                                          >직업만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4704"
                                                          class="category_link"
                                                          >일상생활/드라마/가족만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4705"
                                                          class="category_link"
                                                          >동물등장만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4706"
                                                          class="category_link"
                                                          >요리만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4707"
                                                          class="category_link"
                                                          >도박만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4708"
                                                          class="category_link"
                                                          >고전/문학작품만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4711"
                                                          class="category_link"
                                                          >성인만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4712"
                                                          class="category_link"
                                                          >BL만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4713"
                                                          class="category_link"
                                                          >로맨스만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4715"
                                                          class="category_link"
                                                          >스포츠만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4717"
                                                          class="category_link"
                                                          >SF/판타지</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4718"
                                                          class="category_link"
                                                          >액션/무협만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4719"
                                                          class="category_link"
                                                          >명랑/코믹만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4720"
                                                          class="category_link"
                                                          >탐정/추리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4721"
                                                          class="category_link"
                                                          >공포/스릴러</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4722"
                                                          class="category_link"
                                                          >학원만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4723"
                                                          class="category_link"
                                                          >기타만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4724"
                                                          class="category_link"
                                                          >웹툰/카툰에세이</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4726"
                                                          class="category_link"
                                                          >그래픽노블</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4728"
                                                          class="category_link"
                                                          >캐릭터상품</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4730"
                                                          class="category_link"
                                                          >일러스트/작법</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/4732"
                                                          class="category_link"
                                                          >만화잡지</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>대학교재', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/50"
                                                    >
                                                      대학교재
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5001"
                                                          class="category_link"
                                                          >인문</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5003"
                                                          class="category_link"
                                                          >정치/사회/법</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5005"
                                                          class="category_link"
                                                          >경제/경영</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5007"
                                                          class="category_link"
                                                          >자연과학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5009"
                                                          class="category_link"
                                                          >기술공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5011"
                                                          class="category_link"
                                                          >컴퓨터</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5013"
                                                          class="category_link"
                                                          >예술</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5015"
                                                          class="category_link"
                                                          >외국어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5021"
                                                          class="category_link"
                                                          >한국판 원서교재</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5031"
                                                          class="category_link"
                                                          >전문사전</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5051"
                                                          class="category_link"
                                                          >방송통신대교재</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '국내도서>한국소개도서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/KOR/53"
                                                    >
                                                      한국소개도서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5301"
                                                          class="category_link"
                                                          >한국일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5303"
                                                          class="category_link"
                                                          >한국문학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5305"
                                                          class="category_link"
                                                          >한국역사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5307"
                                                          class="category_link"
                                                          >한국문화예술</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5309"
                                                          class="category_link"
                                                          >한국어학습</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5311"
                                                          class="category_link"
                                                          >한국요리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5312"
                                                          class="category_link"
                                                          >귀화시험</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/KOR/5313"
                                                          class="category_link"
                                                          >한국판 원서교재</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="special_corner_area">
                                          <div
                                            class="title_wrap title_size_sm"
                                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너', '');"
                                          >
                                            <p class="title_heading">
                                              스페셜 코너
                                            </p>
                                          </div>
                                          <ul class="special_corner_list">
                                            <li
                                              class="special_corner_item"
                                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너>오늘의 선택', '');"
                                            >
                                              <a
                                                href="https://product.kyobobook.co.kr/today-book"
                                                class="special_corner_link"
                                                >오늘의 선택</a
                                              >
                                            </li>
                                            <li
                                              class="special_corner_item"
                                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너>추천', '');"
                                            >
                                              <a
                                                href="https://www.kyobobook.co.kr/recommend/main"
                                                class="special_corner_link"
                                                >추천</a
                                              >
                                            </li>
                                            <li
                                              class="special_corner_item"
                                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너>선물하기', '');"
                                            >
                                              <a
                                                href="https://www.kyobobook.co.kr/present/main"
                                                class="special_corner_link"
                                                >선물하기</a
                                              >
                                            </li>
                                            <li
                                              class="special_corner_item"
                                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너>분철서비스', '');"
                                            >
                                              <a
                                                href="https://www.kyobobook.co.kr/spring/main"
                                                class="special_corner_link"
                                                >분철서비스</a
                                              >
                                            </li>
                                            <li
                                              class="special_corner_item"
                                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너>특가', '');"
                                            >
                                              <a
                                                href="https://www.kyobobook.co.kr/service/special-price"
                                                class="special_corner_link"
                                                >특가</a
                                              >
                                            </li>
                                            <li
                                              class="special_corner_item"
                                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너>정가인하', '');"
                                            >
                                              <a
                                                href="https://www.kyobobook.co.kr/service/re-price"
                                                class="special_corner_link"
                                                >정가인하</a
                                              >
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="simplebar-placeholder"
                                style="width: 0px; height: 0px"
                              ></div>
                            </div>
                            <div
                              class="simplebar-track simplebar-horizontal"
                              style="visibility: hidden"
                            >
                              <div
                                class="simplebar-scrollbar simplebar-visible"
                                style="width: 0px; display: none"
                              ></div>
                            </div>
                            <div
                              class="simplebar-track simplebar-vertical"
                              style="visibility: hidden"
                            >
                              <div
                                class="simplebar-scrollbar simplebar-visible"
                                style="height: 0px; display: none"
                              ></div>
                            </div>
                          </div>
                          <div class="banner_box">
                            <a
                              href="http://imac.kyobobook.co.kr/click/INK/ink_wel_new/ink_wel@wel_14?adsno=130250&amp;ctvno=93420&amp;clkno=93459"
                              class="banner_link"
                              ><img
                                src="http://image.kyobobook.co.kr/newimages/adcenter/IMAC/creatives/2023/01/03/57896/4.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                        <div
                          id="tabAnbCategorySub02"
                          class="tab_content has_banner ui-tabs-panel ui-corner-bottom ui-widget-content"
                          aria-labelledby="ui-id-13"
                          role="tabpanel"
                          aria-hidden="true"
                          style="display: none"
                        >
                          <div class="custom_scroll_wrap" data-simplebar="init">
                            <div class="simplebar-wrapper" style="margin: 0px">
                              <div
                                class="simplebar-height-auto-observer-wrapper"
                              >
                                <div
                                  class="simplebar-height-auto-observer"
                                ></div>
                              </div>
                              <div class="simplebar-mask">
                                <div
                                  class="simplebar-offset"
                                  style="right: 0px; bottom: 0px"
                                >
                                  <div
                                    class="simplebar-content-wrapper"
                                    style="height: auto; overflow: hidden"
                                  >
                                    <div
                                      class="simplebar-content"
                                      style="padding: 0px"
                                    >
                                      <div
                                        class="custom_scroll_inner"
                                        tabindex="0"
                                      >
                                        <div class="category_view_area">
                                          <a
                                            href="https://product.kyobobook.co.kr/ENG"
                                            class="btn_arw_link"
                                          >
                                            <span class="text"
                                              >서양도서 전체</span
                                            >
                                          </a>
                                          <div class="fold_box_wrap category">
                                            <div class="col_area">
                                              <ul class="fold_box_list">
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>문학', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/01"
                                                    >
                                                      문학
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0101"
                                                          class="category_link"
                                                          >문학이론/역사/비평</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0103"
                                                          class="category_link"
                                                          >소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0105"
                                                          class="category_link"
                                                          >시</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0107"
                                                          class="category_link"
                                                          >희곡</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0109"
                                                          class="category_link"
                                                          >에세이/자서전</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0111"
                                                          class="category_link"
                                                          >기타 작품집</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0113"
                                                          class="category_link"
                                                          >만화</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>취미/실용/여행', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/03"
                                                    >
                                                      취미/실용/여행
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0301"
                                                          class="category_link"
                                                          >공예</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0303"
                                                          class="category_link"
                                                          >정원가꾸기</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0305"
                                                          class="category_link"
                                                          >여행</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0309"
                                                          class="category_link"
                                                          >게임</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0311"
                                                          class="category_link"
                                                          >기타 취미생활</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>생활/요리/건강', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/05"
                                                    >
                                                      생활/요리/건강
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0501"
                                                          class="category_link"
                                                          >가정과 생활</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0503"
                                                          class="category_link"
                                                          >요리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0505"
                                                          class="category_link"
                                                          >스포츠</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0507"
                                                          class="category_link"
                                                          >건강</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0509"
                                                          class="category_link"
                                                          >애완동물</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0511"
                                                          class="category_link"
                                                          >홈인테리어</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>예술/건축', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/07"
                                                    >
                                                      예술/건축
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0701"
                                                          class="category_link"
                                                          >예술일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0703"
                                                          class="category_link"
                                                          >예술사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0705"
                                                          class="category_link"
                                                          >박물관/수집</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0707"
                                                          class="category_link"
                                                          >미술장르</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0709"
                                                          class="category_link"
                                                          >디자인</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0711"
                                                          class="category_link"
                                                          >패션</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0713"
                                                          class="category_link"
                                                          >사진</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0715"
                                                          class="category_link"
                                                          >건축</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0717"
                                                          class="category_link"
                                                          >음악</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0719"
                                                          class="category_link"
                                                          >영화/TV</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0721"
                                                          class="category_link"
                                                          >연극/공연예술</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0723"
                                                          class="category_link"
                                                          >애니메이션/캐릭터</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0727"
                                                          class="category_link"
                                                          >화집/작품집</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>인문/사회', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/09"
                                                    >
                                                      인문/사회
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0901"
                                                          class="category_link"
                                                          >교양</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0903"
                                                          class="category_link"
                                                          >철학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0905"
                                                          class="category_link"
                                                          >심리학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0907"
                                                          class="category_link"
                                                          >종교</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0909"
                                                          class="category_link"
                                                          >명상</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0913"
                                                          class="category_link"
                                                          >역사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0915"
                                                          class="category_link"
                                                          >정치학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0917"
                                                          class="category_link"
                                                          >법학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0919"
                                                          class="category_link"
                                                          >교육학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0921"
                                                          class="category_link"
                                                          >사회/문화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0923"
                                                          class="category_link"
                                                          >언어학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/0925"
                                                          class="category_link"
                                                          >문헌정보학</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>경제/경영', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/11"
                                                    >
                                                      경제/경영
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1101"
                                                          class="category_link"
                                                          >경제학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1103"
                                                          class="category_link"
                                                          >경영학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1105"
                                                          class="category_link"
                                                          >마케팅/세일즈</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1107"
                                                          class="category_link"
                                                          >재무관리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1109"
                                                          class="category_link"
                                                          >투자</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1111"
                                                          class="category_link"
                                                          >취업</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1113"
                                                          class="category_link"
                                                          >회계</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1115"
                                                          class="category_link"
                                                          >자기계발</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1117"
                                                          class="category_link"
                                                          >성공스토리</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>과학/기술', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/13"
                                                    >
                                                      과학/기술
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1301"
                                                          class="category_link"
                                                          >교양과학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1303"
                                                          class="category_link"
                                                          >수학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1305"
                                                          class="category_link"
                                                          >생물학/생명공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1307"
                                                          class="category_link"
                                                          >농림수산학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1309"
                                                          class="category_link"
                                                          >화학/화학공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1311"
                                                          class="category_link"
                                                          >지구과학/천문학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1313"
                                                          class="category_link"
                                                          >물리학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1315"
                                                          class="category_link"
                                                          >도시공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1317"
                                                          class="category_link"
                                                          >전자공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1319"
                                                          class="category_link"
                                                          >환경공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1321"
                                                          class="category_link"
                                                          >기계공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1323"
                                                          class="category_link"
                                                          >통신공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1325"
                                                          class="category_link"
                                                          >의학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1327"
                                                          class="category_link"
                                                          >컴퓨터</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1329"
                                                          class="category_link"
                                                          >나노테크놀러지</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1331"
                                                          class="category_link"
                                                          >에너지공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1332"
                                                          class="category_link"
                                                          >재료과학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1333"
                                                          class="category_link"
                                                          >기타 과학기술</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>어린이ELT', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/14"
                                                    >
                                                      어린이ELT
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1403"
                                                          class="category_link"
                                                          >노부영</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1405"
                                                          class="category_link"
                                                          >알파벳/파닉스</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1407"
                                                          class="category_link"
                                                          >코스북</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1409"
                                                          class="category_link"
                                                          >리더스/챕터북</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1411"
                                                          class="category_link"
                                                          >학습교재</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1413"
                                                          class="category_link"
                                                          >기타학습교재</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1415"
                                                          class="category_link"
                                                          >미국교과서</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1417"
                                                          class="category_link"
                                                          >사전/백과사전</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>유아/아동/청소년', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/15"
                                                    >
                                                      유아/아동/청소년
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1501"
                                                          class="category_link"
                                                          >소설</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1503"
                                                          class="category_link"
                                                          >동시/연극</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1504"
                                                          class="category_link"
                                                          >만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1515"
                                                          class="category_link"
                                                          >컨셉북</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1517"
                                                          class="category_link"
                                                          >액티비티북</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1519"
                                                          class="category_link"
                                                          >동화/그림책</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1522"
                                                          class="category_link"
                                                          >교양서</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1525"
                                                          class="category_link"
                                                          >Movie Tie In</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>한국관련도서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/17"
                                                    >
                                                      한국관련도서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1701"
                                                          class="category_link"
                                                          >한국일반</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>문구/멀티/비도서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/19"
                                                    >
                                                      문구/멀티/비도서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/1901"
                                                          class="category_link"
                                                          >문구/멀티/비도서상품</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                            <div class="col_area">
                                              <ul class="fold_box_list">
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>ELT/수험서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/81"
                                                    >
                                                      ELT/수험서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8101"
                                                          class="category_link"
                                                          >ELT</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8103"
                                                          class="category_link"
                                                          >수험서</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>프랑스도서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/86"
                                                    >
                                                      프랑스도서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8601"
                                                          class="category_link"
                                                          >프랑스 문학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8605"
                                                          class="category_link"
                                                          >아동/청소년</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8607"
                                                          class="category_link"
                                                          >프랑스인문</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8609"
                                                          class="category_link"
                                                          >프랑스어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8613"
                                                          class="category_link"
                                                          >프랑스 실용서</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8617"
                                                          class="category_link"
                                                          >프랑스 예술/건축</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8623"
                                                          class="category_link"
                                                          >프랑스 사회</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8625"
                                                          class="category_link"
                                                          >프랑스 기술공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8699"
                                                          class="category_link"
                                                          >프랑스도서 기타</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>독일도서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/88"
                                                    >
                                                      독일도서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8803"
                                                          class="category_link"
                                                          >독일문학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8805"
                                                          class="category_link"
                                                          >독일어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8807"
                                                          class="category_link"
                                                          >어린이</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8809"
                                                          class="category_link"
                                                          >예술/실용</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8811"
                                                          class="category_link"
                                                          >인문/사회</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/8813"
                                                          class="category_link"
                                                          >과학/기술</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>스페인도서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/90"
                                                    >
                                                      스페인도서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9001"
                                                          class="category_link"
                                                          >스페인문학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9005"
                                                          class="category_link"
                                                          >스페인어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9007"
                                                          class="category_link"
                                                          >아동/청소년</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9009"
                                                          class="category_link"
                                                          >예술</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9099"
                                                          class="category_link"
                                                          >스페인도서 일반</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>기타도서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/92"
                                                    >
                                                      기타도서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9201"
                                                          class="category_link"
                                                          >기타국가도서</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '서양도서>교재', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/ENG/93"
                                                    >
                                                      교재
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9301"
                                                          class="category_link"
                                                          >경제/경영</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9303"
                                                          class="category_link"
                                                          >인문/사회</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9305"
                                                          class="category_link"
                                                          >교육학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9307"
                                                          class="category_link"
                                                          >법학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9309"
                                                          class="category_link"
                                                          >철학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9311"
                                                          class="category_link"
                                                          >심리학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9313"
                                                          class="category_link"
                                                          >역사학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9315"
                                                          class="category_link"
                                                          >언어학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9317"
                                                          class="category_link"
                                                          >문학작품/문학이론</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9319"
                                                          class="category_link"
                                                          >수학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9321"
                                                          class="category_link"
                                                          >자연/과학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9323"
                                                          class="category_link"
                                                          >기술/공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9325"
                                                          class="category_link"
                                                          >의학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9327"
                                                          class="category_link"
                                                          >컴퓨터</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9329"
                                                          class="category_link"
                                                          >예술/건축</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/ENG/9331"
                                                          class="category_link"
                                                          >기타</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                            <div class="col_area">
                                              <ul class="fold_box_list"></ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="special_corner_area">
                                          <div
                                            class="title_wrap title_size_sm"
                                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너', '');"
                                          >
                                            <p class="title_heading">
                                              스페셜 코너
                                            </p>
                                          </div>
                                          <ul class="special_corner_list">
                                            <li
                                              class="special_corner_item"
                                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너>오늘의 선택', '');"
                                            >
                                              <a
                                                href="https://product.kyobobook.co.kr/today-book/ENG"
                                                class="special_corner_link"
                                                >오늘의 선택</a
                                              >
                                            </li>
                                            <li
                                              class="special_corner_item"
                                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너>수준별 원서읽기', '');"
                                            >
                                              <a
                                                href="https://www.kyobobook.co.kr/read-index"
                                                class="special_corner_link"
                                                >수준별 원서읽기</a
                                              >
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="simplebar-placeholder"
                                style="width: 0px; height: 0px"
                              ></div>
                            </div>
                            <div
                              class="simplebar-track simplebar-horizontal"
                              style="visibility: hidden"
                            >
                              <div
                                class="simplebar-scrollbar simplebar-visible"
                                style="width: 0px; display: none"
                              ></div>
                            </div>
                            <div
                              class="simplebar-track simplebar-vertical"
                              style="visibility: hidden"
                            >
                              <div
                                class="simplebar-scrollbar simplebar-visible"
                                style="height: 0px; display: none"
                              ></div>
                            </div>
                          </div>
                          <div class="banner_box">
                            <a
                              href="http://imac.kyobobook.co.kr/click/INK/ink_wel_new/ink_wel@wel_14?adsno=130250&amp;ctvno=93420&amp;clkno=93459"
                              class="banner_link"
                              ><img
                                src="http://image.kyobobook.co.kr/newimages/adcenter/IMAC/creatives/2023/01/03/57896/4.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                        <div
                          id="tabAnbCategorySub03"
                          class="tab_content has_banner ui-tabs-panel ui-corner-bottom ui-widget-content"
                          aria-labelledby="ui-id-14"
                          role="tabpanel"
                          aria-hidden="true"
                          style="display: none"
                        >
                          <div class="custom_scroll_wrap" data-simplebar="init">
                            <div class="simplebar-wrapper" style="margin: 0px">
                              <div
                                class="simplebar-height-auto-observer-wrapper"
                              >
                                <div
                                  class="simplebar-height-auto-observer"
                                ></div>
                              </div>
                              <div class="simplebar-mask">
                                <div
                                  class="simplebar-offset"
                                  style="right: 0px; bottom: 0px"
                                >
                                  <div
                                    class="simplebar-content-wrapper"
                                    style="height: auto; overflow: hidden"
                                  >
                                    <div
                                      class="simplebar-content"
                                      style="padding: 0px"
                                    >
                                      <div
                                        class="custom_scroll_inner"
                                        tabindex="0"
                                      >
                                        <div class="category_view_area">
                                          <a
                                            href="https://product.kyobobook.co.kr/JAP"
                                            class="btn_arw_link"
                                          >
                                            <span class="text"
                                              >일본도서 전체</span
                                            >
                                          </a>
                                          <div class="fold_box_wrap category">
                                            <div class="col_area">
                                              <ul class="fold_box_list">
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>잡지', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/41"
                                                    >
                                                      잡지
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4101"
                                                          class="category_link"
                                                          >엔터테인먼트</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4103"
                                                          class="category_link"
                                                          >TV/영화/연예</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4105"
                                                          class="category_link"
                                                          >여성정보</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4106"
                                                          class="category_link"
                                                          >남성정보</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4107"
                                                          class="category_link"
                                                          >코믹</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4109"
                                                          class="category_link"
                                                          >문예</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4111"
                                                          class="category_link"
                                                          >취미</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4113"
                                                          class="category_link"
                                                          >자동차</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4115"
                                                          class="category_link"
                                                          >게임</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4116"
                                                          class="category_link"
                                                          >컴퓨터</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4117"
                                                          class="category_link"
                                                          >스포츠</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4118"
                                                          class="category_link"
                                                          >전문지</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4119"
                                                          class="category_link"
                                                          >주간지</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4121"
                                                          class="category_link"
                                                          >아동</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4122"
                                                          class="category_link"
                                                          >학습</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4123"
                                                          class="category_link"
                                                          >인테리어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4125"
                                                          class="category_link"
                                                          >라이프 스타일</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4126"
                                                          class="category_link"
                                                          >정보지</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4127"
                                                          class="category_link"
                                                          >비즈니스/경제</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4128"
                                                          class="category_link"
                                                          >예술</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4129"
                                                          class="category_link"
                                                          >일본잡지기타</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4199"
                                                          class="category_link"
                                                          >정기구독잡지</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>엔터테인먼트', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/43"
                                                    >
                                                      엔터테인먼트
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4301"
                                                          class="category_link"
                                                          >TV/영화/연예</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4303"
                                                          class="category_link"
                                                          >화보/사진집</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4305"
                                                          class="category_link"
                                                          >게임</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>만화/애니', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/45"
                                                    >
                                                      만화/애니
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4501"
                                                          class="category_link"
                                                          >아동만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4503"
                                                          class="category_link"
                                                          >순정만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4504"
                                                          class="category_link"
                                                          >BL만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4505"
                                                          class="category_link"
                                                          >학원/판타지</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4507"
                                                          class="category_link"
                                                          >액션/코믹</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4509"
                                                          class="category_link"
                                                          >만화 기타</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4511"
                                                          class="category_link"
                                                          >성인만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4513"
                                                          class="category_link"
                                                          >애니메이션</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4515"
                                                          class="category_link"
                                                          >원화집/앤솔러지</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4517"
                                                          class="category_link"
                                                          >코믹문고</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4519"
                                                          class="category_link"
                                                          >스포츠</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4521"
                                                          class="category_link"
                                                          >액션/무협</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4523"
                                                          class="category_link"
                                                          >미스테리/스릴러</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4525"
                                                          class="category_link"
                                                          >공포/호러</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>문학', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/47"
                                                    >
                                                      문학
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4701"
                                                          class="category_link"
                                                          >일본문학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4703"
                                                          class="category_link"
                                                          >해외문학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4705"
                                                          class="category_link"
                                                          >미스터리/호러/판타지</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>라이트노벨', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/49"
                                                    >
                                                      라이트노벨
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4901"
                                                          class="category_link"
                                                          >순정/BL</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/4903"
                                                          class="category_link"
                                                          >판타지</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>문고', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/51"
                                                    >
                                                      문고
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5101"
                                                          class="category_link"
                                                          >문고 일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5103"
                                                          class="category_link"
                                                          >문예문고</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5105"
                                                          class="category_link"
                                                          >교양/학술문고</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5107"
                                                          class="category_link"
                                                          >역사문고</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>신서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/53"
                                                    >
                                                      신서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5301"
                                                          class="category_link"
                                                          >신서 일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5303"
                                                          class="category_link"
                                                          >문예신서</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5305"
                                                          class="category_link"
                                                          >교양신서</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>아동', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/55"
                                                    >
                                                      아동
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5501"
                                                          class="category_link"
                                                          >아동서 일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5503"
                                                          class="category_link"
                                                          >동화책/그림책</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5505"
                                                          class="category_link"
                                                          >일본어카드</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5507"
                                                          class="category_link"
                                                          >놀이책</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5508"
                                                          class="category_link"
                                                          >소리나는 그림책</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5509"
                                                          class="category_link"
                                                          >학습/도감</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>실용서/예술', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/57"
                                                    >
                                                      실용서/예술
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5701"
                                                          class="category_link"
                                                          >취미생활 일반</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5703"
                                                          class="category_link"
                                                          >수공예</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5705"
                                                          class="category_link"
                                                          >자수</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5707"
                                                          class="category_link"
                                                          >퀼트/패치워크</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5709"
                                                          class="category_link"
                                                          >비즈/액세서리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5711"
                                                          class="category_link"
                                                          >소잉(ソイング)</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5713"
                                                          class="category_link"
                                                          >펠트</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5715"
                                                          class="category_link"
                                                          >수편물</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5717"
                                                          class="category_link"
                                                          >인형/피규어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5719"
                                                          class="category_link"
                                                          >톨페인팅</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5721"
                                                          class="category_link"
                                                          >인테리어/잡화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5723"
                                                          class="category_link"
                                                          >패션/미용</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5725"
                                                          class="category_link"
                                                          >원예/조경</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5727"
                                                          class="category_link"
                                                          >애완동물</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5729"
                                                          class="category_link"
                                                          >건강</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5731"
                                                          class="category_link"
                                                          >스포츠/레포츠</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5733"
                                                          class="category_link"
                                                          >요리</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5735"
                                                          class="category_link"
                                                          >여행</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5737"
                                                          class="category_link"
                                                          >예술</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>인문/사회', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/59"
                                                    >
                                                      인문/사회
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5901"
                                                          class="category_link"
                                                          >교양</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5903"
                                                          class="category_link"
                                                          >철학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5905"
                                                          class="category_link"
                                                          >심리학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5907"
                                                          class="category_link"
                                                          >교육학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5909"
                                                          class="category_link"
                                                          >역사</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5911"
                                                          class="category_link"
                                                          >종교</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5913"
                                                          class="category_link"
                                                          >사회학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5915"
                                                          class="category_link"
                                                          >정치학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5917"
                                                          class="category_link"
                                                          >법학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5919"
                                                          class="category_link"
                                                          >경제학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5921"
                                                          class="category_link"
                                                          >경영학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/5923"
                                                          class="category_link"
                                                          >자기계발</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>자연/기술과학', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/61"
                                                    >
                                                      자연/기술과학
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6101"
                                                          class="category_link"
                                                          >교양과학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6103"
                                                          class="category_link"
                                                          >농림수산학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6105"
                                                          class="category_link"
                                                          >생물학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6107"
                                                          class="category_link"
                                                          >물리학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6109"
                                                          class="category_link"
                                                          >수학/통계</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6111"
                                                          class="category_link"
                                                          >지구과학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6113"
                                                          class="category_link"
                                                          >천문학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6115"
                                                          class="category_link"
                                                          >화학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6117"
                                                          class="category_link"
                                                          >의학/간호학/약학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6119"
                                                          class="category_link"
                                                          >전기/전자공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6121"
                                                          class="category_link"
                                                          >가정학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6123"
                                                          class="category_link"
                                                          >건축/토목공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6125"
                                                          class="category_link"
                                                          >기계공학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6127"
                                                          class="category_link"
                                                          >컴퓨터</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6129"
                                                          class="category_link"
                                                          >환경공학/대체에너지</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                            <div class="col_area">
                                              <ul class="fold_box_list">
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>어학/학습', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/63"
                                                    >
                                                      어학/학습
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6301"
                                                          class="category_link"
                                                          >언어학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6303"
                                                          class="category_link"
                                                          >일본어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6305"
                                                          class="category_link"
                                                          >외국어</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6307"
                                                          class="category_link"
                                                          >사전</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6309"
                                                          class="category_link"
                                                          >취업/수험서</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6311"
                                                          class="category_link"
                                                          >학습참고서</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>문구/멀티/기타', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/64"
                                                    >
                                                      문구/멀티/기타
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6401"
                                                          class="category_link"
                                                          >문구/멀티/기타상품</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '일본도서>중국도서', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/JAP/67"
                                                    >
                                                      중국도서
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6701"
                                                          class="category_link"
                                                          >문학</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6703"
                                                          class="category_link"
                                                          >중국어/HSK</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6705"
                                                          class="category_link"
                                                          >만화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6707"
                                                          class="category_link"
                                                          >어린이</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6709"
                                                          class="category_link"
                                                          >예술/실용</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6711"
                                                          class="category_link"
                                                          >인문/사회</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6713"
                                                          class="category_link"
                                                          >과학/기술</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/JAP/6715"
                                                          class="category_link"
                                                          >중국도서 기타</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                            <div class="col_area">
                                              <ul class="fold_box_list"></ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="special_corner_area">
                                          <div
                                            class="title_wrap title_size_sm"
                                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너', '');"
                                          >
                                            <p class="title_heading">
                                              스페셜 코너
                                            </p>
                                          </div>
                                          <ul class="special_corner_list">
                                            <li
                                              class="special_corner_item"
                                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너>오늘의 선택', '');"
                                            >
                                              <a
                                                href="https://product.kyobobook.co.kr/today-book/JAP"
                                                class="special_corner_link"
                                                >오늘의 선택</a
                                              >
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="simplebar-placeholder"
                                style="width: 0px; height: 0px"
                              ></div>
                            </div>
                            <div
                              class="simplebar-track simplebar-horizontal"
                              style="visibility: hidden"
                            >
                              <div
                                class="simplebar-scrollbar simplebar-visible"
                                style="width: 0px; display: none"
                              ></div>
                            </div>
                            <div
                              class="simplebar-track simplebar-vertical"
                              style="visibility: hidden"
                            >
                              <div
                                class="simplebar-scrollbar simplebar-visible"
                                style="height: 0px; display: none"
                              ></div>
                            </div>
                          </div>
                          <div class="banner_box">
                            <a
                              href="http://imac.kyobobook.co.kr/click/INK/ink_wel_new/ink_wel@wel_14?adsno=130250&amp;ctvno=93420&amp;clkno=93459"
                              class="banner_link"
                              ><img
                                src="http://image.kyobobook.co.kr/newimages/adcenter/IMAC/creatives/2023/01/03/57896/4.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                        <div
                          id="tabAnbCategorySub04"
                          class="tab_content has_banner ui-tabs-panel ui-corner-bottom ui-widget-content"
                          aria-labelledby="ui-id-15"
                          role="tabpanel"
                          aria-hidden="true"
                          style="display: none"
                        >
                          <div class="custom_scroll_wrap" data-simplebar="init">
                            <div class="simplebar-wrapper" style="margin: 0px">
                              <div
                                class="simplebar-height-auto-observer-wrapper"
                              >
                                <div
                                  class="simplebar-height-auto-observer"
                                ></div>
                              </div>
                              <div class="simplebar-mask">
                                <div
                                  class="simplebar-offset"
                                  style="right: 0px; bottom: 0px"
                                >
                                  <div
                                    class="simplebar-content-wrapper"
                                    style="height: auto; overflow: hidden"
                                  >
                                    <div
                                      class="simplebar-content"
                                      style="padding: 0px"
                                    >
                                      <div
                                        class="custom_scroll_inner"
                                        tabindex="0"
                                      >
                                        <div class="category_view_area">
                                          <a
                                            href="https://product.kyobobook.co.kr/KYO"
                                            class="btn_arw_link"
                                          >
                                            <span class="text"
                                              >교보Only 전체</span
                                            >
                                          </a>
                                          <div class="fold_box_wrap category">
                                            <div class="col_area">
                                              <ul class="fold_box_list">
                                                <li
                                                  class="fold_box no_fold"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '교보Only>강연', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/CUL/01"
                                                    >
                                                      강연
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '교보Only>교보문고 굿즈', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/PBC/01"
                                                    >
                                                      교보문고 굿즈
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/PBC/0101"
                                                          class="category_link"
                                                          >독서용품</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/PBC/0103"
                                                          class="category_link"
                                                          >문구</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/PBC/0105"
                                                          class="category_link"
                                                          >리빙/홈데코</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/PBC/0107"
                                                          class="category_link"
                                                          >eBook용품</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/PBC/0109"
                                                          class="category_link"
                                                          >디지털용품</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/PBC/0111"
                                                          class="category_link"
                                                          >패션잡화</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/PBC/0113"
                                                          class="category_link"
                                                          >애니 굿즈</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '교보Only>시그니처 향', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/PBC/03"
                                                    >
                                                      시그니처 향
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                  <div
                                                    class="fold_box_contents"
                                                  >
                                                    <ul class="category_list">
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/PBC/0301"
                                                          class="category_link"
                                                          >캔들/디퓨저</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/PBC/0303"
                                                          class="category_link"
                                                          >방향제/스프레이</a
                                                        >
                                                      </li>
                                                      <li class="category_item">
                                                        <a
                                                          href="https://product.kyobobook.co.kr/category/PBC/0399"
                                                          class="category_link"
                                                          >기타</a
                                                        >
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </li>
                                                <li
                                                  class="fold_box no_fold"
                                                  onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '교보Only>교보문고 기프트카드', '');"
                                                >
                                                  <div class="fold_box_header">
                                                    <a
                                                      href="https://product.kyobobook.co.kr/category/GFC/01"
                                                    >
                                                      교보문고 기프트카드
                                                    </a>
                                                    <button
                                                      type="button"
                                                      class="btn_fold"
                                                    >
                                                      <span class="hidden"
                                                        >컨텐츠 열기</span
                                                      >
                                                    </button>
                                                  </div>
                                                </li>
                                              </ul>
                                            </div>
                                            <div class="col_area">
                                              <ul class="fold_box_list"></ul>
                                            </div>
                                            <div class="col_area">
                                              <ul class="fold_box_list"></ul>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="special_corner_area">
                                          <div
                                            class="title_wrap title_size_sm"
                                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너', '');"
                                          >
                                            <p class="title_heading">
                                              스페셜 코너
                                            </p>
                                          </div>
                                          <ul class="special_corner_list">
                                            <li
                                              class="special_corner_item"
                                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너>책 그리고 꽃', '');"
                                            >
                                              <a
                                                href="https://product.kyobobook.co.kr/booknflower/main"
                                                class="special_corner_link"
                                                >책 그리고 꽃</a
                                              >
                                            </li>
                                            <li
                                              class="special_corner_item"
                                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너>문화공간', '');"
                                            >
                                              <a
                                                href="https://www.kyobobook.co.kr/culture/main"
                                                class="special_corner_link"
                                                >문화공간</a
                                              >
                                            </li>
                                            <li
                                              class="special_corner_item"
                                              onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '스페셜코너>교보문고 기프트카드', '');"
                                            >
                                              <a
                                                href="https://www.kyobobook.co.kr/giftcard"
                                                class="special_corner_link"
                                                >교보문고 기프트카드</a
                                              >
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="simplebar-placeholder"
                                style="width: 0px; height: 0px"
                              ></div>
                            </div>
                            <div
                              class="simplebar-track simplebar-horizontal"
                              style="visibility: hidden"
                            >
                              <div
                                class="simplebar-scrollbar simplebar-visible"
                                style="width: 0px; display: none"
                              ></div>
                            </div>
                            <div
                              class="simplebar-track simplebar-vertical"
                              style="visibility: hidden"
                            >
                              <div
                                class="simplebar-scrollbar simplebar-visible"
                                style="height: 0px; display: none"
                              ></div>
                            </div>
                          </div>
                          <div class="banner_box">
                            <a
                              href="http://imac.kyobobook.co.kr/click/INK/ink_wel_new/ink_wel@wel_14?adsno=130250&amp;ctvno=93420&amp;clkno=93459"
                              class="banner_link"
                              ><img
                                src="http://image.kyobobook.co.kr/newimages/adcenter/IMAC/creatives/2023/01/03/57896/4.png"
                                alt=""
                            /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="anb_category_bottom">
                      <ul class="recommend_service_list">
                        <li class="recommend_service_item">
                          <a
                            href="https://product.kyobobook.co.kr/today-book"
                            class="recommend_service_link"
                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '바로가기_오늘의 선택', '');"
                          >
                            <span class="img_box">
                              <img
                                src="https://contents.kyobobook.co.kr/display/bn – 1_017c321f59504c6f995c5c4c90bcd382.jpg"
                                alt="오늘의 선택"
                              />
                            </span>
                            <span class="title">오늘의 선택</span>
                          </a>
                        </li>
                        <li class="recommend_service_item">
                          <a
                            href="https://product.kyobobook.co.kr/booknflower/main"
                            class="recommend_service_link"
                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '바로가기_책 그리고 꽃', '');"
                          >
                            <span class="img_box">
                              <img
                                src="https://contents.kyobobook.co.kr/display/bn – 3_dbacbee09aa64c82b6e7c78c7980f306.jpg"
                                alt="책 그리고 꽃"
                              />
                            </span>
                            <span class="title">책 그리고 꽃</span>
                          </a>
                        </li>
                        <li class="recommend_service_item">
                          <a
                            href="https://www.kyobobook.co.kr/service/profile/main"
                            class="recommend_service_link"
                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '바로가기_인물&amp;작품', '');"
                          >
                            <span class="img_box">
                              <img
                                src="https://contents.kyobobook.co.kr/display/bn – 4_dea56a082097433c80a6491aca4fcad6.jpg"
                                alt="인물&amp;작품"
                              />
                            </span>
                            <span class="title">인물&amp;작품</span>
                          </a>
                        </li>
                        <li class="recommend_service_item">
                          <a
                            href="https://www.kyobobook.co.kr/present/main"
                            class="recommend_service_link"
                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '바로가기_선물하기', '');"
                          >
                            <span class="img_box">
                              <img
                                src="https://contents.kyobobook.co.kr/display/bn – 5_6f76bd72614f4a24a89d905386b32c84.jpg"
                                alt="선물하기"
                              />
                            </span>
                            <span class="title">선물하기</span>
                          </a>
                        </li>
                        <li class="recommend_service_item">
                          <a
                            href="https://www.kyobobook.co.kr/review"
                            class="recommend_service_link"
                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '바로가기_통합리뷰', '');"
                          >
                            <span class="img_box">
                              <img
                                src="https://contents.kyobobook.co.kr/display/bn – 6_a0981652bec94c7094de142a9440c909.jpg"
                                alt="통합리뷰"
                              />
                            </span>
                            <span class="title">통합리뷰</span>
                          </a>
                        </li>
                        <li class="recommend_service_item">
                          <a
                            href="https://www.kyobobook.co.kr/handwriting"
                            class="recommend_service_link"
                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '바로가기_손글씨캠페인', '');"
                          >
                            <span class="img_box">
                              <img
                                src="https://contents.kyobobook.co.kr/display/bn – 7_bd7dd305777e46b0b914490a234ec720.jpg"
                                alt="손글씨캠페인"
                              />
                            </span>
                            <span class="title">손글씨캠페인</span>
                          </a>
                        </li>
                        <li class="recommend_service_item">
                          <a
                            href="https://www.kyobobook.co.kr/culture/main"
                            class="recommend_service_link"
                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '바로가기_문화공간', '');"
                          >
                            <span class="img_box">
                              <img
                                src="https://contents.kyobobook.co.kr/display/bn – 8_ead7c54f641e45fca4bf7bb27330f4c3.jpg"
                                alt="문화공간"
                              />
                            </span>
                            <span class="title">문화공간</span>
                          </a>
                        </li>
                        <li class="recommend_service_item">
                          <a
                            href="https://product.kyobobook.co.kr/pod/main"
                            class="recommend_service_link"
                            onclick="ga360.GA_Event('click_공통_PC', 'LNB', '카테고리전체보기_교보문고', '바로가기_POD', '');"
                          >
                            <span class="img_box">
                              <img
                                src="https://contents.kyobobook.co.kr/display/bn – 13_f727275a372b4ab5a5be25e9dc728980.jpg"
                                alt="POD"
                              />
                            </span>
                            <span class="title">POD</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>

<script setup></script>
