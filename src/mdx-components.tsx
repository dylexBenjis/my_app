import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";

//@ts-ignore
function Table({ data }) {
  //@ts-ignore
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  //@ts-ignore
  let rows = data.rows.map((row, index) => (
    //@ts-ignore
    <tr key={index}>
      {row.map(
        //@ts-ignore
        (cell, cellIndex) => (
          <td key={cellIndex}>{cell}</td>
        )
      )}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
//@ts-ignore
function CustomLink(props) {
  if (props.href.startsWith("/")) {
    return (
      <Link href={props.href} {...props}>
        {props.children}
      </Link>
    );
  }
}

function External_link(props: any) {
  return (
    <Link
      href={props.href}
      target="_blank"
      {...props}
      className="text-blue-700 dark:text-green-400"
      style={{ textDecoration: "none" }}
    >
      {props.children}
    </Link>
  );
}
//@ts-ignore
//for blog image
const BlogHeaderImage = (props) => {
  console.log(props.src);
  return (
    <Image
      sizes="(max-width: 768px) 10vw, (max-width: 1200px) 33vw"
      className="shadow-xl"
      fill={true}
      objectFit="cover"
      src={props.src}
      alt={props.alt}
    />
  );
};
//@ts-ignore
function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

function Hr(props: any) {
  return <hr className="border-gray-500  border-3" />;
}

//@ts-ignore
function Code({ children, language, ...props }) {
  const codeHTML = highlight(children as string);

  return (
    <pre className="bg-gray-300 dark:bg-gray-900">
      <code className="" dangerouslySetInnerHTML={{ __html: codeHTML }} />
    </pre>
  );
}
//@ts-ignore
function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}
//@ts-ignore
function createHeading(level) {
  //@ts-ignore
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  customLink: CustomLink,
  ExternalLink: External_link,
  Code,
  Table,
  BlogHeaderImage,
  Hr: Hr,
};
//@ts-ignore
export function CustomMDX(props) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
