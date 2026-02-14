export interface Profile {
  name: string;
  nameEn: string;
  title: string;
  email: string;
  phone: string;
  location: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  detail: string;
  techStack: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  note?: string;
}

export interface Link {
  label: string;
  url: string;
}

export interface ResumeData {
  profile: Profile;
  careerSummary: string;
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  links: Link[];
}

export const resume: ResumeData = {
  profile: {
    name: "홍길동",
    nameEn: "Gildong Hong",
    title: "Backend Developer",
    email: "gildong@example.com",
    phone: "010-1234-5678",
    location: "서울",
  },

  careerSummary:
    "4년차 백엔드 개발자입니다. 커머스 도메인에서 대규모 트래픽 처리와 레거시 시스템 마이그레이션을 경험했습니다. 반복되는 장애를 구조적으로 해결하는 데 관심이 많고, 운영 부담을 줄이는 방향으로 설계합니다.",

  skills: [
    { category: "Language", items: ["TypeScript", "Java", "Python", "Go"] },
    { category: "Framework", items: ["Spring Boot", "NestJS", "Express"] },
    { category: "Database", items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"] },
    { category: "Infra", items: ["AWS", "Docker", "Kubernetes", "GitHub Actions"] },
  ],

  experience: [
    {
      company: "주식회사 OO",
      role: "Backend Developer",
      period: "2023.01 - 현재",
      description: "커머스 플랫폼 백엔드 개발",
      achievements: [
        "주문 처리 시스템 리팩토링으로 응답 속도 40% 개선 (평균 320ms → 190ms)",
        "모놀리스에서 마이크로서비스 전환 리드, 6개 서비스 분리 후 장애 격리 달성",
        "일일 주문 처리량 10만건에서 50만건으로 확장",
        "결제 모듈 장애 알림 자동화로 평균 감지 시간 15분 → 2분 단축",
      ],
    },
    {
      company: "주식회사 △△",
      role: "Junior Backend Developer",
      period: "2022.03 - 2022.12",
      description: "SaaS 플랫폼 API 개발",
      achievements: [
        "RESTful API 설계 및 구현, 월간 활성 사용자 3만명 서비스 운영",
        "배치 처리 파이프라인 구축으로 데이터 처리 시간 60% 단축",
        "테스트 커버리지 35% → 78% 향상, CI/CD 파이프라인 구축",
      ],
    },
  ],

  projects: [
    {
      title: "주문 시스템 MSA 전환",
      period: "2023.06 - 2023.09",
      description: "레거시 모놀리스의 주문/결제 도메인 분리",
      detail:
        "피크 시간대 주문 폭주로 전체 서비스가 중단되는 문제가 반복되었습니다. 주문과 결제 도메인을 분리하고 이벤트 기반 비동기 처리로 전환하여 장애 복구 시간을 30분에서 3분으로 단축했습니다.",
      techStack: ["Spring Boot", "Kafka", "PostgreSQL", "Redis"],
    },
    {
      title: "실시간 재고 동기화 시스템",
      period: "2023.10 - 2024.01",
      description: "멀티 채널 재고 정합성 확보",
      detail:
        "자사몰, 쿠팡, 네이버 스마트스토어 등 5개 채널의 재고가 각각 관리되어 과잉 판매가 빈번했습니다. CDC 기반 실시간 동기화 파이프라인을 구축하여 재고 불일치율을 12%에서 0.3%로 줄였습니다.",
      techStack: ["NestJS", "Debezium", "Kafka", "MongoDB"],
    },
    {
      title: "배치 처리 파이프라인 개선",
      period: "2022.06 - 2022.09",
      description: "야간 정산 배치의 안정성 확보",
      detail:
        "매일 새벽 실행되는 정산 배치가 데이터 증가로 타임아웃이 잦아졌습니다. 청크 단위 처리와 재시도 로직을 적용하고 모니터링을 추가하여, 처리 시간을 4시간에서 1.5시간으로 줄이고 실패율을 0%에 가깝게 만들었습니다.",
      techStack: ["Spring Batch", "PostgreSQL", "Grafana"],
    },
  ],

  education: [
    {
      institution: "OO대학교",
      degree: "컴퓨터공학과 학사",
      period: "2018.03 - 2022.02",
    },
    {
      institution: "정보처리기사",
      degree: "",
      period: "2022",
    },
  ],

  links: [
    { label: "github.com/gildong", url: "https://github.com/gildong" },
    { label: "blog.gildong.dev", url: "https://blog.gildong.dev" },
  ],
};
