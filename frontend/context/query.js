export const PRODUCT_QUERY = `
query {
  products {
    data{
      attributes{
        name
        content
        price
        slug
        image{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}
`