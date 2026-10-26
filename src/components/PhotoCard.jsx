
export default function PhotoCard({ photo, isFavourite, onToggleFavourite }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="aspect-4/3 overflow-hidden bg-zinc-100">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      <div className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">
            Photographer
          </p>
          <h2 className="mt-1 truncate font-semibold text-zinc-800">
            {photo.author}
          </h2>
        </div>

        <button
          type="button"
          onClick={() => onToggleFavourite(photo.id)}
          aria-label={
            isFavourite
              ? `Remove photo by ${photo.author} from favourites`
              : `Add photo by ${photo.author} to favourites`
          }
          aria-pressed={isFavourite}
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-2xl transition focus:outline-none focus:ring-2 focus:ring-pink-400 ${
            isFavourite
              ? 'border-pink-200 bg-pink-50 text-pink-600'
              : 'border-zinc-200 bg-white text-zinc-400 hover:border-pink-200 hover:text-pink-500'
          }`}
        >
          {isFavourite ? '♥' : '♡'}
        </button>
      </div>
    </article>
  )
}
