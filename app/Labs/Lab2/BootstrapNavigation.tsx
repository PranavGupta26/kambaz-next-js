"use client"; // Required for interactive NavLink

import React from 'react';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Nav, NavItem, NavLink } from 'react-bootstrap';
import Link from 'next/link';

export default function BootstrapNavigation() {
  return (
    <div id="wd-css-navigating-with-tabs">
      <h2>Tabs</h2>
      <Nav variant="tabs">
        <NavItem>
          <NavLink as={Link} href="/Labs">
            Labs
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/Labs/Lab1">
            Lab 1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/Labs/Lab2">
            Lab 2
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/Labs/Lab3">
            Lab 3
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink as={Link} href="/">
            Kambaz
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/PranavGupta26/kambaz-next-js" target="_blank" rel="noopener noreferrer">
            GitHub
          </NavLink>
        </NavItem>
      </Nav>
      <div id="wd-css-navigating-with-tabs">
  <h2>Tabs</h2>
  <Nav variant="tabs">
    <NavItem>
      <NavLink href="#/Labs/Lab2/Active">Active</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#/Labs/Lab2/Link1">Link 1</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#/Labs/Lab2/Link2">Link 2</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="#/Labs/Lab2/Disabled" disabled>Disabled</NavLink>
    </NavItem>
  </Nav>
</div>
<div id="wd-css-navigating-with-cards">
  <h2> Cards </h2>
<Card style={{ width: "18rem" }}>
  <CardImg variant="top" src="/images/stacked.jpg" alt="Stacked Starship" />
  <CardBody>
    <CardTitle>Stacking Starship</CardTitle>
    <CardText>
      Stacking the most powerful rocket in history. Mars or bust!
    </CardText>
    <Button variant="primary">Boldly Go</Button>
  </CardBody>
</Card>
</div>

    </div>
  );
}
