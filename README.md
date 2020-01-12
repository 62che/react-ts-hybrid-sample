# A Boilerplate For React + Ts + MobX + MaterialUI + Capacitor

## Includes...

- Create-React-App with Typescript
- React Router
- MobX
- Mobx React Router
- Material UI
- Class Component Example
- Functional Component Example
- Storybook
- Capacitor (Successor of Cordova for Hybrid App)

---

## Develop Environment

### Setup

```cmd
> npm install
```

### Developing

```cmd
> npm start
```

### Testing

```cmd
> npm test # 테스트 툴 가동
> npm run test:once # 테스트 케이스 수행
> npm run test:coverage # 커버리지 리포트 생성
> npm run test:watch # TDD
```

### Storybook

```cmd
> npm run storybook
```

### Build

```cmd
> npm run build
```

### Android Build

```cmd
> npx cap add android
> npx cap sync # or copy. need to `build/` artifact.
```

---

## Layered Architecture

|   Layer   | Description               |
| :-------: | :------------------------ |
| Component | UI와 표현로직             |
|   Store   | 기능로직과 그 상태값 유지 |
|  Service  | 데이타를 가공하여 제공    |
|    Api    | 외부 인터페이스 연동      |
|    Lib    | 사이트카, 기타 모듈       |

- 각 레이어는 같은 층 또는 바로 아래 층만 접근하도록 합니다.
  - 예) Component는 다른 컴포넌트를 포함하거나 Store를 사용합니다.
  - 예) Service는 Api 또는 Service 레이어를 호출할 수 있으며, Store에 의해 사용됩니다.
- Component 레이어는...
  - 사용자와의 상호작용을 담당합니다.
  - 내부적으로 사용할 임시 상태(입력폼 등)를 제외한 상태 관리들은 Store 레이어에 역할을 위임합니다.
- Store 레이어는...
  - 대부분의 기능(비즈니스)로직을 다룹니다.
  - 상태기반(Stateful)이므로 캐싱, 재시도, 유지 등 복잡한 로직을 다루게 됩니다.
  - 하위 계층에서 올라온 오류를 처리하고 상태로 변환합니다.
- Service 레이어는...
  - Api 레이어에서 받은 복잡한 데이터 구조를 우리 앱이 사용하기 편리한 데이터 구조로 변환합니다.
  - 다른 여러 Service를 호출하여 데이터를 조합할 수도 있습니다.
  - 무상태(Stateless)이므로 캐싱 등을 고려하지 않습니다.
- Api 레이어는...
  - 그저 단순히 외부 인터페이스를 호출하고 결과를 반환합니다.
  - 오류를 처리하려 하지 말고 가급적 즉시 상위로 전달합니다.
- Lib 레이어는...
  - 사이드카로서, 어느 계층에서도 사용 가능합니다.
  - 간단하고 재사용 가능한 유틸리티성 코드가 위치합니다.

---

## Component Layer

- Atomic Design 패턴을 따릅니다.
  - [Atomic Design](https://brunch.co.kr/@ultra0034/63)
  - [ABEM (Atomic design + BEM)](https://medium.com/@LaunchingDream/abem-5ceb36b8f027)
    - BEM은 적용 검토 필요...
- 기능/처리/비즈니스 로직은 Store에 위임합니다.
  - 오로지 Store의 상태 및 데이타를 화면에 표현한다는 생각으로...
- 현대적 방식의 Functional Component와 Hook 조합을 권장합니다.
  - 물론 전통적 방식의 Class Component도 사용 가능합니다.

## Store Layer

...
