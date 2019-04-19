const week2 = `## 개발일지 Week 2 (Created at 2019.04.14)
* * *

### Development period

[개발 일정](https://www.notion.so/6fee4073445c4626ac20c943574f8979)

### Development codes

[https://github.com/wisemuji/media-english-project](https://github.com/wisemuji/media-english-project)

### Commit messages

[https://github.com/wisemuji/media-english-project/commits/master](https://github.com/wisemuji/media-english-project/commits/master)

### New features

- **Front-end 개발 진행**
    - **웹사이트의 Font Style 변경**

        Google에서 제공하는 **[Noto Sans KR](https://fonts.google.com/specimen/Noto+Sans)**로 변경

    - **Introduction Section 완성**

        ![이미지](/introduction_image.png)

        네비게이션 바의 Introduction 버튼을 클릭하면 **자동으로 페이지 스크롤**되게 구현.

        ![GIF](/click_introduction.gif)

        프리젠트의 간단한 소개.

        다양한 기능들 소개.

        - **발표시간 타이머**

            발표 시간 스톱워치 기능을 제공하여 입력한 시간 내에 발표를 끝마칠 수 있도록 함.

        - **스크립트**

            까먹을 수 있는 스크립트를 시간에 따라 기록하고, 직접 타이핑을 하지 않아도 프리젠트가 지원하는 음성인식 api를 이용하여 말로 입력할 수 있음.

        - **키포인트**

            PT의 슬라이드를 넘기거나 제스처를 취할 타이밍을 키포인트로 등록하여 진동 알림을 받음.

        - **스마트워치 연동**

            실제 발표 시에 더 유연하게 사용할 수 있는 스마트워치로 앱에 생성한 PT의 발표 시간 및 키포인트 알람을 받는다.

        **직접 디자인한 아이콘** 사용.

        ![이미지](/icons_image.png)

        프리젠트의 **기능**과 **사용 가이드**를 효과적으로 드러낸 영상 추가.

        ![이미지](/video_image.png)

        재생, 볼륨 조절, 전체화면 등의 **컨트롤러** 제공.

        BGM은 

    - **Development Section 레이아웃 변경 (개발일지 업로드 화면)**

        ![이미지](/development_image.png)

        **4개의 섹션**으로 분리(4주).

        섹션마다 **마우스를 올리면 배경 색이 변화**하도록 함.

        **카드** 형식의 레이아웃 사용.

        (**Material Design Guide**의 [Card Design](https://material.io/design/components/cards.html#) 참고).

        - Day2 개발 일지 업로드

            쉽게 이미지나 코드를 Embed할 수 있는 [Markdown](https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4) 사용.
`;

export default week2 ;