export interface AkiyaProps {
  floorPlan: string | null | undefined;
  price: number | bigint;
  city: string | null | undefined;
  prefecture: string | null | undefined;
  mainImage: string | undefined;
  landArea: number | null | undefined;
  buildArea: number | null | undefined;
  built: number | null | undefined;
  vacantSince: number | null | undefined;
  garages: number | null | undefined;
  rooms: number | null | undefined;
}

export function Akiya(props:AkiyaProps) {

  const japaneseIene = Intl.NumberFormat("ja", {
    style: "currency",
    currency: "JPY",
  });

  const brazilianReal = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const BRLprice = Number(props.price) * 0.03975;
 
  return (
    <div className="flex items-center justify-center flex-col bg-white p-4 m-4 rounded shadow-md">
      <header className='flex items-center justify-between w-4/5'>
        <div>
          <h1>{props.floorPlan}</h1>
          <h2>{japaneseIene.format(props.price)}</h2>
          <div>{brazilianReal.format(BRLprice)}</div>
        </div>
        <div>
          <h2>{props.city}</h2>
          <h3>{props.prefecture}</h3>
        </div>
      </header>
      <img 
        className="w-full md:w-80 rounded-lg hover:brightness-75 hover:border-2 hover:border-black"
        src={props.mainImage}
      />
      <div className="flex items-center justify-center flex-row m-2 gap-2">
        <div className="bg-orange-300 text-white rounded-2xl py-1 px-4">Venda</div>
        <div className="bg-orange-400 text-white rounded-2xl py-1 px-4">Área de Migração</div>
        <div className="bg-lime-300 text-white rounded-2xl py-1 px-4 hidden invisible">Aluguel</div>
      </div>
      <div className="flex flex-col w-full gap-2 p-1">
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-1 items-center justify-center self-center border border-gray-100 my-1 mx-2 p-1 rounded w-1/2 text-xl"><strong>Terreno:&nbsp;</strong>{props.landArea}m²</div>
          <div className="flex flex-1 items-center justify-center self-center border border-gray-100 my-1 mx-2 p-1 rounded w-1/2 text-xl"><strong>Const.:&nbsp;</strong>{props.buildArea}m²</div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-1 items-center justify-center self-center border border-gray-100 my-1 mx-2 p-1 rounded w-1/2 text-xl" title="Ano de Construção">🏠: {props.built}</div>
          <div className="flex flex-1 items-center justify-center self-center border border-gray-100 my-1 mx-2 p-1 rounded w-1/2 text-xl" title="Casa Vaga desde...">🏚️: {props.vacantSince}</div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-1 items-center justify-center self-center border border-gray-100 my-1 mx-2 p-1 rounded w-1/2 text-xl"><strong>Vagas:&nbsp;</strong> {props.garages}&nbsp;🚗</div>
          <div className="flex flex-1 items-center justify-center self-center border border-gray-100 my-1 mx-2 p-1 rounded w-1/2 text-xl"><strong>Quartos:&nbsp;</strong> {props.rooms}</div>
        </div>
      </div>
    </div>
  )
}