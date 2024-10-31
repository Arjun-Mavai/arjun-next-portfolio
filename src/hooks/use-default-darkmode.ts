"use client"

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

export const useDefaultDarkMode = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      const isMobile = window.matchMedia('(max-width: 768px)').matches
      if (isMobile) {
        setTheme('dark')
      }
    }
  }, [isMounted, setTheme])
}