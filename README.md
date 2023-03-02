# KR BOX Office React App

이 토이 프로젝트(Toy Project)는 React와 Open API를 사용하여 개발하였습니다.

## 사용기술
HTML, CSS, React JS, Live Crawling

### `HTML, CSS`
HTML5

### `React JS & modules`
"prop-types": "^15.8.1"

"react": "^18.2.0"

"react-dom": "^18.2.0"

"react-scripts": "5.0.1"

"reset-css": "^5.0.1
 - reset css
  
"date-fns": "^2.29.3"
 - date formatting

"http-proxy-middleware": "^2.0.6"
 - CORS error 해결을 위해 개발환경 설정.

### `OPEN API`
영화진흥위원회 OPEN API

https://www.kobis.or.kr/kobisopenapi/homepg/apiservice/searchServiceInfo.do
- 일별 박스오피스 

### `Live Crawling`
영화진흥위원회 OPEN API는 포스터 이미지를 제공하고 있지 않습니다.
이를 해결하기위해 영화진흥위원회의 영화 상세정보에서 포스터 이미지를 실시간으로 조회하고 있습니다.

매번 조회할 때 마다 포스터를 가져오기 때문에 효율은 좋지 않으므로, 
추후 DB에 링크를 저장하고 조회 시 DB에 없는 포스터가 있다면 가져오도록 수정할 계획입니다.
