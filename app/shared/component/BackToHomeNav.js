import React, { Component } from 'react';

export const BackToHomeNav = (props) => {
  return(
    <nav className="top-nav">
        <a href={`/#${props.id}`}>Made by Matt Keegan</a>
    </nav>
  );
};