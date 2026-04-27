import React from 'react'
import { useRouteError } from 'react-router-dom'
export default function ErrorPage() {
    const error = useRouteError()
  return (
    <div>ErrorPage
        <p>Something went wrong</p>
        <p>{error?.message}</p>
    </div>
  )
}
