import Loader from '~/components/Loader'

export default function Loading() {
  return (
    <Loader width="100%" height="300">
      <rect x="0" y="24" rx="8" ry="8" width="260" height="20" />

      <rect x="0" y="60" rx="8" ry="8" width="100%" height="90" />

      <rect x="0" y="174" rx="8" ry="8" width="260" height="20" />

      <rect x="0" y="210" rx="8" ry="8" width="100%" height="90" />
    </Loader>
  )
}
