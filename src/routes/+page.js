import data from '../../data/data.json'
import projects from '../../data/projects.json'

export const prerender = true

export function load() {
  return { data, projects }
}
