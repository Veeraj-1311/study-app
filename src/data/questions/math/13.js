const questions = [
  {
    "question": "The total surface area of a cube with side 'a' is:",
    "options": [
      "a²",
      "4a²",
      "6a²",
      "8a²"
    ],
    "correct": 2,
    "explanation": "A cube has 6 faces each of area a², so TSA = 6a²."
  },
  {
    "question": "The volume of a cylinder with radius r and height h is:",
    "options": [
      "πr²h",
      "2πrh",
      "πrh",
      "2πr²h"
    ],
    "correct": 0,
    "explanation": "The volume of a cylinder is πr²h."
  },
  {
    "question": "The curved surface area of a cone with slant height l and radius r is:",
    "options": [
      "πr²",
      "πrl",
      "2πrl",
      "πr(r + l)"
    ],
    "correct": 1,
    "explanation": "The curved (lateral) surface area of a cone is πrl."
  },
  {
    "question": "The volume of a sphere with radius r is:",
    "options": [
      "πr³",
      "2πr³",
      "4/3 πr³",
      "4πr²"
    ],
    "correct": 2,
    "explanation": "The volume of a sphere is (4/3)πr³."
  },
  {
    "question": "The total surface area of a hemisphere with radius r is:",
    "options": [
      "2πr²",
      "3πr²",
      "4πr²",
      "πr²"
    ],
    "correct": 1,
    "explanation": "TSA of hemisphere = curved surface + base = 2πr² + πr² = 3πr²."
  },
  {
    "question": "The volume of a cone is what fraction of the volume of a cylinder with the same base and height?",
    "options": [
      "1/2",
      "1/3",
      "1/4",
      "2/3"
    ],
    "correct": 1,
    "explanation": "Volume of cone = (1/3)πr²h, which is one-third of the cylinder's volume."
  },
  {
    "question": "The lateral surface area of a cuboid with length l, breadth b, and height h is:",
    "options": [
      "2(lb + bh + lh)",
      "2h(l + b)",
      "lbh",
      "2(l + b + h)"
    ],
    "correct": 1,
    "explanation": "Lateral surface area of cuboid = 2h(l + b)."
  },
  {
    "question": "The volume of a cube with side 5 cm is:",
    "options": [
      "25 cm³",
      "75 cm³",
      "125 cm³",
      "150 cm³"
    ],
    "correct": 2,
    "explanation": "Volume of cube = side³ = 5³ = 125 cm³."
  },
  {
    "question": "The surface area of a sphere with radius r is:",
    "options": [
      "πr²",
      "2πr²",
      "3πr²",
      "4πr²"
    ],
    "correct": 3,
    "explanation": "The surface area of a sphere is 4πr²."
  },
  {
    "question": "If the radius of a sphere is doubled, the volume becomes:",
    "options": [
      "Double",
      "Four times",
      "Six times",
      "Eight times"
    ],
    "correct": 3,
    "explanation": "Volume = (4/3)πr³; doubling r gives (4/3)π(2r)³ = 8 times the original volume."
  },
  {
    "question": "The total surface area of a cone with radius r and slant height l is:",
    "options": [
      "πrl",
      "πr(r + l)",
      "2πr(r + l)",
      "πr²l"
    ],
    "correct": 1,
    "explanation": "TSA of a cone = curved surface area + base area = πrl + πr² = πr(r + l)."
  },
  {
    "question": "The curved surface area of a hemisphere with radius r is:",
    "options": [
      "πr²",
      "2πr²",
      "3πr²",
      "4πr²"
    ],
    "correct": 1,
    "explanation": "The curved surface area of a hemisphere is 2πr² (half the surface area of a sphere)."
  },
  {
    "question": "The volume of a cuboid with length 4 cm, breadth 3 cm, and height 2 cm is:",
    "options": [
      "9 cm³",
      "24 cm³",
      "18 cm³",
      "12 cm³"
    ],
    "correct": 1,
    "explanation": "Volume of cuboid = l × b × h = 4 × 3 × 2 = 24 cm³."
  },
  {
    "question": "The total surface area of a cuboid is:",
    "options": [
      "lbh",
      "2(lb + bh + lh)",
      "2h(l + b)",
      "l + b + h"
    ],
    "correct": 1,
    "explanation": "Total surface area of a cuboid = 2(lb + bh + lh)."
  },
  {
    "question": "The curved surface area of a cylinder with radius r and height h is:",
    "options": [
      "πr²h",
      "2πrh",
      "2πr(r + h)",
      "πr²"
    ],
    "correct": 1,
    "explanation": "The curved (lateral) surface area of a cylinder is 2πrh."
  },
  {
    "question": "The total surface area of a cube with edge 5 cm is:",
    "options": [
      "125 sq cm",
      "150 sq cm",
      "25 sq cm",
      "100 sq cm"
    ],
    "correct": 1,
    "explanation": "Total surface area of a cube = 6a^2 = 6 * 25 = 150 sq cm."
  },
  {
    "question": "The volume of a cylinder with radius 7 cm and height 10 cm is (take pi = 22/7):",
    "options": [
      "440 cu cm",
      "1540 cu cm",
      "770 cu cm",
      "1400 cu cm"
    ],
    "correct": 1,
    "explanation": "Volume = pi * r^2 * h = (22/7) * 49 * 10 = 22 * 70 = 1540 cu cm."
  },
  {
    "question": "The curved surface area of a cone with slant height 13 cm and radius 5 cm is:",
    "options": [
      "65*pi sq cm",
      "25*pi sq cm",
      "60*pi sq cm",
      "169*pi sq cm"
    ],
    "correct": 0,
    "explanation": "Curved surface area of cone = pi * r * l = pi * 5 * 13 = 65*pi sq cm."
  },
  {
    "question": "The volume of a sphere of radius 3 cm is:",
    "options": [
      "36*pi cu cm",
      "27*pi cu cm",
      "108*pi cu cm",
      "12*pi cu cm"
    ],
    "correct": 0,
    "explanation": "Volume of sphere = (4/3)*pi*r^3 = (4/3)*pi*27 = 36*pi cu cm."
  },
  {
    "question": "The lateral surface area of a cuboid of dimensions 10 cm x 6 cm x 4 cm is:",
    "options": [
      "120 sq cm",
      "128 sq cm",
      "240 sq cm",
      "248 sq cm"
    ],
    "correct": 1,
    "explanation": "Lateral surface area = 2h(l + b) = 2*4*(10 + 6) = 8*16 = 128 sq cm."
  },
  {
    "question": "A hemispherical bowl has inner radius 7 cm. Its inner curved surface area is (take pi = 22/7):",
    "options": [
      "154 sq cm",
      "308 sq cm",
      "616 sq cm",
      "462 sq cm"
    ],
    "correct": 1,
    "explanation": "Curved surface area of hemisphere = 2*pi*r^2 = 2*(22/7)*49 = 308 sq cm."
  },
  {
    "question": "If the radius of a cylinder is doubled and its height is halved, the volume:",
    "options": [
      "Remains the same",
      "Is doubled",
      "Is halved",
      "Becomes four times"
    ],
    "correct": 1,
    "explanation": "New volume = pi*(2r)^2*(h/2) = pi*4r^2*h/2 = 2*pi*r^2*h = 2 times the original volume."
  },
  {
    "question": "The height of a cone whose base radius is 3 cm and slant height is 5 cm is:",
    "options": [
      "4 cm",
      "8 cm",
      "sqrt(34) cm",
      "2 cm"
    ],
    "correct": 0,
    "explanation": "h = sqrt(l^2 - r^2) = sqrt(25 - 9) = sqrt(16) = 4 cm."
  },
  {
    "question": "The total surface area of a solid hemisphere of radius r is:",
    "options": [
      "2*pi*r^2",
      "3*pi*r^2",
      "4*pi*r^2",
      "pi*r^2"
    ],
    "correct": 1,
    "explanation": "Total surface area = curved surface + base = 2*pi*r^2 + pi*r^2 = 3*pi*r^2."
  },
  {
    "question": "A cylindrical container of radius 6 cm and height 15 cm is full of water. If all the water is poured into a rectangular tank of base 18 cm x 12 cm, the depth of water in the tank is approximately:",
    "options": [
      "7.86 cm",
      "5 cm",
      "10 cm",
      "2.36 cm"
    ],
    "correct": 0,
    "explanation": "Volume of water = pi*36*15 = 540*pi cu cm. Volume of tank = 18*12*h = 216h. So 216h = 540*pi, h = 540*pi/216 = 2.5*pi = 7.854 cm, approximately 7.86 cm."
  }
]

export default questions
