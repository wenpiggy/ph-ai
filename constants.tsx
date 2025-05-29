import React from 'react'; // Required for JSX
import { Tutorial } from './types';

export const TUTORIAL_DATA: Tutorial[] = [
  {
    id: 'rule-of-thirds',
    title: '삼분할 법칙',
    description: '프레임을 아홉 개의 동일한 부분으로 나누고 주요 요소를 선이나 교차점에 배치하세요.',
    imageUrl: 'https://picsum.photos/seed/thirds/600/400',
    details: [
      "삼분할 법칙은 사진 및 시각 예술에서 가장 기본적인 원칙 중 하나입니다.",
      "이미지를 두 개의 수평선과 두 개의 수직선으로 아홉 등분했다고 상상해보세요. 중요한 구성 요소는 이 선들이나 교차점에 배치해야 합니다.",
      "이렇게 하면 단순히 피사체를 중앙에 두는 것보다 구도에 더 많은 긴장감, 에너지, 그리고 흥미를 유발할 수 있습니다."
    ]
  },
  {
    id: 'leading-lines',
    title: '유도선',
    description: '장면 속 자연스러운 선을 사용하여 보는 사람의 시선을 주요 피사체로 이끄세요.',
    imageUrl: 'https://picsum.photos/seed/lines/600/400',
    details: [
      "유도선은 보는 사람의 시선을 사진 전체, 종종 주요 피사체나 관심 지점으로 안내하는 시각적 요소입니다.",
      "길, 오솔길, 강, 울타리 또는 기타 선형 특징이 될 수 있습니다. 이미지에 깊이와 방향 감각을 더합니다.",
      "선이 프레임의 모서리나 가장자리 근처에서 시작하여 장면 안으로 이어지도록 배치해보세요."
    ]
  },
  {
    id: 'diagonal-lines',
    title: '대각선',
    description: '대각선을 활용하여 역동성, 깊이, 움직임을 만들어보세요.',
    imageUrl: 'https://picsum.photos/seed/diagonal/600/400',
    details: [
      "대각선은 수평선이나 수직선에 비해 사진을 더 역동적이고 에너지 넘치게 만들 수 있습니다.",
      "움직임, 깊이 또는 불안정성을 암시하여 구성에 흥미를 더할 수 있습니다.",
      "경사진 언덕, 기울어진 나무 또는 건축적 특징과 같은 장면의 자연적이거나 인공적인 대각선 요소를 찾아보세요."
    ]
  },
  {
    id: 'centered-composition',
    title: '중앙 집중 구도 및 대칭',
    description: '강력하고 대칭적이거나 직접적인 효과를 위해 주요 피사체를 중앙에 배치하세요.',
    imageUrl: 'https://picsum.photos/seed/centered/600/400',
    details: [
      "초보자에게는 종종 (삼분할 법칙을 선호하여) 권장되지 않지만, 중앙 집중 구도는 특히 대칭적인 피사체나 직접적이고 강력한 표현을 목표로 할 때 매우 효과적일 수 있습니다.",
      "이미지의 한쪽 절반이 다른 쪽 절반을 반영하는 대칭은 종종 중앙 집중 접근 방식의 이점을 얻습니다. 균형감, 조화, 질서감을 만들 수 있습니다.",
      "인물 사진, 건축 사진 또는 반사 사진에 이 구도를 고려해보세요."
    ]
  },
  {
    id: 'frame-within-frame',
    title: '프레임 속 프레임',
    description: '장면 속 요소를 사용하여 주요 피사체 주위에 자연스러운 프레임을 만드세요.',
    imageUrl: 'https://picsum.photos/seed/frame/600/400',
    details: [
      "이 기법은 장면 내의 요소를 사용하여 피사체 주위에 테두리나 프레임을 형성하는 것을 포함합니다. 예를 들어 출입구, 창문, 아치형 통로 또는 늘어진 나뭇가지 등이 있습니다.",
      "프레이밍은 이미지에 깊이를 더하고 피사체를 분리하며 보는 사람의 주의를 그곳으로 이끕니다.",
      "'내부 프레임'이 피사체를 보완하고 주의를 산만하게 하지 않도록 하세요."
    ]
  },
  {
    id: 'negative-space',
    title: '여백 활용',
    description: '피사체 주변의 빈 공간을 활용하여 피사체를 강조하고 깔끔하고 인상적인 구도를 만드세요.',
    imageUrl: 'https://picsum.photos/seed/negative/600/400',
    details: [
      "여백(또는 네거티브 스페이스)은 사진에서 주요 피사체를 둘러싸는 영역입니다. 이미지의 '비어 있는' 부분입니다.",
      "여백을 효과적으로 사용하면 피사체가 돋보이게 하고, 규모감을 만들고, (고립감이나 평화로움과 같은) 감정을 불러일으키며, 더 깔끔하고 덜 복잡한 구도를 만들 수 있습니다.",
      "빈 공간을 두려워하지 마세요. 강력한 구성 도구가 될 수 있습니다."
    ]
  },
];

