function findTriangleType(side1,side2,side3)
{
    if (side1 == side2 && side2 == side3)
    {
        console.log("Equilateral triangle.");
        //return side1;
    }else if (side1 == side2 || side2 == side3)
    {
        console.log("Isosceles triangle.");
    }else
    {
        console.log("Scalene triangle.");
    }
}findTriangleType(10,20,30);
findTriangleType(30,30,30);
findTriangleType(20,20,30);