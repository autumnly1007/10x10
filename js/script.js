// 배너 인덱스
let bannerIdx = 1;

window.onload = () => {
  // 배너 초기화
  bannerData.forEach((item, idx) => {
    const bannerImg = document.createElement('div');
    bannerImg.className = 'banner__img';
    bannerImg.style.backgroundImage = `url(${item.url})`;

    const aTag = document.createElement('a');
    aTag.href = 'javascript:void(0);';

    const bannerText = document.createElement('div');
    bannerText.className = 'banner__txt';

    const bannerTitle = document.createElement('div');
    bannerTitle.className = 'banner__title';
    bannerTitle.innerHTML = item.title;

    const bannerDesc = document.createElement('p');
    bannerDesc.className = 'banner__desc';
    bannerDesc.innerHTML = item.desc;

    const bannerLeft = document.createElement('div');
    bannerLeft.className = 'banner__left';
    bannerLeft.style.backgroundColor = item.leftColor;

    const bannerRight = document.createElement('div');
    bannerRight.className = 'banner__right';
    bannerRight.style.backgroundColor = item.rightColor;

    bannerText.append(bannerTitle);
    bannerText.append(bannerDesc);

    aTag.append(bannerText);

    bannerImg.append(aTag);
    bannerImg.append(bannerLeft);
    bannerImg.append(bannerRight);

    document.querySelector('.banner__inner').append(bannerImg);
  });

  // Pagination 초기화
  changePagination();

  // 4.5초 간격으로 배너 변경
  setInterval(() => {
    // 배너 셋팅
    setBanner('right');
  }, 4500);

  // 배너 왼쪽 버튼 클릭 이벤트
  const btnPrev = document.querySelector('.banner__prev');
  btnPrev.addEventListener('click', () => {
    // 배너 셋팅
    setBanner('left');
  });

  // 배너 오른쪽 버튼 클릭 이벤트
  const btnNext = document.querySelector('.banner__next');
  btnNext.addEventListener('click', () => {
    // 배너 셋팅
    setBanner('right');
  });

  // 배너 페이지네이션 클릭 이벤트
  const btnPagination = document.querySelectorAll('.banner__pagination ul li');
  btnPagination.forEach((item, idx) => {
    item.addEventListener('click', () => {
      // 배너 셋팅
      setBanner('pagination', idx);
    });
  });

  // gnb 마우스 오버 시 lng 보여주기
  const gnbMenu = document.querySelectorAll('.nav__gnb ul li.menu');
  gnbMenu.forEach((menu, idx) => {
    menu.addEventListener('mouseover', () => {
      document.querySelector(`.nav__lnb .lnb__category:nth-child(${idx + 1})`).classList.add('active');
    });
    menu.addEventListener('mouseleave', () => {
      document.querySelector(`.nav__lnb .lnb__category:nth-child(${idx + 1})`).classList.remove('active');
    });
  });

  // lng 마우스 오버 시 보여주기 유지
  const lnbMenu = document.querySelectorAll('.nav__lnb .lnb__category');
  lnbMenu.forEach((menu, idx) => {
    menu.addEventListener('mouseover', () => {
      document.querySelector(`.nav__lnb .lnb__category:nth-child(${idx + 1})`).classList.add('active');
    });
    menu.addEventListener('mouseleave', () => {
      document.querySelector(`.nav__lnb .lnb__category:nth-child(${idx + 1})`).classList.remove('active');
    });
  });

  // just-1day 지난시간 퍼센트 계산 후 보여주기
  const percent = Math.floor((new Date().getHours() / 24) * 100);
  document.querySelector('.timeline span').style.width = `${percent}%`;

  // just-1day 남은시간 계산 1초마다 반복
  setInterval(setCountdown, 100);

  // look-book 마우스 오버 시 애니메이션 정지
  const lookBook = document.querySelector('.look-book__list');
  lookBook.addEventListener('mouseover', () => {
    document.querySelector('.look-book__list ul.original').classList.add('pause');
    document.querySelector('.look-book__list ul.clone').classList.add('pause');
  });
  lookBook.addEventListener('mouseleave', () => {
    document.querySelector('.look-book__list ul.original').classList.remove('pause');
    document.querySelector('.look-book__list ul.clone').classList.remove('pause');
  });

  // cart-item 탭 마우스 오버 이벤트
  const cartItemTab = document.querySelectorAll('.cart-item .tab-list li a');
  cartItemTab.forEach((item) => {
    item.addEventListener('mouseover', () => {
      // 탭 리스트 active toggle
      document.querySelectorAll(`.cart-item .tab-list li`).forEach((item) => {
        item.classList.toggle('active');
      });
      // 탭 아이템 active toggle
      document.querySelectorAll(`.cart-item .tab-container > div`).forEach((item) => {
        item.classList.toggle('active');
      });
    });
  });

  // only-brand 탭 마우스 오버 이벤트
  const onlyBrandTab = document.querySelectorAll('.only-brand .tab-list li a');
  onlyBrandTab.forEach((item) => {
    item.addEventListener('mouseover', () => {
      // 탭 리스트 active toggle
      document.querySelectorAll(`.only-brand .tab-list li`).forEach((item) => {
        item.classList.toggle('active');
      });
      // 탭 아이템 active toggle
      document.querySelectorAll(`.only-brand .left__items`).forEach((item) => {
        item.classList.toggle('active');
      });
    });
  });

  // 플로팅 배너 닫기버튼 마우스 오버 이벤트
  const floatClose = document.querySelector('.diary2023_float .float-close');
  floatClose.addEventListener('mouseover', () => {
    document.querySelector('.diary2023_float .float-close__7day').classList.add('active');
  });
  floatClose.addEventListener('mouseleave', () => {
    document.querySelector('.diary2023_float .float-close__7day').classList.remove('active');
  });

  // 우측 하단 TOP 버튼 클릭 시 화면 최상단으로 스크롤 이벤트
  const topBtn = document.querySelector('.footer .go-top');
  topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // look-book 리스트 아이템 마우스 오버 이벤트
  const lookBookList = document.querySelectorAll('.look-book .look-book__list ul');
  lookBookList.forEach((ul, ulIdx) => {
    [...ul.children].forEach((li, liIdx) => {
      li.addEventListener('mouseover', () => {
        document
          .querySelector(`.look-book .look-book__list ul:nth-child(${ulIdx + 1}) li:nth-child(${liIdx + 1}) .look-book__image a p span`)
          .classList.add('active');
      });
      li.addEventListener('mouseleave', () => {
        document
          .querySelector(`.look-book .look-book__list ul:nth-child(${ulIdx + 1}) li:nth-child(${liIdx + 1}) .look-book__image a p span`)
          .classList.remove('active');
      });
    });
  });
};

// 배너 셋팅하기
function setBanner(type, idx) {
  document.querySelector(`.banner__img:nth-child(${bannerIdx}`).classList.add('hide');
  document.querySelector(`.banner__img:nth-child(${bannerIdx}`).classList.remove('show');

  switch (type) {
    // 오른쪽 배너가 보이도록 설정
    case 'right':
      if (bannerIdx === bannerData.length) {
        bannerIdx = 0;
      }
      bannerIdx++;
      break;
    // 왼쪽 배너가 보이도록 설정
    case 'left':
      if (bannerIdx === 1) {
        bannerIdx = bannerData.length + 1;
      }
      bannerIdx--;
      break;
    // 선택한 페이지네이션 배너가 보이도록 설정
    case 'pagination':
      bannerIdx = idx + 1;
      break;
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
