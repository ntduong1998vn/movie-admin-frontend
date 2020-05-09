import React, { Suspense } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

const MovieTable = React.lazy(() =>
    import(/* webpackChunkName: "second" */ './user-table')
);

function UserPages({ match }) {
    return (
        <Suspense fallback={<div className="loading" />}>
            <Switch>
                <Redirect exact from={`${match.url}/`} to={`${match.url}/user-list`} />
                <Route
                    path={`${match.url}/user-list`}
                    render={props => <MovieTable {...props} />}
                />
                <Redirect to="/error" />
            </Switch>
        </Suspense>
    )
}

export default UserPages