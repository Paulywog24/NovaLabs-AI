interface Dictionary {
  metadata: {
    title: string
    description: string
  }
}

const dictionaries: Record<string, Dictionary> = {
  en: {
    metadata: {
      title: "NovaLabs AI - Pioneering AI for a Better Future",
      description: "NovaLabs AI uses artificial intelligence to discover cures for human and veterinary diseases, enhance cybersecurity, and develop atmospheric energy conversion technology."
    }
  }
  // Add other languages as needed
}

export const getDictionary = (locale: string): Dictionary => {
  return dictionaries[locale] || dictionaries.en
}
