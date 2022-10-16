// 배너 인덱스
let bannerIdx = 1;

window.onload = () => {
  // 배너 초기화
  bannerData.forEach((item, idx) => {
    let bannerImg = document.querySelector(`.banner__img:nth-child(${idx + 1})`);
    let bannerTitle = document.querySelector(`.banner__img:nth-child(${idx + 1}) .banner__title p`);
    let bannerDesc = document.querySelector(`.banner__img:nth-child(${idx + 1}) .banner__desc`);
    let bannerLeft = document.querySelector(`.banner__img:nth-child(${idx + 1}) .banner__left`);
    let bannerRight = document.querySelector(`.banner__img:nth-child(${idx + 1}) .banner__right`);
    bannerImg.style.backgroundImage = `url(${bannerData[idx].url})`;
    bannerTitle.innerHTML = bannerData[idx].title;
    bannerDesc.innerHTML = bannerData[idx].desc;
    bannerLeft.style.backgroundColor = bannerData[idx].leftColor;
    bannerRight.style.backgroundColor = bannerData[idx].rightColor;
  });

  // Pagination 초기화
  changePagination();

  // 4.5초 간격으로 배너 변경
  setInterval(() => {
    // 배너 셋팅
    setBanner('right');
  }, 4500);

  // 배너 왼쪽 버튼 클릭 이벤트
  let btnPrev = document.querySelector('.banner__prev');
  btnPrev.addEventListener('click', () => {
    // 배너 셋팅
    setBanner('left');
  });

  // 배너 오른쪽 버튼 클릭 이벤트
  let btnNext = document.querySelector('.banner__next');
  btnNext.addEventListener('click', () => {
    // 배너 셋팅
    setBanner('right');
  });

  // 배너 페이지네이션 클릭 이벤트
  let btnPagination = document.querySelectorAll('.banner__pagination ul li');
  btnPagination.forEach((item, idx) => {
    item.addEventListener('click', () => {
      // 배너 셋팅
      setBanner('pagination', idx);
    });
  });

  // just-1day 지난시간 퍼센트 계산 후 보여주기
  let percent = Math.floor((new Date().getHours() / 24) * 100);
  document.querySelector('.timeline span').style.width = `${percent}%`;

  // just-1day 남은시간 계산 1초마다 반복
  setInterval(setCountdown, 100);

  // cart-item 탭 마우스 오버 이벤트
  let cartItemTab = document.querySelectorAll('.cart-item .tab-nav__list li a');
  cartItemTab.forEach((item, idx) => {
    item.addEventListener('mouseover', () => {
      // 탭 리스트 active toggle
      document.querySelectorAll(`.cart-item .tab-nav__list li`).forEach((item, idx) => {
        item.classList.toggle('active');
      });
      // 탭 아이템 active toggle
      document.querySelectorAll(`.cart-item .tab-container > div`).forEach((item, idx) => {
        item.classList.toggle('active');
      });
    });
  });

  // only-brand 탭 마우스 오버 이벤트
  let onlyBrandTab = document.querySelectorAll('.only-brand .tab-list li a');
  onlyBrandTab.forEach((item, idx) => {
    item.addEventListener('mouseover', () => {
      // 탭 리스트 active toggle
      document.querySelectorAll(`.only-brand .tab-list li`).forEach((item, idx) => {
        item.classList.toggle('active');
      });
      // 탭 아이템 active toggle
      document.querySelectorAll(`.only-brand .left__items`).forEach((item, idx) => {
        item.classList.toggle('active');
      });
    });
  });
};

// 배너 셋팅하기
function setBanner(type, idx) {
  document.querySelector(`.banner__img:nth-child(${bannerIdx}`).classList.add('hide');
  document.querySelector(`.banner__img:nth-child(${bannerIdx}`).classList.remove('show');

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
  document.querySelector(`.banner__img:nth-child(${bannerIdx}`).classList.add('show');
  document.querySelector(`.banner__img:nth-child(${bannerIdx}`).classList.remove('hide');

  // 페이지네이션 셋팅
  changePagination();
}

// 페이지네이션 셋팅하기
function changePagination() {
  // 페이지네이션 초기화
  document.querySelectorAll(`.banner__pagination ul li a`).forEach((item, idx) => {
    item.classList.remove('active');
  });

  // 페이지네이션 active
  document.querySelector(`.banner__pagination ul li:nth-child(${bannerIdx}) a`).classList.add('active');
}

// 남은 시간 카운트하기
function setCountdown() {
  let date = new Date();
  let hour = 24 - date.getHours(); // 24시 => 00시
  let min = 60 - date.getMinutes(); // 60분 => 00분
  let sec = 60 - date.getSeconds(); // 60초 => 00초

  // 60분일 경우 0분으로 바꿔주고 아닐경우 시간에서 1 빼주기
  min === 60 ? (min = 0) : hour--;

  // 60초일 경우 0초로 바꿔주고 아닐경우 분에서 1 빼주기
  sec === 60 ? (sec = 0) : min--;

  // 한자리 수일 경우 0 붙여주기
  if ((hour + '').length === 1) hour = '0' + hour;
  if ((min + '').length === 1) min = '0' + min;
  if ((sec + '').length === 1) sec = '0' + sec;

  document.querySelector('.countdown').innerHTML = `${hour}:${min}:${sec}`;
}
