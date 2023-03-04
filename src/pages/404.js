import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <h1>Cette page n'existe pas 😞</h1>
      <Link to="/">Retour à l'accueil</Link>.
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Page non trouvée</title>
