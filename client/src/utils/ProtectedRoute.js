import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

function ProtectedRoute({ children, isAuthenticated, ...rest }) {
    return (
      <Routes>
        <Route
          {...rest}
          element={
            isAuthenticated() ? (
              React.cloneElement(children, { isAuthenticated })
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    );
  }

export default ProtectedRoute;