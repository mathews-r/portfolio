import React, { Component } from 'react'
import CardProject from './CardProject';
import '../styles/projects.css';

export default class Projects extends Component {
  render() {
    return (
      <section className="projects" id="projects">
          <h2>Projetos</h2>
        <div className="projetos">
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </section>
    )
  }
}
