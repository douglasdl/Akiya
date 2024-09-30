import { languages, words } from "../utils/dictionary";

interface HeaderProps {
  currentLanguage: languages
}

export function Header({currentLanguage}: HeaderProps) {
  return (
    <header className="flex items-center justify-center bg-green-800 dark:bg-green-950 text-white w-full p-4">
      <h1>{words.akiyaBank[currentLanguage]}</h1>
    </header>
  )
}