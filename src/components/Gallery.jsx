import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import useFetchPhotos from '../hooks/useFetchPhotos'
import PhotoCard from './PhotoCard'
import { favouritesReducer, loadFavourites, saveFavourites} from '../reducers/favouritesReducer'

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos()

  const [search, setSearch] = useState('')
  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    undefined,
    loadFavourites
  )

  // Save favourites whenever the list changes.
  useEffect(() => {
    saveFavourites(favourites)
  }, [favourites])

  // useCallback keeps the search handler stable between renders.
  const handleSearch = useCallback((event) => {
    setSearch(event.target.value)
  }, [])

  const toggleFavourite = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_FAVOURITE',
      payload: id,
    })
  }, [])

  // useMemo recalculates the filtered list only when
  // the photos or search text changes.
  const filteredPhotos = useMemo(() => {
    const query = search.trim().toLowerCase()

    if (!query) return photos

    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(query)
    )
  }, [photos, search])

  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="border-b border-zinc-200 bg-white sticky top-0 z-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              Celebrare
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Photo Gallery
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Discover photos and save your favourites.
            </p>
          </div>

          <div className="w-full md:max-w-sm">
            <label
              htmlFor="author-search"
              className="mb-2 block text-sm font-medium text-zinc-700"
            >
              Search by author
            </label>

            <input
              id="author-search"
              type="search"
              placeholder="Enter an author's name"
              value={search}
              onChange={handleSearch}
              className="w-full rounded-xl border border-zinc-300 bg-zinc-50 px-4 py-3 outline-none transition placeholder:text-zinc-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-semibold text-zinc-800">
            All Photos
          </h2>

          <p className="text-sm text-zinc-500">
            {loading
              ? 'Loading photos...'
              : `${filteredPhotos.length} photos`}
            {' · '}
            ♥ {favourites.length} favourites
          </p>
        </div>

        {loading && (
          <div
            className="flex min-h-60 flex-col items-center justify-center gap-4"
            role="status"
          >
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600" />
            <p className="text-sm text-zinc-500">Loading your photos...</p>
          </div>
        )}

        {!loading && error && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 p-5 text-red-700"
          >
            <p className="font-semibold">Unable to load photos</p>
            <p className="mt-1 text-sm">{error}</p>
          </div>
        )}

        {!loading && !error && filteredPhotos.length === 0 && (
          <div className="rounded-xl border border-dashed border-zinc-300 bg-white px-5 py-16 text-center">
            <p className="text-lg font-semibold text-zinc-800">
              No photos found
            </p>
            <p className="mt-2 text-sm text-zinc-500">
              Try searching with a different author name.
            </p>
          </div>
        )}

        {!loading && !error && filteredPhotos.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                isFavourite={favourites.includes(photo.id)}
                onToggleFavourite={toggleFavourite}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
