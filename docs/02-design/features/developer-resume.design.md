# Design: 개발자 이력서 (Developer Resume)

> Plan 문서: `docs/01-plan/features/developer-resume.plan.md`

---

## 0. 디자인 철학: "AI가 만든 것처럼 보이면 실패"

### AI 템플릿의 특징 (절대 하지 않을 것)
- 이모지를 섹션 제목이나 연락처에 사용
- 둥근 뱃지/태그로 스킬을 나열
- 그라데이션 배경, 카드에 그림자 남발
- 좌측 보더 포인트 (border-l-4 accent)
- 프로그레스 바로 스킬 레벨 표시
- 아이콘 라이브러리 (Lucide, FontAwesome 등) 사용
- 모든 섹션에 카드 컨테이너 씌우기
- "About Me", "My Skills" 같은 뻔한 섹션 네이밍
- 애니메이션, hover 효과, 트랜지션

### 우리가 지향하는 것
- **노션/구글 Docs에서 정성껏 정리한 문서** 느낌
- 텍스트 위계만으로 정보를 구분하는 타이포그래피 중심 디자인
- 장식 0개. 정보 밀도와 여백의 리듬만으로 승부
- 실제 이직 준비하는 개발자가 주말에 만든 것 같은 현실감

---

## 1. 프로젝트 구조

```
resume/
├── public/
│   └── fonts/
│       └── PretendardVariable.woff2
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── CareerSummary.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   └── PdfDownloadButton.tsx
│   └── data/
│       └── resume.ts
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 2. 데이터 구조 (`src/data/resume.ts`)

```typescript
export interface ResumeData {
  profile: Profile;
  careerSummary: string;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  links: Link[];
}

interface Profile {
  name: string;
  nameEn: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}

interface SkillCategory {
  category: string;             // "Language", "Framework", "Database", "Infra"
  items: string[];
}

interface Experience {
  company: string;
  role: string;
  period: string;               // "2023.01 - 현재"
  description: string;
  achievements: string[];
}

interface Project {
  title: string;
  period: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  techStack: string[];
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  note?: string;
}

