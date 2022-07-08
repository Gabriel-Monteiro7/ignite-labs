import { useEffect, useState } from 'react'

type responsiveVariantsType = {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
}

export const responsiveVariants: responsiveVariantsType = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
}

type QueryType = keyof responsiveVariantsType

function useMediaQuery(_query: QueryType = 'sm'): boolean {
  const query = responsiveVariants[_query]

  const queryFormatted = `(min-width: ${query})`

  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(queryFormatted))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(queryFormatted)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches
}

export default useMediaQuery
