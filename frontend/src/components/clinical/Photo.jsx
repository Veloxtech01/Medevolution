// Image tile used across the homepage. Wraps the <img> in the template's
// `.imgbox` gradient container and hides the image if the remote file fails
// to load, so the gradient placeholder shows instead of a broken-image icon
// (the template did this with an inline onerror handler).
// Props: src, alt, className (extra classes on the box), style (box style).
function Photo({ src, alt, className = '', style }) {
  return (
    <div className={`imgbox ${className}`.trim()} style={style}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
    </div>
  )
}

export default Photo