interface Link {
  label: string;
  url: string;
}
```

---

## 3. 디자인 시스템

### 3.1 컬러

```
배경:      #FFFFFF (순백)
본문:      #374151 (gray-700) — 순수 검정은 눈이 피로함
제목:      #111827 (gray-900)
보조 텍스트: #6B7280 (gray-500) — 기간, 카테고리명
구분선:    #E5E7EB (gray-200)
링크:      #374151 (gray-700) + underline — 파란색 링크 사용 안 함
```

포인트 컬러 없음. 모노톤만 사용.
이유: 포인트 컬러가 들어가는 순간 "템플릿 갖다 쓴" 느낌이 남.
실제 개발자가 만든 이력서는 대부분 흑백이다.

### 3.2 타이포그래피

폰트: **Pretendard** 단일 사용 (한글/영문 모두).
Inter 같은 영문 전용 폰트를 따로 쓰면 오버엔지니어링 느낌.
Pretendard는 영문 글리프도 충분히 깔끔하다.

```
이름         — 24px / font-weight 700 / gray-900 / letter-spacing -0.02em
직함         — 15px / font-weight 400 / gray-500
섹션 제목     — 13px / font-weight 600 / gray-900 / uppercase / letter-spacing 0.08em
회사명       — 15px / font-weight 600 / gray-900
직책/역할    — 14px / font-weight 400 / gray-500
본문         — 14px / font-weight 400 / gray-700 / line-height 1.7
기간         — 13px / font-weight 400 / gray-500
스킬 텍스트  — 14px / font-weight 400 / gray-700
```

핵심: **섹션 제목을 작게, uppercase, 넓은 letter-spacing으로**.
이게 "개발자가 직접 만든" 느낌의 핵심 장치다.
AI 템플릿은 섹션 제목을 크고 굵게 만드는데, 그 반대로 간다.

### 3.3 간격 체계

```
페이지 최대 너비:  640px (max-w-[640px]) — A4보다 살짝 좁게
페이지 상하 패딩:  py-16 (64px)
페이지 좌우 패딩:  px-6 (24px), 모바일 px-5
섹션 간 간격:     48px (mb-12)
섹션 제목 → 내용: 20px (mb-5)
경력 항목 간:     32px (mb-8)
성과 항목 간:     4px (leading으로 자연스럽게)
구분선:          border-t border-gray-200 (섹션 상단에만, 모든 섹션에 넣지 않음)
```

---

## 4. 레이아웃 와이어프레임

전체 구조: **한 장의 문서**. 카드 없음. 배경색 없음. 그냥 흰 바탕 위에 텍스트.

```
┌──────────────────────────────────────────────┐
│                                              │
│  홍길동                          [PDF 다운로드] │
│  Backend Developer                           │
│  email@example.com / 010-1234-5678 / 서울     │
│  github.com/username                         │
│                                              │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│                                              │
│  4년차 백엔드 개발자입니다. 커머스 도메인에서     │
│  대규모 트래픽 처리와 레거시 마이그레이션 경험이    │
│  있습니다. 문제를 정의하고 해결하는 과정을         │
│  좋아합니다.                                   │
│                                              │
│                                              │
│  SKILLS                                      │
│  ─────────────────────────────────           │
│  Language     TypeScript, Java, Python       │
│  Framework    Spring Boot, NestJS            │
│  Database     PostgreSQL, Redis, MongoDB     │
│  Infra        AWS, Docker, GitHub Actions    │
│                                              │
│                                              │
│  EXPERIENCE                                  │
│  ─────────────────────────────────           │
│                                              │
│  주식회사 OO                                  │
│  Backend Developer          2023.01 - 현재    │
│  커머스 플랫폼 백엔드 개발                      │
│                                              │
│  - 주문 처리 시스템 리팩토링으로 응답 속도        │
│    40% 개선 (평균 320ms → 190ms)              │
│  - 모놀리스에서 마이크로서비스 전환 리드          │
│    (6개 서비스 분리, 장애 격리 달성)             │
│  - 일일 주문 처리량 10만 → 50만건 확장          │
│                                              │
│                                              │
│  주식회사 △△                                  │
│  Junior Backend Developer   2022.03 - 2022.12│
│  ...                                         │
│                                              │
│                                              │
│  PROJECTS                                    │
│  ─────────────────────────────────           │
│                                              │
│  주문 시스템 MSA 전환              2023.06-09  │
│  레거시 모놀리스의 주문/결제 도메인 분리          │
│                                              │
│  단일 장애점으로 피크 시간대 서비스 중단이         │
│  반복되는 문제를 이벤트 기반 비동기 아키텍처로     │
│  해결. 장애 복구 시간 30분 → 3분으로 단축.       │
│                                              │
│  Spring Boot, Kafka, PostgreSQL, Redis       │
│                                              │
│                                              │
│  EDUCATION                                   │
│  ─────────────────────────────────           │
│  OO대학교 컴퓨터공학과          2018.03 - 2022.02│
│  정보처리기사                              2022 │
│                                              │
│                                              │
│  github.com/username · blog.example.com      │
│                                              │
└──────────────────────────────────────────────┘
```

---

## 5. 컴포넌트 상세 설계

### 5.1 Header

```
이름 (24px, bold, gray-900)
직함 (15px, normal, gray-500) — 이름 바로 아래, 간격 4px
연락처 (13px, gray-500) — " / " 구분. 한 줄에 나열
GitHub URL (13px, gray-500, underline)
PDF 버튼 — 이름과 같은 줄 우측 끝. 텍스트 "PDF" 또는 "Download"만.
```

연락처 구분자: `/` 사용. `|`도 괜찮지만 `/`가 더 자연스럽다.
PDF 버튼: 테두리 없는 텍스트 버튼. `text-sm text-gray-400 hover:text-gray-600`.
과하게 꾸미면 이력서가 아니라 랜딩페이지가 된다.

### 5.2 CareerSummary

헤더 아래 `border-t border-gray-200`으로 가볍게 구분.
3~4줄 플레인 텍스트. 14px, gray-700, line-height 1.7.

**절대 하지 않을 것:**
- 배경색 깔기
- 좌측 보더 포인트
- 인용문(blockquote) 스타일
- 볼드/하이라이트 남발

**자연스럽게 보이는 법:**
첫 문장에 연차와 도메인을 담고, 마지막 문장은 가치관이나 일하는 방식으로 마무리.
"~에 강점이 있습니다" 같은 AI 문체 금지. 담백하게.

### 5.3 Skills

섹션 제목: `SKILLS` (13px, uppercase, letter-spacing 0.08em, gray-900, font-semibold)
제목 아래 1px 구분선 (`border-t border-gray-200`)

각 카테고리를 한 줄로:
```
카테고리명(고정 90px 너비, 13px, gray-500)  스킬들(14px, gray-700, 쉼표 구분)
```

카테고리 간 간격: 8px.
스킬에 볼드/색상/뱃지 일절 없음. 그냥 텍스트.

### 5.4 Experience

섹션 제목: `EXPERIENCE` (동일 스타일)

각 경력:
```
회사명 (15px, semibold, gray-900)
역할 (14px, gray-500)  ←→  기간 (13px, gray-500, 우측 정렬)
설명 한 줄 (14px, gray-500, italic 아님)