export const HomeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h7.5" />
  </svg>
);

export const CameraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
  </svg>
);

export const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
  </svg>
);

export const LightbulbIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.355a15.07 15.07 0 0 1-4.5 0m4.5 0V21m-4.5 0V19.5m0 0A6.012 6.012 0 0 1 9.25 13.5a6.012 6.012 0 0 1 5.5 0m-5.5 0a6.012 6.012 0 0 0-1.5-.189m1.5.189a6.012 6.012 0 0 0 1.5-.189m3.75-3.161V4.5A2.25 2.25 0 0 0 10.5 2.25h-3A2.25 2.25 0 0 0 5.25 4.5v.75m0 0A2.25 2.25 0 0 0 3 7.5v1.5M5.25 5.25m0 0A2.25 2.25 0 0 1 3 3m0 0V1.5M3 3h.008v.008H3V3zm0 0S2.25 3.75 2.25 4.5M3 3S3.75 2.25 4.5 2.25m0 0V1.5m0 .75A2.25 2.25 0 0 1 6.75 3m0 0h.008v.008H6.75V3zm0 0S7.5 2.25 8.25 2.25M6.75 3S6 3.75 6 4.5m1.5-1.5A2.25 2.25 0 0 1 9.75 3m0 0h.008v.008H9.75V3zm0 0S10.5 2.25 11.25 2.25m-1.5.75A2.25 2.25 0 0 0 8.25 6m0 0v1.5m0 0A2.25 2.25 0 0 0 6 9.75M8.25 7.5S9 6.75 9.75 6.75m0 0A2.25 2.25 0 0 1 12 4.5m0 0V2.25m.75.75A2.25 2.25 0 0 0 15 4.5v.75m0 0A2.25 2.25 0 0 0 17.25 7.5v1.5m0 0A2.25 2.25 0 0 0 15 11.25m-2.25-1.5a2.25 2.25 0 0 0-2.25-2.25M15 9.75S14.25 9 13.5 9m0 0A2.25 2.25 0 0 0 11.25 6.75M13.5 9S12.75 9.75 12.75 10.5m0 0V12m0 0A2.25 2.25 0 0 1 10.5 14.25m2.25-2.25a2.25 2.25 0 0 0 2.25-2.25M12.75 12S13.5 11.25 14.25 11.25m0 0A2.25 2.25 0 0 1 16.5 9m0 0V7.5m-.75.75A2.25 2.25 0 0 0 13.5 6m0 0V4.5M13.5 6S12.75 5.25 12 5.25m0 0V3.75M12 5.25S11.25 6 11.25 6.75M12 5.25S12.75 6 12.75 6.75m-.5 3A2.25 2.25 0 0 1 10.5 12m0 0V14.25m1.75-2.25a2.25 2.25 0 0 0 1.75 2.25M12.25 12S12.75 12.75 13.5 12.75m0 0A2.25 2.25 0 0 1 15.75 15m0 0V17.25m.75-.75A2.25 2.25 0 0 0 18 15.75M16.5 15S15.75 14.25 15 14.25m0 0A2.25 2.25 0 0 0 12.75 12m-1.5 1.5A2.25 2.25 0 0 1 9 12.75M9 12.75S8.25 12 7.5 12m0 0A2.25 2.25 0 0 0 5.25 9.75M7.5 12S6.75 11.25 6 11.25M6 11.25S5.25 10.5 5.25 9.75M6 11.25S6.75 12 7.5 12m0 0A2.25 2.25 0 0 1 9.75 14.25M7.5 12S8.25 12.75 9 12.75m2.25-3a2.25 2.25 0 0 1 2.25-2.25m0 0A2.25 2.25 0 0 0 15.75 6m-2.25 1.5A2.25 2.25 0 0 1 11.25 6m0 0V4.5m0 1.5S10.5 5.25 9.75 5.25M11.25 6S12 5.25 12.75 5.25m0 0A2.25 2.25 0 0 1 15 3m0 0V1.5" />
</svg>
);

export const HistoryIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
  </svg>
);

export const AnalyzeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const TrashIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-5 h-5"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.56 0c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
  </svg>
);

export const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const ExclamationCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-6 h-6"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.25 7.5l.813 2.846a4.5 4.5 0 0 1 2.087 2.087L24 12.75l-2.846.813a4.5 4.5 0 0 1-2.087 2.087L18.25 18.75l-.813-2.846a4.5 4.5 0 0 1-2.087-2.087L12.5 12.75l2.846-.813a4.5 4.5 0 0 1 2.087-2.087L18.25 7.5Z" />
  </svg>
);