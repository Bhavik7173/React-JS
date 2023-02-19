function letScoping()
{
    let x = 1;
    if(true)
    {
        let x = 2;
        console.log("letscoping from if",x);
    }
    console.log("letscoping outside the if",x);
}
letScoping();