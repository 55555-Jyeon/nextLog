---
title: React
data: 2024-03-09
image: "/images/react.svg"
summary: 웹의 성능 최적화
slug: react
links: "https://velog.io/@55555-jyeon/React-optimise"
---

### 왜 웹의 성능을 최적화해야 하는 걸까?

웹 성능 최적화(개선)은 웹페이지를 효율적으로 동작하게 하는 작업입니다.
성능을 최적화함으로써 사용자에게 좋은 사용자 경험을 제공할 수 있기 때문에 이는 결국 비즈니스적인 성공과 직결되는 문제이기도 합니다.

#### 좋은 사용자 경험?

예를 들어, 사용자가 웹 사이트에 접속했을 때 하얀 화면(빈 화면)을 노출시키거나 웹 사이트 로딩 및 렌더링에 지연이 발생하면 사용자는 자연스레 이탈을 하게 됩니다. 그리고 동시에 해당 웹 서비스는 방문 사용자에 대한 비즈니스 기회를 잃어버리게 됩니다.

##### 1️⃣ 로딩 속도

2017년 Google의 모바일 부문 글로벌 제품 리드인 Daniel An이 말한 Think with Google의 기사에서 발췌한 내용
웹 페이지 로딩 시간과 사용자 이탈률은 밀접한 관계를 갖고 있습니다.

페이지 로딩 시간이 1초에서 3초로 증가하면 페이지 이탈률이 32%로 증가한다고 하고, 10초가 되면 123%나 된다고 합니다.
즉, 웹 사이트가 사용자에게 빨리 로딩되면 좋은 사용자 경험(UX, User Experince)을 제공할 수 있고 초반 이탈률도 감소시킬 수 있습니다.

##### 2️⃣ Load 순서

UX를 위해 사용자의 뷰(view), 즉 사용자 시선에 따라 콘텐츠가 어떻게 로드되어 보여지는지는 것도 신경을 써주는 것이 좋습니다.
일반적으로 사용자의 시선은 위에서 아래로 이동합니다. 좌우의 경우에는 나라마다 차이가 존재합니다.
한국과 같은 LTR(Left to Right) 국가들을 기준으로 개발을 할 때에는 콘텐츠의 로드 순서가 위부터, 왼쪽부터 되도록 신경을 쓴다면 자연스러운 사용자 경험을 제공할 수 있습니다.
콘텐츠의 로딩 순서가 웹 성능 점수에 영향을 미치지 않지만, 사용성에 영향을 끼치므로 웹 성능 작업을 하면서 콘텐츠 로딩 되는 순서를 되짚어 보고 개선하는 것이 좋을 것 같습니다.

예를 들어, 웹 사이트 표출 시, 사이트 윗부분인 Heder 부분이 늦게 뜨고 아래서부터 페이지가 로딩 된다면 어색한 사용자 경험을 제공하게 됩니다. 🙃

### 개선 포인트

그렇다면 프론트엔드 단에서 할 수 있는 최적화에는 어떤 것들이 있을까요?
크게 로딩 성능과 렌더링 성능으로 나눌 수 있을 것 같습니다.

##### 1️⃣ 로딩 성능(Loading Performance)

> 얼마나 빠르게 리소스를 로드하는가

웹 사이트의 로딩 성능은 서버에서 웹 페이지에 필요한 HTML, CSS, Javascript, 미디어 소스(Image, Video) 등의 리소스를 다운로드할 때의 성능을 말합니다.

##### 2️⃣ 렌더링 성능(Rendering Performance)

> 얼마나 빠르게 화면을 렌더링하고 있는가

웹 사이트의 렌더링 성능은 페이지 화면에 주요 리소스가 페이지에 그려질 때의 성능을 말합니다.

다양한 성능 최적화 방법이 있지만, 그 중에서도 크롬 개발자도구를 활용하여 웹 사이트의 로딩 성능과 렌더링 성능과 관련된 지표들을 살펴보고 이를 통해 어떻게 성능을 개선할 수 있는지 살펴보겠습니다.🙂

![](/images/image.png)

위 이미지는 Google이 만든 필수적인 웹 성능 지표인 Core Web Vital입니다.
LCP, CLS는 개발자 도구의 Lighthouse에서 정량적인 수치로 확인할 수 있습니다.

### 🩺 Analysis

분석은 개발자 도구의 탭을 활용해 할 수 있습니다.

자주 사용되는 탭들은 총 네 가지, lighthouse(별도 설치 필요), profiler, performances, network 입니다.

실제로 위 네 가지의 방법을 사용해 최적화한 사례는 게시글에서 확인해볼 수 있습니다 :)
