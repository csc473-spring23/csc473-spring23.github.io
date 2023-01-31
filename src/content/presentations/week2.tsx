import React from "react";
import {
  Appear,
  CodePane,
  CodeSpan,
  Heading,
  ListItem,
  MarkdownSlide,
  Slide,
  SlideLayout,
  Table,
  TableBody,
  TableHeader,
  TableRow,
  UnorderedList,
} from "spectacle";

export default function Week2() {
  return (
    <>
      <SlideLayout.Center>
        <Heading>CSS</Heading>
      </SlideLayout.Center>
      <MarkdownSlide animateListItems>
        {`
# Recall from last time

- HTML provides:
    - structure
    - content
- It expresses *semantics* rather than *appearance*
- The appearance is ultimately controlled by the browser
        `}
      </MarkdownSlide>
      <MarkdownSlide componentProps={{ layout: SlideLayout.Center }}>{`
> CSS is a language for dsecribing the rendering of structured documents (such as HTML and XML) on screen, on paper etc.

In other words, CSS is a means of specifying the *appearance* of our HTML.
      `}</MarkdownSlide>

      <Slide>
        <Heading>CSS Rules</Heading>
        <UnorderedList>
          <ListItem>
            <strong>selector</strong>: determines which elements we're styling
          </ListItem>
          <ListItem>
            <strong>declaration</strong>: deterimnes the styling of one of the
            component's properties
            <UnorderedList>
              <ListItem>
                <CodeSpan>property</CodeSpan>
              </ListItem>
              <ListItem>
                <CodeSpan>value</CodeSpan>
              </ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Slide>
      <SlideLayout.Center>
        <Heading>Tiny Example</Heading>
        <CodePane language="css">
          {`
            p {
                color: red;
            }
            `}
        </CodePane>
      </SlideLayout.Center>
      <Slide>
        <Heading>Many Different Kinds of Selectors</Heading>
        <Table>
          <TableHeader>
            <th>Selector</th>
            <th>Description</th>
            <th>Example</th>
          </TableHeader>
          <TableBody>
            <TableRow>
              <td>element</td>
              <td>selects by tag</td>
              <td>
                <CodeSpan>{`p -> <p>`}</CodeSpan>
              </td>
            </TableRow>
            <TableRow>
              <td>id</td>
              <td>
                selects an element by id <br /> ids are unique on the page
              </td>
              <td>
                <CodeSpan>#foo</CodeSpan>
              </td>
            </TableRow>
            <TableRow>
              <td>class</td>
              <td>multiple instances of a class per page</td>
              <td>
                <CodeSpan>.foo</CodeSpan>
              </td>
            </TableRow>
            <TableRow>
              <td>attribute</td>
              <td></td>
              <td>
                <CodeSpan>img[src]</CodeSpan>
              </td>
            </TableRow>
            <TableRow>
              <td>combinators</td>
              <td>combinations!</td>
              <td>
                <CodeSpan>{`article>p`}</CodeSpan>
              </td>
            </TableRow>
          </TableBody>
        </Table>
      </Slide>
      <SlideLayout.Center>
        <Heading>Combinators</Heading>
        <UnorderedList>
          <Appear>
            <li>
              <b>descent</b>: <CodeSpan>body section p</CodeSpan>
              <UnorderedList>
                <li>
                  a <CodeSpan>p</CodeSpan> that's a descendant of a{" "}
                  <CodeSpan>section</CodeSpan> in the <CodeSpan>body</CodeSpan>
                </li>
              </UnorderedList>
            </li>
          </Appear>
          <Appear>
            <li>
              <b>child</b>: <CodeSpan>{`article > p`}</CodeSpan>
              <ul>
                <li>
                  a <CodeSpan>p</CodeSpan> that's a <em>direct child</em> of a{" "}
                  <CodeSpan>article</CodeSpan>
                </li>
              </ul>
            </li>
          </Appear>
          <Appear>
            <li>
              <b>adjancent sibling</b>: <CodeSpan>{`h1 + p`}</CodeSpan>
              <ul>
                <li>
                  a <CodeSpan>p</CodeSpan> that <em>follows</em> a{" "}
                  <CodeSpan>h1</CodeSpan>
                </li>
              </ul>
            </li>
          </Appear>
          <Appear>
            <li>
              <b>general sibling</b>: <CodeSpan>{`p ~ img`}</CodeSpan>
              <ul>
                <li>
                  <em>any</em> <CodeSpan>img</CodeSpan> that comes after a{" "}
                  <CodeSpan>p</CodeSpan>
                </li>
              </ul>
            </li>
          </Appear>
        </UnorderedList>
      </SlideLayout.Center>
      <SlideLayout.Section>Exercise</SlideLayout.Section>
    </>
  );
}
