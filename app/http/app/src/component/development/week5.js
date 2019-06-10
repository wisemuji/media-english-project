const week5 = `## 개발일지 Week #5 (Created at 2019.06.10)
* * *

### New features

- **Back-end 개발 진행**

    이메일을 보내기 위한 기능을 구현함.

    - **사용기술** : Flask, AWS(EC2)

    - **API** : Flask-Mail API, Flask-Cors API

    - **구현로직** : 
        
        - Client(React)는 Firebase(Hosting)에, API 서버(Flask)는 AWS(EC2)에 호스팅되어 있다.
        
        - Client에서 요청(이름, 이메일, 제목, 내용)을 보내면(request)
        
        - API 서버에서 request를 받아 이메일을 보내고
        
        - Client에게 적절한 response를 보내준다.

    ![이미지](/client_server.png)

- **Week5 개발 일지 업로드**

    쉽게 이미지나 코드를 Embed할 수 있는 [Markdown](https://ko.wikipedia.org/wiki/%EB%A7%88%ED%81%AC%EB%8B%A4%EC%9A%B4) 사용.

- **개발 마무리**

    - 웹사이트의 완성도를 전체적으로 확인하고 버그나 이슈를 고치는 작업을 했다.

    - 전체 프로그램의 소스 코드는 아래 링크에서 확인해볼 수 있다.

    - [Front-end Programming](https://github.com/wisemuji/present-web)

    - [Back-end Programming](https://github.com/wisemuji/present-web-server)

- **느낀 점**

    - 원래 주어진 프로젝트는 Wix를 이용한 템플릿 사이트 제작이였다. 하지만 과제를 받을 당시에는
    내가 웹 개발에 한창 관심이 많았던 터라 직접 코딩을 해보면 어떨까라는 생각을 하게 되었다. 
    프로젝트를 진행하는 과정에서 나의 전공 실력도 향상시킬 수 있고 더욱 뜻깊을 것이라 생각했기 때문이다.

    - 그렇게 시작하게 된 '프리젠트 웹사이트'제작 프로젝트는 솔직히 말해서 힘든 점이 많았다.
    전시회 준비나 다른 과목 과제를 함과 동시에 웹사이트 제작을 하는 것은 쉬운 일이 아니었다. 
    특히나 사용한 기술이 전부 학교에서 배우지 않는 기술이라 틈틈히 공부도 해야 했기 때문이다.
    
    - 그러나 결국 완성된 웹사이트를 보니 말로 표현할 수 없는 뿌듯함이 느껴졌다. 그동안 열심히 전공 실력을
    닦아온 보람이 느껴졌고 의지를 가지고 노력하면 뭐든 해낼 수 있겠다는 자신감도 느낄 수 있었다.
    이렇게 몇 주 동안 열정을 가지고 프로젝트를 진행할 수 있어서 정말 뜻깊은 시간이였고 다음에도 도전해보고 싶다.
    
    
`;

export default week5 ;