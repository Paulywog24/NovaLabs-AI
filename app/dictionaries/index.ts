interface Dictionary {
  metadata: {
    title: string
    description: string
  }
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  return dictionaries[locale || 'en']?.() ?? dictionaries.en()
}
