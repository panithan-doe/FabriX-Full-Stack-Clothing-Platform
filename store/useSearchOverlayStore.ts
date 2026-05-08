import { create } from 'zustand'

interface SearchOverlayState {
  isOpen: boolean
  activeGender: string
  toggleOverlay: () => void
  setIsOpen: (string: boolean) => void
  setActiveGender: (string: string) => void
}


export const useSearchOverlayStore = create<SearchOverlayState>((set) => ({
  isOpen: false,
  activeGender: 'women',
  toggleOverlay: () => set((state) => ({ 
    isOpen: !state.isOpen
  })),
  setIsOpen: (status) => set({ 
    isOpen: status
  }),
  setActiveGender: (gender) => set({ 
    activeGender: gender
  })
  
}))