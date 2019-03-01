const rect = {
  perimeter:(x,y) => (2*(x+y)),
  area: (x,y) => (x*y)
}

function solveRectangle(l,b){
  console.log("Solving for rectangle with l = " + l + " breadth = "+ b)
  if(l<=0 || b<=0){
    console.log("Rectangle dimensions should be greater than zero")
  } else{
    console.log("Perimeter of rectangle is "+ rect.perimeter(l,b))
    console.log("Area of rectangle is " + rect.area(l,b))
  }
}

solveRectangle(4,5)
solveRectangle(3,2)
solveRectangle(0,4)
