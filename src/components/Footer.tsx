// src/app/components/Footer.tsx
import Image from "next/image";

type FooterProps = {
  showMap?: boolean; // 地図が入らない場合は false
  logoSrc?: string;
  mapSrc?: string; // jpeg
};

export default function Footer({
  showMap = true,
  logoSrc = "/images/logo.jpg",
  mapSrc = "/images/map.jpg",
}: FooterProps) {
  return (
    <footer className="w-full py-10 flex flex-col justify-start items-center gap-7 bg-[var(--color-header-bg)]">
      {/* ロゴ */}
      <Image
        src={logoSrc}
        alt="京都や ロゴ"
        width={72}
        height={72}
        className="object-contain"
      />

      {/* 地図（任意） */}
      {showMap && (
        <div className="bg-white rounded-[10px] overflow-hidden">
          <Image
            src={mapSrc}
            alt="アクセス地図"
            width={332}
            height={242}
            className="object-contain"
          />
        </div>
      )}

      {/* 連絡先（先に固まりを作ってから footer 全体でflex） */}
      <ContactBlock
        address="〒150-6006 京都府左京区東本願寺前1-1-10"
        tel="012-3456-7890"
        email="kyoto-ya@mail.com"
      />
    </footer>
  );
}

type ContactBlockProps = {
  address: string;
  tel: string;
  email: string;
};

function ContactBlock({ address, tel, email }: ContactBlockProps) {
  return (
    <div className="w-80 p-4 bg-white rounded-[10px] flex flex-col items-start gap-5">
      {/* 住所 */}
      <div className="w-full flex items-center gap-3">
        <div className="w-5 h-5 shrink-0 relative">
          <Image
            src="/images/icon-address.png"
            alt=""
            width={20}
            height={20}
            aria-hidden
          />
        </div>

        <p className="text-xs font-bold tracking-wide">
          {address}
        </p>
      </div>

      {/* 電話 */}
      <div className="w-full flex items-center gap-3">
        <div className="w-5 h-5 shrink-0 relative">
          <Image
            src="/images/icon-tel.png"
            alt=""
            width={20}
            height={20}
            aria-hidden
          />
        </div>
        <p className="text-xs font-bold">
          {tel}
        </p>
      </div>

      {/* メール */}
      <div className="w-full flex items-center gap-3">
        <div className="w-5 h-5 shrink-0 relative">
          <Image
            src="/images/icon-mail.png"
            alt=""
            width={20}
            height={20}
            aria-hidden
          />
        </div>
        <p className="text-xs font-bold">
          {email}
        </p>
      </div>
    </div>
  );
}
