# 🧸 텐바이텐 클론코딩

- 실제 사이트 주소 : https://www.10x10.co.kr/
- 클론 사이트 배포 주소 : https://10x10-clone.netlify.app/

## 사용 기술
- HTML
- CSS
- JavaScript

## 클론 사이트 선정 이유
flex, grid, animation 을 배운 후 실제로 프로젝트에 적용해보고 싶었는데,  
텐바이텐 사이트는 레이아웃 종류가 다양하고 애니메이션 효과도 적용할 수 있을 것 같아 선정하였습니다.

## 기존 사이트와 다른 부분
- 상품 이미지들은 매일 변경되기 때문에 실제 사이트와 다를 수 있습니다.
- 중복되는 레이아웃은 시간 부족으로 인해 생략하였습니다.
- lnb 에서 사용하던 dl, dt 태그를 ul, li 태그로 변경하였습니다.
- 기존의 css float 속성을 사용하여 배치하던 것을 flex, grid 를 사용하여 배치하였습니다.
- 기존의 남은시간 계산 코드를 간결하게 개선하였습니다.
- 메인 배너 데이터를 동적으로 생성하여 적용하였습니다.
- 메인 배너 슬라이드를 외부 라이브러리 사용 없이 css animation + javascript 로 구현하였습니다.
- 중간의 흐르는 배너를 외부 라이브러리 사용 없이 css animation + javascript 로 구현하였습니다.

## 어려웠던 부분
중간의 흐르는 배너가 중국어로 된 제이쿼리 라이브러리로 적용되어 있었습니다. ㅜㅜ  
검색을 해봐도 정보가 잘 나오지 않아서, css animation 을 이용해 만드는 방법을 찾아 적용해 보았는데,  
이미지끼리 겹치면서 움직이고, 애니메이션 정지가 적용되지 않아서 해결하느라 시간이 많이 소요되었습니다.  

## 아쉬운 부분
시간 부족으로 인해 중복되는 레이아웃을 생략하게 된 것이 아쉽습니다.  
또한 미디어쿼리를 적용한 반응형 사이트를 구현하지 못해서 아쉽습니다.  
다음 프로젝트에서는 미디어쿼리 + css 전처리기를 사용하여 구현해 보고 싶습니다.
