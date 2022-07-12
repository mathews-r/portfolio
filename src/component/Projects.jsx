import React, { Component } from 'react'
import CardProject from './CardProject';
import '../styles/projects.css';
import data from '../services/data';

export default class Projects extends Component {
  render() {
    return (
      <section className="projects" id="projects">
          <h2>Projetos</h2>
        <div className="projetos">
          {data.map((project) => (
            <CardProject
            key={project.name}
            image={project.image}
            name={project.name}
            description={project.description}
            url={project.url}
            />
            ))}
        </div>
      </section>
    )
  }
}
