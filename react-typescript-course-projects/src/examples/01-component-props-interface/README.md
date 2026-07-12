# Component, Props and TypeScript Interface

This project demonstrates the fundamental concepts of React and TypeScript by building reusable components with typed props. It was developed as part of the KUZEM React course.

## Features

* React + TypeScript with Vite
* Reusable React components
* Props with TypeScript interfaces
* Default props
* Optional props
* Conditional rendering
* Children prop
* Basic component styling with CSS

## Components

### Card

A reusable container component that accepts and renders `children`.

### ProductCard

Displays product information using typed props received from the parent component.

### PriceTag

A reusable component responsible for displaying formatted product prices.

## Project Structure

```text
01-component-props-interface/
├── components/
│   ├── Card.tsx
│   ├── PriceTag.tsx
│   └── ProductCard.tsx
├── styles/
│   ├── Card.css
│   ├── PriceTag.css
│   └── ProductCard.css
├── types/
└── index.tsx
```

## Technologies

* React
* TypeScript
* Vite
* CSS

## Learning Objectives

This project demonstrates how to:

* Create reusable React components
* Pass data using props
* Define props with TypeScript interfaces
* Use default prop values
* Use optional props
* Render elements conditionally
* Work with the `children` prop
* Organize a React project into reusable components

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

## Preview

The application displays reusable product cards containing:

* Product name
* Category
* Price
* Stock status
* Optional discount information
