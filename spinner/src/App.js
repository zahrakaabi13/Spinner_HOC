import React from 'react';
import List from './HOC/List.js';
import WithLoading from './HOC/WidthLoading';
const ListWithLoading = WithLoading(List);
class App extends React.Component {
  state = {
  };
  componentDidMount() {
    this.setState({ loading: true });
    fetch(`https://api.github.com/users/hacktivist123/repos`)
      .then((json) => json.json())
      .then((repos) => {
        this.setState({ loading: false, repos: repos });
      });
  }
  render() {
    return (
      <div className="text-center">
      <ListWithLoading
        isLoading={this.state.loading}
        repos={this.state.repos}
      />
      </div>
    );
  }
}
export default App;

