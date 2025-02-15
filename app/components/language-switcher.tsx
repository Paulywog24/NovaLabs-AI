"use client"
import * as React from "react"
import { Languages } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

interface Language {
  code: string
  name: string
  nativeName: string
  flag: string
}

const languages: Language[] = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸"
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸"
  },
  {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "🇨🇳"
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    flag: "🇮🇳"
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇸🇦"
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷"
  }
]

function LanguageSwitcherContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [currentLang, setCurrentLang] = React.useState(() => {
    const langParam = searchParams.get("lang")
    return langParam && languages.some(lang => lang.code === langParam)
      ? langParam
      : "en"
  })

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value
    setCurrentLang(newLang)
    document.documentElement.lang = newLang
    
    const params = new URLSearchParams(searchParams.toString())
    params.set("lang", newLang)
    router.push(`?${params.toString()}`, { scroll: false })
  }

  React.useEffect(() => {
    document.documentElement.lang = currentLang
  }, [currentLang])

  return (
    <div className="flex items-center space-x-2">
      <Languages className="h-4 w-4" />
      <select
        value={currentLang}
        onChange={handleLanguageChange}
        className="bg-transparent border-none focus:ring-0 text-sm"
        aria-label="Select language"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {`${lang.flag} ${lang.nativeName}`}
          </option>
        ))}
      </select>
    </div>
  )
}

export function LanguageSwitcher() {
  return (
    <React.Suspense fallback={<div className="h-4 w-4" />}>
      <LanguageSwitcherContent />
    </React.Suspense>
  )
}
