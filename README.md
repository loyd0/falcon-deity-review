# Product Review Component, API and Extension for Falcon Deity

This package contains the necessary client and server packages to implement a product review component that pulls data from https://jsonplaceholder.typicode.com/comments. 

## Included

- `falcon-product-review` - this is the client side package, contains accordion component, product review component and 



## Steps to Run
### General
1. Make sure you have `npx` installed from `npm`
2. Create a fresh install of falcon-deity `npx create-falcon-app my-app`
3. Clone this repo into the base directory or unpack zipped files

### Add Client & Server side Packages
1. Copy `falcon-product-review` to client `/src/`
    1. Navigate to `client/src/pages/shop/Product.js`
    2. Import `{ ProductReview }` from `'../../falcon-product-review'` & replace code with 
        ```js
            // Replace 
            const ProductPage = ({ id, location }) => (
                <ProductQuery variables={{ id, path: location.pathname }}>
                    {productProps => <Product {...productProps} />}
                </ProductQuery>
            );

            // With 
            const ProductPage = ({ id, location }) => (
                <>
                    <ProductQuery variables={{ id, path: location.pathname }}>
                        {productProps => <Product {...productProps} />}
                    </ProductQuery>
                    <ProductReview />
                </>
            );
        ```
2. Copy api & extension to root server folder `/server/falcon-review-api` etc
    1. In `config/default.json` add in the new api and extension under their appropriate key|values
    ```js

    // extension 
       "extensions": {
            // ... other extensions
            "reviews": {
                "package": "./falcon-review-extension/src/index.js",
                "config": {
                    "api": "reviews"
                }
            }
       }

    // api 
     "apis": {
            //... other apis
            "reviews": {
                "package": "./falcon-review-api/src/index.js", 
                "config": {
                    "host": "jsonplaceholder.typicode.com",
                    "protocol": "https"
                }
            }
        }

    ```

3. Run `yarn start` in both `/client` and `/server` directories in two separate terminals and navigate to a product description page to see the product reviews displayed. 
