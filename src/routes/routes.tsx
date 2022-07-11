import Home from '~/pages/Home'
import Event from '~/pages/Event'

interface Route {
  id: number
  url: string
  path: string
  exact?: boolean
  element: React.ReactNode
  index?: boolean
}

export const HomeRoute: Route = {
  id: 1,
  exact: true,
  path: '/',
  url: '/',
  element: <Home />
}

export const EventRoute: Route = {
  id: 2,
  path: '/event/*',
  url: '/event',
  element: <Event />
}

export const EventLessonRoute: Route = {
  id: 3,
  path: '/event/lesson/:slug',
  url: '/event/lesson',
  element: <Event />
}

export const routes: Route[] = [HomeRoute, EventRoute, EventLessonRoute]
