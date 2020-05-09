import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

const MovieList = React.lazy(() =>
    import(/* webpackChunkName: "product-image-list" */ './movie-list')
);


function ProductPages({ match }) {
    return (
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                <Redirect exact from={`${match.url}/`} to={`${match.url}/movie-list`} />
                <Route
                    path={`${match.url}/movie-list`}
                    render={props => <MovieList {...props} />}
                />
                {/* <Route
                    path={`${match.url}/details`}
                    render={props => <Details {...props} />}
                />
                <Route
                    path={`${match.url}/details-alt`}
                    render={props => <DetailsAlt {...props} />}
                /> */}
                <Redirect to="/error" />
            </Switch>
        </Suspense>
    )
}

export default ProductPages
