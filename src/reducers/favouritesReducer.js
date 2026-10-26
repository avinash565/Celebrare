const STORAGE_KEY = 'celebrare-favourites'

export function loadFavourites() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)

    if (!saved) return []

    const parsed = JSON.parse(saved)

    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export function favouritesReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_FAVOURITE': {
      const id = action.payload

      if (state.includes(id)) {
        return state.filter((favouriteId) => favouriteId !== id)
      }

      return [...state, id]
    }

    default:
      return state
  }
}

export function saveFavourites(favourites) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites))
  } catch (error) {
    console.error('Could not save favourites:', error)
  }
}
