// 네비게이션 데이터
const navData = {};

// 배너 데이터
const bannerData = [
  {
    url: `/imgs/main-banner-1.jpg`,
    title: `life is BUTTERful <br />버터샵 신규입점<span class="banner__label--sale"><b>~24%</b></span>`,
    desc: `일상에 작은 행복을 더해주는 버터샵, 런칭 혜택을 텐바이텐에서 만나보세요!`,
    leftColor: `#c0e0c4`,
    rightColor: `#b4d9bb`,
  },
  {
    url: `/imgs/main-banner-2.jpg`,
    title: `2번 배너 제목`,
    desc: `2번 배너 설명`,
    leftColor: `#c0e0c4`,
    rightColor: `#b4d9bb`,
  },
  {
    url: `/imgs/main-banner-3.jpg`,
    title: `3번 배너 제목`,
    desc: `3번 배너 설명`,
    leftColor: `#c0e0c4`,
    rightColor: `#b4d9bb`,
  },
  {
    url: `/imgs/main-banner-4.jpg`,
    title: `4번 배너 제목`,
    desc: `4번 배너 설명`,
    leftColor: `#c0e0c4`,
    rightColor: `#b4d9bb`,
  },
  {
    url: `/imgs/main-banner-5.jpg`,
    title: `<p>아날로그 말고 편리한<br>디지털문구<span class="banner__label--sale"><b>~60%</b></span> <span class="banner__label--coupon"><b>쿠폰 30%</b></span></p>`,
    desc: `써도 써도 모자란 널 위해 준비했어! 굿노트 &amp; 스티커`,
    leftColor: `#434243`,
    rightColor: `#434243`,
  },
  {
    url: `/imgs/main-banner-6.jpg`,
    title: `<p>가을에 더 필요한<br>라이프썸 7일 특가<span class="banner__label--sale"><b>~90%</b></span></p>`,
    desc: `가까이에서 함께하면 더욱 편리해지는 라이프썸`,
    leftColor: `#fbb051`,
    rightColor: `#fbb051`,
  },
  {
    url: `/imgs/main-banner-7.jpg`,
    title: `<p>필드 위 빛나는 존재감<br>산리오 골프클럽</p>`,
    desc: `즐거운 골프 생활을 응원하며 추가 할인 쿠폰을 드려요!`,
    leftColor: `#4b9cd4`,
    rightColor: `#4b9cd4`,
  },
  {
    url: `/imgs/main-banner-8.jpg`,
    title: `<p>10월의 커피 그리고 티<br>프릳츠&amp;녹차원<span class="banner__label--sale"><b>~37%</b></span> <span class="banner__label--coupon"><b>쿠폰 25%</b></span></p>`,
    desc: `바쁜 하루, 텐바이텐에서 추천하는 차 한잔으로 여유 즐기기`,
    leftColor: `#a57b5e`,
    rightColor: `#a57b5e`,
  },
  {
    url: `/imgs/main-banner-9.jpg`,
    title: `<p>포근하고 따뜻한 하루<br>울랄라<span class="banner__label--sale"><b>~60%</b></span> <span class="banner__label--coupon"><b>쿠폰 10%</b></span></p>`,
    desc: `울랄라 신규상품 출시 , 텐바이텐 단독 선런칭`,
    leftColor: `#c0e0c4`,
    rightColor: `#b4d9bb`,
  },
];

// setInterval ID
let intervalId = 0;
let hideId = 0;
let showId = 0;

// 배너 인덱스
let bannerIdx = 1;

