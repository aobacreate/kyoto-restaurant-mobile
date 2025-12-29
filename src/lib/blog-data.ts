// src/data/blog-data.ts

export type BlogItem = {
  id: string
  title: string
  date: string
  description: string
  imageSrc: string
}

export const blogItems: BlogItem[] = [
  {
    id: "blog-20251201",
    title: "秋の紅葉が見頃を迎えました。",
    date: "2025/12/01",
    description:
      "京都の町も、少しずつ秋の色に染まってきました。\nやわらかな陽射し、澄んだ空気の中で、季節の移ろいを感じていただける旬の献立をご用意しております。",
    imageSrc: "/images/blog/fall.webp",
  },
  {
    id: "blog-20250801",
    title: "夏の京料理",
    date: "2025/08/01",
    description:
      "暑さが本格的になる京都の夏。\n旬の素材を涼やかに仕立て、身体にやさしく滋養を感じていただける料理をご用意しております。",
    imageSrc: "/images/blog/summer.webp",
  },
  {
    id: "blog-20250401",
    title: "春のお茶会を開催します。",
    date: "2025/04/01",
    description:
      "毎年恒例となりました春のお茶会を、今年も開催する運びとなりました。\n桜の咲く頃、ゆったりとした時間の中で季節を味わっていただければと思います。",
    imageSrc: "/images/blog/spring.webp",
  },
]
