import React from 'react';
import ReactDOM from 'react-dom/client';
import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector';
import { SearchProvider, WithSearch } from '@elastic/react-search-ui';

const root = ReactDOM.createRoot(document.getElementById('root'));
const endpointBase = 'https://enterprise-search-8-6-1-4gb-ram.ent.us-central1.gcp.cloud.es.io';
const engineName = 'content-site';
const searchKey = 'search-se4wspv888i3itjnqghpm954';
const apiConnectorConfig = { endpointBase, engineName, searchKey };
const apiConnector = new AppSearchAPIConnector(apiConnectorConfig);
const searchProviderConfig = { apiConnector };

root.render(<App />);

function App () {
  console.log('Inside <App>');
  return (
    <SearchProvider config={searchProviderConfig}>
      <WithSearch mapContextToProps={mapContextToProps}>{children}</WithSearch>
    </SearchProvider>
  );
}

function mapContextToProps (context) {
  const logMessage =
    `Inside mapContextToProps() for <WithSearch>', typeof context.trackClickThrough is: ${typeof context.trackClickThrough}`
  console.log(logMessage);
  return {};
}

function children (props) {
  const logMessage = 'Inside children';
  console.log(logMessage);
  return null;
}
