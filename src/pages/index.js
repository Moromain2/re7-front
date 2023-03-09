import * as React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allStrapiHomePage {
      edges {
        node {
          hero_title
        }
      }
    }
    allStrapiRecipe {
      edges {
        node {
          id
          recipe_title
          ingredient {
            id
            ingredient
            quantity
            unit
          }
          intro {
            data {
              internal {
                content
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const homePageContent = data.allStrapiHomePage.edges[0].node
  const recipesData = data.allStrapiRecipe.edges
  console.log(recipesData)
  return (
    <main>
      <h1>{homePageContent.hero_title}</h1>
      {recipesData.map((recipe) => (
        <div key={recipe.node.id}>
            <h1>{recipe.node.recipe_title}</h1>
            <h2>Ingrédients :</h2>
            <ul>
              {recipe.node.ingredient.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.quantity} {ingredient.unit} de {ingredient.ingredient}</li>
              ))}
            </ul>
            <p>{recipe.node.intro.data.internal.content.slice(0, 250)}...</p>
        </div>
      ))}
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Recipe App</title>
