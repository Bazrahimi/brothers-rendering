export const PRIMARY_LANGUAGE = {
  key: "EN",
  statement: (orgName: string) => [
    `${orgName} honours the multicultural spirit of Australia, where we all live and work. We see multiculturalism as a strength and proudly support clients from diverse backgrounds.`,
    `We can communicate with clients in their preferred language, especially for those who may have limited English due to recent resettlement in Australia as they build their new life and become part of Australian society.`,
  ],
} as const;

export const OTHER_LANGUAGES = {
  HZ: {
    label: { HZ: "هزارگی", EN: "Hazaragi" },
    statement: (orgName: string) => [
      `شرکت ${orgName} به روح چندفرهنگی آسترالیا که همه‌گی ما دَ ای کشور زندگی و کار مُوکونیم، احترام قایل است. ما چندفرهنگی ره یک قوت می‌دانیم و از مردم با پیشینه‌های مختلف صادقانه حمایت مُوکونیم.`,
      `ما توانایی ای ره داریم که با مشتریا دَ زبان دلخواه‌شان گپ بزنیم، مخصوصاً کسایی که تازه به آسترالیا آمده‌ان و ممکن است دَ زبان انگلیسی محدودیت داشته باشن.`,
      `هدف مه ای است که هر کس احساس راحتی و احترام بکنه و دَ ساختن زندگی نوی خود دَ آسترالیا کامیاب باشه.`,
    ],
  },

  FA: {
    label: { FA: "فارسی", EN: "Persian (Farsi)" },
    statement: (orgName: string) => [
      `شرکت ${orgName} به روح چندفرهنگی استرالیا که همه ما در آن زندگی و کار می‌کنیم احترام می‌گذارد. ما چندفرهنگی بودن را یک نقطه قوت می‌دانیم و با افتخار از مشتریان با پیشینه‌های گوناگون حمایت می‌کنیم.`,
      `ما توانایی ارتباط با مشتریان به زبان مورد نظرشان را داریم، به‌ویژه افرادی که به دلیل اسکان اخیر در استرالیا ممکن است در زبان انگلیسی محدودیت داشته باشند.`,
      `هدف ما این است که هر فرد احساس احترام، امنیت و اطمینان داشته باشد و بتواند زندگی جدید خود را با آرامش آغاز کند.`,
    ],
  },
} as const;

export type OtherLanguageKey = keyof typeof OTHER_LANGUAGES;

