import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { UseSelector, useSelector } from 'react-redux';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    if (isClosed && !isLoggedIn) {
        return (
            <Redirect
                to={{
                    pathname: '/Login',
                    state: { prevPath: rest.location.pathname },
                }}
            />
        );
    }

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
    isClosed: false,
};

MyRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
    isClosed: PropTypes.bool,
};
