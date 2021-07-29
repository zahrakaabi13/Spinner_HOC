//withdLoading.js
import React from 'react';
import {Spinner} from 'react-bootstrap'

function WithLoading(WrappedComponent) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <WrappedComponent {...props} />;
    return (
      <>
      <Spinner animation="border" variant="primary" />
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <Spinner animation="border" variant="danger" /> <br/>

    <Spinner animation="border" variant="warning" />
    <Spinner animation="border" variant="success" />

    </>
      );
  };
}
export default WithLoading;
