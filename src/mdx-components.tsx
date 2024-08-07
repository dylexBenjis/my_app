import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'

//@ts-ignore
function Table({ data }) {
    //@ts-ignore
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
    //@ts-ignore
  let rows = data.rows.map((row, index) => (
    //@ts-ignore
    <tr key={index}>{row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}
//@ts-ignore
function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  
  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}
//@ts-ignore
//for blog image
const BlogHeaderImage = (props) => {
console.log(props.src)
    return (

          <Image sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' className='shadow-xl' fill={true} src={props.src} alt={props.alt} />


  )
}
//@ts-ignore
function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}
//@ts-ignore
function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}
//@ts-ignore
function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}
//@ts-ignore
function createHeading(level) {
    //@ts-ignore
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
    Table,
  BlogHeaderImage,
}
//@ts-ignore
export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}