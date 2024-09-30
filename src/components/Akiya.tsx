import { languages } from "../utils/dictionary";
import { parseFloorPlan } from "../utils/getRooms";
import { AkiyaHeader } from "./AkiyaHeader";
import { Feature } from "./Feature";
import { Tags } from "./Tags";

export interface AkiyaProps {
  id?: string         // Assuming id is a string (UUID)
  floorPlan: string
  isSelling?: boolean
  salePrice: number
  isRenting?: boolean
  rentalPrice?: number
  isMigrationArea?: boolean
  city: string
  prefecture: string
  address?: string
  map?: string
  mainImage: string
  floorPlanImage?: string
  images?: string[]
  videos?: string[]
  landArea: number
  buildArea: number
  buildYear: Date
  vacantSince: Date
  garages: number
  url?: string
  sellerId?: string
  currentLanguage: languages
}

export function Akiya({ floorPlan, isSelling = false, salePrice, isRenting = false, rentalPrice = 0, isMigrationArea, city, prefecture, address = "", map = "",
  mainImage, floorPlanImage = "", images = [""], videos = [""], landArea, buildArea, buildYear, vacantSince, garages, url = "", sellerId = "", currentLanguage }: AkiyaProps) {

  const { rooms, dining, kitchen, livingRoom } = parseFloorPlan(floorPlan)

  console.log(rooms, livingRoom, dining, kitchen );
  
  console.log(rentalPrice, address, map, floorPlanImage, images[0], videos[0], url, sellerId)

  return (
    <div className="flex items-center justify-center flex-col bg-white dark:bg-black p-4 m-4 rounded shadow-md">
      <AkiyaHeader 
        floorPlan={floorPlan} 
        price={salePrice} 
        city={city} 
        prefecture={prefecture}
        currentLanguage={currentLanguage}
      />
      <img 
        className="w-full md:w-80 md:h-60 rounded-lg hover:brightness-75 hover:border-2 hover:border-black object-cover"
        src={mainImage}
      />
      <Tags 
        isSelling={isSelling}
        isRenting={isRenting}
        isMigrationArea={isMigrationArea}
        currentLanguage={currentLanguage}
      />
      <div className="flex items-center justify-start flex-wrap w-full">
        <Feature icon="land-area" value={landArea} currentLanguage={currentLanguage} />
        <Feature icon="build-area" value={buildArea} currentLanguage={currentLanguage} />
        <Feature icon="built" value={buildYear} currentLanguage={currentLanguage} />
        <Feature icon="vacant" value={vacantSince} currentLanguage={currentLanguage} />
        <Feature icon="garage" value={garages} currentLanguage={currentLanguage} />
        <Feature icon="rooms" value={rooms} currentLanguage={currentLanguage} />
      </div>
    </div>
  )
}