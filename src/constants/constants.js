export const sidebarItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: "/ViewGridOutline.svg",
  },
  {
    id: 2,
    name: "Learn",
    icon: "/LightBulbOutline.svg",
  },
  {
    id: 3,
    name: "Forums",
    icon: "/UserGroupOutline.svg",
  },
  {
    id: 4,
    name: "Upskill",
    icon: "/ClipboardOutline.svg",
  },
  {
    id: 5,
    name: "Contest",
    icon: "/ChartBarOutline.svg",
  },
  {
    id: 6,
    name: "Leaderboard",
    icon: "/StarOutline.svg",
  },
];

export const childList = [
  [
    {
      id: 1,
      name: "Video 1",
      icon: "/PlayOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
    {
      id: 2,
      name: "Article 1",
      icon: "/QuestionMarkCircleOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
    {
      id: 3,
      name: "Quiz 1",
      icon: "/QuestionMarkCircleOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
    {
      id: 4,
      name: "Coding Exercise 1",
      icon: "/CodeOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
    {
      id: 5,
      name: "Combined Resource 1",
      icon: "/DocumentDuplicateOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
  ],
  [
    {
      id: 1,
      name: "Video 2",
      icon: "/PlayOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
    {
      id: 2,
      name: "Article 2",
      icon: "/QuestionMarkCircleOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
    {
      id: 3,
      name: "Quiz 2",
      icon: "/QuestionMarkCircleOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
    {
      id: 4,
      name: "Coding Exercise 2",
      icon: "/CodeOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
    {
      id: 5,
      name: "Combined Resource 2",
      icon: "/DocumentDuplicateOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
  ],
  [
    {
      id: 1,
      name: "Video 3",
      icon: "/PlayOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
    {
      id: 2,
      name: "Article 3",
      icon: "/QuestionMarkCircleOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
    {
      id: 3,
      name: "Quiz 3",
      icon: "/QuestionMarkCircleOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
    {
      id: 4,
      name: "Coding Exercise 3",
      icon: "/CodeOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
    {
      id: 5,
      name: "Combined Resource 3",
      icon: "/DocumentDuplicateOutline.svg",
      icon2: "/ClockOutline.svg",
      time: "10:00",
    },
  ]
];

export const cardsList = (childList) => {
  let cnt = 1;
  const cards = [
    {
      part: `PART ${cnt}`,
      description: "LOREM IPSUM DOLOR SIT AMET",
      time: "02:00:00",
      difficulty: "Medium",
      subTasks: childList[cnt++ - 1].length,
      progress: 75,
      progressColor: "bg-blue-500",
    },
    {
      part: `PART ${cnt}`,
      description: "LOREM IPSUM DOLOR SIT AMET",
      time: "02:00:00",
      difficulty: "Medium",
      subTasks: childList[cnt++ - 1].length,
      progress: 45,
      progressColor: "bg-green-500",
    },
    
    {
      part: `PART ${cnt}`,
      description: "LOREM IPSUM DOLOR SIT AMET",
      time: "02:00:00",
      difficulty: "Medium",
      subTasks: childList[cnt++ - 1].length,
      progress: 90,
      progressColor: "bg-purple-500",
    },
    
  ];
    cnt--
  return [cards,cnt];
};



export const chapters = [
    {
      id: 1,
      name: "Chapter 1",
    },
    {
      id: 2,
      name: "Chapter 2",
    },
    {
      id: 3,
      name: "Chapter 3",
    },
    {
      id: 4,
      name: "Chapter 4",
    },
    {
      id: 5,
      name: "Chapter 5",
    }
  ];