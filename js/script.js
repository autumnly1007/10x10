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
  document
    .querySelector(`.banner__pagination ul li:nth-child(${bannerIdx}) a`)
    .classList.add('active');
}
