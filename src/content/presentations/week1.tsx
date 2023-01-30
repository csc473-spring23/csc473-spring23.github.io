import React from "react";
import {
  Heading,
  Image,
  ListItem,
  Quote,
  Slide,
  UnorderedList,
  Link,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Deck,
} from "spectacle";
import Mermaid from "../../components/mermaid";
import dedent from "dedent";
import httprequest from "../../assets/http_request.png";
import theme from "../../themes/slide-default";

export default function Week1() {
  const chart: string = dedent`
 sequenceDiagram
    User->>Browser: enter URL: https://example.com
    Browser->>DNS: what's the IP of example.com?
    DNS-->>Browser: 93.184.216.34
    Browser->>example.com: Hello? Let's use TCP.
    example.com-->>Browser: Hello. Ready.
    Browser->>example.com: Actually, lets use TLS/SSL too
    example.com-->>Browser: Okay.
    Browser-->>example.com: HTTP GET /index.html please
 `;

  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>How does the internet work?</Heading>
      </Slide>

      <Slide>
        <Heading>OSI model</Heading>
        <UnorderedList>
          <ListItem>OSI = "Open Systems Interconnection</ListItem>
          <ListItem>
            <i>Conceptual</i> model for how systems communicate over networks
          </ListItem>
          <ListItem>Also called the "seven layer model"</ListItem>
          <ListItem>
            There is another model called the <strong>TCP/IP</strong> model that
            has five layers and is a bit closer to how things work in the real
            world
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <UnorderedList>
          <ListItem>
            Application Layer (7): interface responsible for displaying
            information to the user
          </ListItem>
          <ListItem>
            Presentation Layer (6): prepares data to be used by the application
            layer
            <UnorderedList>
              <ListItem>encryption, compression, serialization</ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            Session Layer (5): manages opening/closing sessions between end-user
            application processes; syncs data transfer with checkpoints
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <UnorderedList>
          <ListItem>
            Transport Layer (4): TCP/UDP; host-to-host communication services
            for applications
          </ListItem>
          <ListItem>
            Network Layer (3):
            <UnorderedList>
              <ListItem>
                facilitates data transfer (in packets) between networks
              </ListItem>
              <ListItem>using the IP protocol</ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <UnorderedList>
          <ListItem>
            Datalink Layer (2):
            <UnorderedList>
              <ListItem>
                facilitates data transfer within the same network (eg LAN, WAN)
              </ListItem>
              <ListItem>
                divides data into frames; includes errorchecking
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            Physical Layer (1): physical transport of bitstreams
            <Quote>
              defines a means of transmitting raw bits rather than logic data
              packets over a physical link connecting network nodes
            </Quote>
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading fontSize="h3">HTTP(S) Request Lifecycle</Heading>
        <Mermaid chart={chart}></Mermaid>
      </Slide>
      <Slide>
        <Heading>Anatomy of a HTTP Request</Heading>
        <Image src={httprequest} />
        <Link
          fontSize="small"
          href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"
        >
          https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
        </Link>
      </Slide>
      <Slide>
        <Heading>HTTP Methods</Heading>
        <Table>
          <TableHeader>
            <th>Method</th>
            <th>Meaning</th>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>GET</TableCell>
              <TableCell>Retrieve data representing the resource</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>HEAD</TableCell>
              <TableCell>Same as GET, but don't give me the body</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>POST</TableCell>
              <TableCell>
                Here's (new) data (to change something on the server)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>PUT</TableCell>
              <TableCell>Replace the resource with this data</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>PATCH</TableCell>
              <TableCell>(Partially) update the resource</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>DELETE</TableCell>
              <TableCell>Delete the resource</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Slide>
    </Deck>
  );
}
