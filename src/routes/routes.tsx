import { Navigate } from 'react-router-dom'

import Subscribe from '~/pages/Subscribe'
import Event from '~/pages/Event'

interface Route {
  id: number
  url: string
  path: string
  exact?: boolean
  element: React.ReactNode
  index?: boolean
}

export const NotFoundRoute: Route = {
  id: 1,
  path: '*',
  url: '*',
  element: <Navigate to="/" replace />
}

export const HomeRoute: Route = {
  id: 2,
  exact: true,
  path: '/',
  url: '/',
  element: <Subscribe />
}

export const EventRoute: Route = {
  id: 3,
  path: '/event/*',
  url: '/event',
  element: <Event />
}

export const EventLessonRoute: Route = {
  id: 4,
  path: '/event/lesson/:slug',
  url: '/event/lesson',
  element: <Event />
}

export const routes: Route[] = [
  NotFoundRoute,
  HomeRoute,
  EventRoute,
  EventLessonRoute
]
