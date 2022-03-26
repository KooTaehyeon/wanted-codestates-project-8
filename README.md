# 🏦 더블엔씨 | wanted-codestates-project-8

<br/>
<a href="https://spontaneous-concha-7b9b75.netlify.app/
">▶️ 배포링크</a>

## 🚗 Implement

### Stack

`Javascript` `React` `Styled-Components` `recoil` `axios`

#### ✅ 더블엔씨

1. 검색기능

- 검색 창에 검색을하면 filter를 사용해서
  그안에 조건문 includes 메소드를 다시 반환 시켜서
  데이터 목록을 다시 보여주게 해주었습니다
  그리고 리셋 버튼을 누르게 되면 로컬스토리지에 저장된 데이터를
  다시 데이터목록에 넣어주어 되돌릴수 있게 하였습니다.

2. 휴양림 데이터 목록

- api 데이터를 불러와서 리스트 map 을 돌려 10개를 만든후에
  무한스크롤 을 이용해서 무한스크롤이 작동할떄 10개의 새로운 api
  불러와서 기능을 구현하였습니다

3. 휴양림 저장 폼

- 휴양림 데이터 목록에서 해당 목록을 누르면 모달 창이 나오고
  그 모달창에는 이름, 주소 , 연락처 , 메모 창이 나오며
  메모창에 메세지를 입력한후에 저장 그 데이터를 저장후에
  Home 쪽으로 데이터를 넘겨줍니다.

4. 저장된 휴양림 목록

- 저장한 데이터를 Home쪽에서 휴양림 데이터와 더불어
  메모에 저장한 메세지를 띄워주게 하였습니다.

5. 휴양림 수정 폼

- 저장된 휴양림 목록을 클릭하면 모달창이 띄워지며
  처음 저장된 메모에 저장된 메세지를 띄워주며
  메세를 수정후에 수정를 클릭하면 저장된 메세지
  데이터를 수정해주었습니다.

5. 휴양림 삭제 폼

- 수정 폼과 마찬가지로 목록을 클릭하면
  모달창이 띄워지며 저장된 데이터들이 나오며
  삭제를 클릭하면 로컬 스토리지에서 저장된 데이터를
  삭제 시켜 줍니다.

7. 피드백

- 수정,저장,삭제 할시에 3초정도 창을 띄워 주고
  사라지는 피드백 창을 띄워주게 해주었습니다.

## 🚗 Directory

```
├── public/
├── src/
│   ├── components/              - page components
│   ├── pages/                   - rendering pages
│   ├── util/                    - LocalStorage
│
├── App.js                       - page rendering
├── index.js                     - entry point
├── atoms.js                     - recoil
├── README.md                    - 리드미(프리뷰, 배포링크, 코드컨벤션)
└── package.json                 - 사용 package 목록
```

### <br/>

###

## 🚗 Code Convention

### Getting Started

1. `clone` the repository,

```
$ git clone "https://github.com/KooTaehyeon/wanted-codestates-project-8.git"
```

2. `Install` dependencies,

```
$ npm install
```

3. `start` the project,

```
$ npm start
```

### 구현하면서 어려웠던 점

로컬스토리지를 이용해 수정,삭제,검색

### Commit Emoji

|   emoji    | commit message |       when to use it        |
| :--------: | :------------: | :-------------------------: |
|   :tada:   |     Start      |        프로젝트 시작        |
| :sparkles: |      Feat      |      새로운 기능 추가       |
|   :bug:    |      Fix       |          버그 수정          |
| :recycle:  |    Refactor    |        코드 리팩터링        |
| :lipstick: |     Style      |   스타일 추가 및 업데이트   |
| :package:  |     Chore      |   패키지 추가 및 업데이트   |
|  :books:   |      Docs      | 그 외 문서 추가 및 업데이트 |

### <br/>

###
