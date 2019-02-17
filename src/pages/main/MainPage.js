import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MainPage extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  state = {
    data: [],
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    //console.log(data);
    return (
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}

export { MainPage };
