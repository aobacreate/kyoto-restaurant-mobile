export type MenuItem = {
  id: string;
  title: string;
  price: number;
  imageSrc: string;
};

export type DrinkMenuItem = {
  id: string;
  title: string;
  price: number;
};


export const lunchItems: MenuItem[] = [
  { id: "l1", title: "寿司ランチ", price: 1500, imageSrc: "/images/lunch/sushi.jpg" },
  { id: "l2", title: "ウナギ御膳", price: 1500, imageSrc: "/images/lunch/unagi.jpg" },
  { id: "l3", title: "そば定食", price: 1500, imageSrc: "/images/lunch/soba.jpg" },
  { id: "l4", title: "天丼", price: 1500, imageSrc: "/images/lunch/tendon.jpg" },
];

export const dinnerItems: MenuItem[] = [
  { id: "d1", title: "寿司御膳", price: 4000, imageSrc: "/images/dinner/sushi.jpg" },
  { id: "d2", title: "刺身定食", price: 3000, imageSrc: "/images/dinner/sashimi.jpg" },
  { id: "d3", title: "天ぷら定食", price: 3000, imageSrc: "/images/dinner/tempura.jpg" },
  { id: "d4", title: "海鮮丼", price: 1500, imageSrc: "/images/dinner/kaisen.jpg" },
  { id: "d5", title: "サーモン丼", price: 1500, imageSrc: "/images/dinner/salmon.jpg" },
  { id: "d6", title: "寿司ロール", price: 1500, imageSrc: "/images/dinner/roll.jpg" },
];

export const drinkItems: DrinkMenuItem[] = [
  { id: "dr1", title: "日本酒（冷・燗）", price: 700 },
  { id: "dr2", title: "純米酒（京都伏見）", price: 800 },
  { id: "dr3", title: "焼酎（芋・麦）", price: 650 },
  { id: "dr4", title: "瓶ビール", price: 700 },
  { id: "dr5", title: "ウーロン茶", price: 400 },
  { id: "dr6", title: "緑茶", price: 400 },
  { id: "dr7", title: "オレンジジュース", price: 450 },
  { id: "dr8", title: "ノンアルコールビール", price: 500 },
];