window.onload = () => {
  // 배너 초기화
  bannerData.forEach((item, idx) => {
    let bannerImg = document.querySelector(
      `.banner__img:nth-child(${idx + 1})`
    );
    let bannerTitle = document.querySelector(
      `.banner__img:nth-child(${idx + 1}) .banner__title p`
    );
    let bannerDesc = document.querySelector(
      `.banner__img:nth-child(${idx + 1}) .banner__desc`
    );
    let bannerLeft = document.querySelector(
      `.banner__img:nth-child(${idx + 1}) .banner__left`
    );
    let bannerRight = document.querySelector(
      `.banner__img:nth-child(${idx + 1}) .banner__right`
    );
    bannerImg.style.backgroundImage = `url(${bannerData[idx].url})`;
    bannerTitle.innerHTML = bannerData[idx].title;
    bannerDesc.innerHTML = bannerData[idx].desc;
    bannerLeft.style.backgroundColor = bannerData[idx].leftColor;
    bannerRight.style.backgroundColor = bannerData[idx].rightColor;
  });

  // Pagination 초기화
  changePagination();

  // 4.5초마다 배너 변경
  intervalId = setInterval(() => {
    // 배너 셋팅
    setBanner('right');
  }, 4500);

  // 배너 왼쪽 버튼 클릭 이벤트 (배너 자동변경 중지)
  let btnPrev = document.querySelector('.banner__prev');
  btnPrev.addEventListener('click', () => {
    clearInterval(intervalId);
    clearInterval(hideId);
    clearInterval(showId);
    // 배너 셋팅
    setBanner('left');
  });

  // 배너 오른쪽 버튼 클릭 이벤트 (배너 자동변경 중지)
  let btnNext = document.querySelector('.banner__next');
  btnNext.addEventListener('click', () => {
    clearInterval(intervalId);
    clearInterval(hideId);
    clearInterval(showId);
    // 배너 셋팅
    setBanner('right');
  });

  // 배너 페이지네이션 클릭 이벤트 (배너 자동변경 중지)
  let btnPagination = document.querySelectorAll('.banner__pagination ul li');
  btnPagination.forEach((item, idx) => {
    item.addEventListener('click', () => {
      clearInterval(intervalId);
      clearInterval(hideId);
      clearInterval(showId);
      // 배너 셋팅
      setBanner('pagination', idx);
    });
  });
};

// 현재 배너 숨기기
function hide(elem) {
  let opacity = Number(
    window.getComputedStyle(elem).getPropertyValue('opacity')
  );
  // fade out 효과 주기
  if (opacity > 0) {
    opacity = opacity - 0.1;
    elem.style.opacity = opacity;
  } else {
    elem.style.display = 'none';
    clearInterval(hideId);
  }
}

// 다음 배너 보여주기
function show(elem) {
  let opacity = Number(
    window.getComputedStyle(elem).getPropertyValue('opacity')
  );
  // fade in 효과 주기
  if (opacity < 1) {
    if (window.getComputedStyle(elem).getPropertyValue('display') === 'none') {
      elem.style.display = 'block';
    }
    opacity = opacity + 0.1;
    elem.style.opacity = opacity;
  } else {
    clearInterval(showId);
  }
}

// 배너 셋팅하기
function setBanner(type, idx) {
  // 현재 배너 숨기기
  hideId = setInterval(
    hide,
    50,
    document.querySelector(`.banner__img:nth-child(${bannerIdx})`)
  );

  // 오른쪽 배너가 보이도록 설정
  if (type === 'right') {
    if (bannerIdx === bannerData.length) {
      bannerIdx = 0;
    }
    bannerIdx++;

    // 왼쪽 배너가 보이도록 설정
  } else if (type === 'left') {
    if (bannerIdx === 1) {
      bannerIdx = 10;
    }
    bannerIdx--;

    // 선택한 페이지네이션 배너가 보이도록 설정
  } else if (type === 'pagination') {
    bannerIdx = idx + 1;
  }

  // 다음 배너 보여주기
  showId = setInterval(
    show,
    50,
    document.querySelector(`.banner__img:nth-child(${bannerIdx})`)
  );

  // pagination 셋팅
  changePagination();
}

// pagination 셋팅하기
function changePagination() {
  // pagination 초기화
  document
    .querySelectorAll(`.banner__pagination ul li a`)
    .forEach((item, idx) => {
      item.style.backgroundColor = 'rgba(255, 255, 255, .4)';
    });

  // pagination active
  document.querySelector(
    `.banner__pagination ul li:nth-child(${bannerIdx}) a`
  ).style.backgroundColor = '#fff';
}