- 성과 1 (14px, gray-700)
- 성과 2
- 성과 3
```

성과 bullet: `- ` (하이픈) 사용. `•` (불릿) 보다 개발자스럽다.
성과 내 수치: 별도 스타일링 안 함. 텍스트 자체가 눈에 들어오게 문장을 쓴다.
괄호 안에 수치 보충: `응답 속도 40% 개선 (320ms → 190ms)`

경력 항목 간: 32px 간격.

### 5.5 Projects

섹션 제목: `PROJECTS` (동일 스타일)

각 프로젝트:
```
프로젝트명 (15px, semibold, gray-900)  ←→  기간 (13px, gray-500)
한줄 설명 (14px, gray-500)

본문 설명 2~3줄 (14px, gray-700, line-height 1.7)
— 문제 상황, 해결 방법, 결과를 자연스러운 서술형으로.
"문제:", "해결:", "성과:" 같은 라벨 사용 안 함.
한 문단으로 자연스럽게 쓴다.

기술 스택 (13px, gray-500, 쉼표 구분)
```

**카드 사용 안 함.** 경력과 동일한 텍스트 레이아웃.
프로젝트 간 구분: 32px 간격만으로 충분.

**"문제/해결/성과" 라벨 제거 이유:**
라벨을 붙이면 AI가 생성한 포맷처럼 보인다.
대신 서술형으로 자연스럽게 녹인다:
> "피크 시간대 주문 폭주로 서비스 중단이 반복되어, 이벤트 기반 비동기 처리로
> 전환했습니다. 장애 복구 시간이 30분에서 3분으로 단축되었습니다."

### 5.6 Education

섹션 제목: `EDUCATION` (동일 스타일)

```
기관명 (14px, gray-700)  ←→  기간 (13px, gray-500)
자격증명 (14px, gray-700)  ←→  취득연도 (13px, gray-500)
```

가장 간결한 섹션. 추가 설명 없음.

### 5.7 Footer

```
github.com/username · blog.example.com
```

13px, gray-400, 가운데 정렬. `·` 구분.
링크는 underline. 색상은 gray-400 유지 (파란색 X).
`print:hidden`.

### 5.8 PdfDownloadButton

- `"use client"` 컴포넌트
- `window.print()` 호출
- 스타일: `text-sm text-gray-400 hover:text-gray-600 transition-colors`
- 테두리, 배경, 아이콘 없음. 텍스트만.
- `print:hidden`

---

## 6. AI 안 티나게 만드는 디테일 체크리스트

| # | 체크 항목 | 이유 |
|---|----------|------|
| 1 | 포인트 컬러 사용 안 함 | 파란색/초록색 포인트 = AI 템플릿 1번 특징 |
| 2 | 이모지/아이콘 0개 | 실제 이력서에 이모지 쓰는 사람 없음 |
| 3 | 뱃지/태그 스타일 스킬 안 씀 | AI가 만드는 이력서 99%가 뱃지 사용 |
| 4 | 섹션 제목 작게 + uppercase | 큰 섹션 제목 = 템플릿 느낌 |
| 5 | 카드/박스 사용 안 함 | 흰 바탕 + 텍스트만 = 문서 느낌 |
| 6 | 그림자(shadow) 0개 | shadow = 즉시 템플릿 판정 |
| 7 | 둥근 모서리(rounded) 최소화 | PDF 버튼 정도만 rounded-sm |
| 8 | 배경색 없음 (순백만) | 회색 배경 섹션 = AI 레이아웃 패턴 |
| 9 | 문제/해결/성과 라벨 안 씀 | 서술형으로 자연스럽게 |
| 10 | 프로그레스 바 스킬 표시 안 함 | 이건 AI 이력서의 상징 |
| 11 | 애니메이션/트랜지션 0개 | 이력서는 문서. 움직이면 안 됨 |
| 12 | 2컬럼 레이아웃 안 씀 | 좌측 사이드바 = AI 템플릿 구조 |
| 13 | 프로필 사진 안 넣음 | 원형 프로필 = 템플릿 1번 특징 |
| 14 | 구분선 최소 사용 | 헤더 아래 + 섹션 제목 아래만 |
| 15 | letter-spacing 미세 조정 | 이 디테일이 "직접 만든" 느낌을 줌 |

---

## 7. 반응형 설계

| 구분 | Desktop (>= 640px) | Mobile (< 640px) |
|------|---------------------|-------------------|
| 최대 너비 | max-w-[640px] 중앙 정렬 | 전체 너비, px-5 |
| 연락처 | `/` 구분 한 줄 | 줄바꿈 허용 |
| 스킬 | 카테고리 + 텍스트 한 줄 | 카테고리 위, 텍스트 아래 (block) |
| 경력 헤더 | 역할-기간 같은 줄 | 역할 아래 기간 |
| PDF 버튼 | 이름 우측 | 이름 아래 |

모바일에서도 텍스트 크기 변경 없음. 640px 기준이라 대부분 한 줄에 들어감.

---

## 8. 인쇄/PDF 스타일

```css
@media print {
  @page {
    size: A4;
    margin: 15mm 18mm;
  }

  body {
    font-size: 13px;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .print\:hidden {
    display: none !important;
  }

  .break-inside-avoid {
    break-inside: avoid;
  }

  /* 섹션 간 간격 축소 (A4에 맞추기) */
  section {
    margin-bottom: 24px;
  }
}
```

핵심:
- 웹과 PDF 동일 구조
- PDF 버튼, Footer 인쇄 시 숨김
- 경력/프로젝트 항목이 페이지 중간에서 잘리지 않도록 `break-inside: avoid`
- 인쇄 시 폰트 13px로 축소하여 A4 한 장~두 장에 맞춤

---

## 9. SEO 메타데이터

```typescript
export const metadata: Metadata = {
  title: '홍길동 | Backend Developer',
  description: '4년차 백엔드 개발자 홍길동의 이력서',
  openGraph: {
    title: '홍길동 | Backend Developer',
    description: '4년차 백엔드 개발자 홍길동의 이력서',
    type: 'profile',
  },
};
```

---

## 10. 구현 순서

| 순서 | 파일 | 설명 |
|------|------|------|
| 1 | 프로젝트 셋업 | `create-next-app`, Tailwind, Pretendard 폰트 |
| 2 | `src/data/resume.ts` | 타입 + 샘플 데이터 |
| 3 | `src/app/globals.css` | Tailwind + @print 스타일 |
| 4 | `src/app/layout.tsx` | 폰트, 메타데이터 |
| 5 | `src/components/Header.tsx` | 이름, 직함, 연락처, PDF 버튼 |
| 6 | `src/components/CareerSummary.tsx` | 경력 요약 |
| 7 | `src/components/Skills.tsx` | 기술 스택 텍스트 |
| 8 | `src/components/Experience.tsx` | 경력 |
| 9 | `src/components/Projects.tsx` | 프로젝트 |
| 10 | `src/components/Education.tsx` | 학력/자격증 |
| 11 | `src/components/Footer.tsx` | 링크 |
| 12 | `src/components/PdfDownloadButton.tsx` | PDF 다운로드 |
| 13 | `src/app/page.tsx` | 전체 조합 |
| 14 | 검증 | 반응형, PDF 인쇄, AI 체크리스트 검수 |
