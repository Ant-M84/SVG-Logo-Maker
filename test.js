const {Square, Triangle, Circle} = require("./lib/shapes.js");

describe('Square', () => {
    it("Should return an SVG with the input of square color, text and text color", () => {
        const square = new Square("black", "ABC", "yellow");
        expect(square.render()).toEqual(`
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="black"/>
            <text x="100" y="125" font-size="60" text-anchor="middle" fill="yellow">ABC</text>
            </svg>
        `
        );
    });
})

describe('Triangle', () => {
    it("Should return an SVG with the input of triangle color, text and text color", () => {
        const triangle = new Triangle("red", "DEF", "white");
        expect(triangle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,15 200,200, 0,200" fill="red"/>
        <text x="100" y="150" font-size="60" text-anchor="middle" fill="white">DEF</text>
        </svg>
        `
        );
    });
})

describe ('Circle', () => {
    it("Should return an SVG with the input of circle color, text and text color", () => {
        const triangle = new Circle("green", "GHI", "orange");
        expect(triangle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="120" r="80" fill="green" />
        <text x="150" y="140" font-size="70" text-anchor="middle" fill="orange">GHI</text>
        </svg>
        `
        );
    })
})
