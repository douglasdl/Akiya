import { languages, words } from "../utils/dictionary"

interface TagsProps {
  isSelling?: boolean
  isRenting?: boolean
  reltalPrice?: number
  isMigrationArea?: boolean
  currentLanguage: languages
}

export function Tags({ isSelling, isMigrationArea, isRenting, currentLanguage }: TagsProps) {
  return (
    <div className="flex items-center justify-center flex-row m-2 gap-2">
      {isSelling && <div className="bg-orange-300 dark:bg-orange-700 text-white rounded-2xl py-1 px-4">{words.sale[currentLanguage]}</div> }
      {isMigrationArea && <div className="bg-orange-400 dark:bg-orange-800 text-white rounded-2xl py-1 px-4">{words.migrationArea[currentLanguage]}</div> }
      {isRenting && <div className="bg-lime-300 dark:bg-lime-700 text-white rounded-2xl py-1 px-4 hidden invisible">{words.rental[currentLanguage]}</div> }
    </div>
  )
}