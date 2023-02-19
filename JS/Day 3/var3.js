function varScoping()
{
    var x = 1;
    if(true)
    {
        var x = 2;
        console.log("varscoping from if",x);
    }
    console.log("varscoping outside the if",x);
}
varScoping();