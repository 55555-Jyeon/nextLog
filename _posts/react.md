---
title: React
data: 2024-03-09
image: "/images/react.svg"
summary: React의 동작 가이드
slug: react
links: "https://velog.io/@55555-jyeon/eeact-render-guide"
---

### Fiber? Stack?

Fiber(파이버)는 React16에 처음 등장한 아키텍처로 이전까지는 stack 아키텍처가 사용되고 있었습니다.
stack의 특성상(후입선출) render의 순서가 고정되어 있기 때문에 겪어야 하는 불편함이 있었습니다.
Fiber는 render의 순서를 조정하기 위해 등장하게 되었습니다.

Fiber 아키텍처가 등장한 것은 16버전이지만, 본격적으로 사용되기 시작한 것은 useTransaction 함수가 등장한 18버전부터 입니다.

<br />

#### 👭 Render in React

VDOM(Virtual DOM, 가상 DOM)
VDOM은 메모리 상에 가상의 UI 관련 정보를 띄우고 라이브러리를 활용해 실제 DOM과 동기화되는 (재조정(reconciliation)) 프로그래밍 개념입니다.
