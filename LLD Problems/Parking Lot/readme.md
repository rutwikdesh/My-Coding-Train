# Parking Lot LLD

A TypeScript implementation of a Parking Lot Low-Level Design (LLD) system. This project demonstrates object-oriented design principles to model a scalable parking lot, supporting multiple vehicle types and levels.

## Table of Contents

- [Parking Lot LLD](#parking-lot-lld)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Class Diagram](#class-diagram)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Overview

This repository provides a modular and extensible Parking Lot system, designed using TypeScript. It models real-world parking lot entities such as vehicles, parking spots, levels, and the parking lot itself. The design follows SOLID principles and is suitable for learning, interviews, or as a foundation for more complex systems.

## Features

- Supports multiple vehicle types: Car, Bike, Truck
- Multiple parking levels and spots
- Object-oriented design with clear separation of concerns
- Easily extensible for new features (e.g., payment, reservations)
- TypeScript for type safety and maintainability

## Class Diagram

The system is structured around the following main classes:

- `ParkingLot`
- `Level`
- `ParkingSpot`
- `Vehicle` (with subtypes: `Car`, `Bike`, `Truck`)

You can find the class diagram in [`class-diagram.drawio`](class-diagram.drawio).

## Project Structure

```
Parking Lot/
  ├── classes/
  │   ├── Level.ts
  │   ├── ParkingLot.ts
  │   ├── ParkingSpot.ts
  │   ├── VechileTypes/
  │   │   ├── Bike.ts
  │   │   ├── Car.ts
  │   │   └── Truck.ts
  │   └── Vehicle.ts
  ├── utils/
  │   └── Types.ts
  ├── index.ts
  ├── class-diagram.drawio
  ├── package.json
  ├── tsconfig.json
  └── readme.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/parking-lot-lld.git
   cd parking-lot-lld
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Build the project:**
   ```bash
   npm run build
   # or
   yarn build
   ```

## Usage

You can run the main entry point (`index.ts`) to see the Parking Lot system in action. Modify `index.ts` to test different scenarios.

```bash
npm start
# or
yarn start
```

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements, bug fixes, or new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
