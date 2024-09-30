import { languages } from "../utils/dictionary"

interface AkiyaHeaderProps {
  floorPlan: string
  price: number
  city: string
  prefecture: string
  currentLanguage: languages
}

export function AkiyaHeader({ floorPlan, price, city, prefecture, currentLanguage }: AkiyaHeaderProps) {
  const japaneseIene = Intl.NumberFormat("ja", {
    style: "currency",
    currency: "JPY",
  });

  const brazilianReal = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const BRLprice = Number(price) * 0.038;

  return (
    <header className='flex items-center justify-between w-4/5'>
      <div>
        <h1>{floorPlan}</h1>
        <h2>{japaneseIene.format(price)}</h2>
        <div>{brazilianReal.format(BRLprice)}</div>
      </div>
      <div>
        <h2>{city[currentLanguage]}</h2>
        <h3>{prefecture[currentLanguage]}</h3>
      </div>
    </header>
  )
}