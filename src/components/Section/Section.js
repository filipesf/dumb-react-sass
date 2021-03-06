import React, { Component } from 'react';

export class Section extends Component {
  render() {
    return (
      <section className="c-section">
        <header className="c-section__header">
          <h2 className="c-section__title">{ this.props.title }</h2>
          <p className="c-section__description">{ this.props.description }</p>
        </header>
        <div className="c-section__body">
          { this.props.children }
        </div>
      </section>
    );
  }
}

