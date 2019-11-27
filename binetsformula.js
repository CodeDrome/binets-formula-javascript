
window.onload = function()
{
    writeToConsole("Binet's Formula<br/>", "console");
    writeToConsole("---------------<br/>", "console");

    printFibonacciTo(16);
}


function printFibonacciTo(n)
{
    if(n < 2)
    {
        writeToConsole("term must be >= 2<br/>");
    }
    else
    {
        let F_n_minus_2 = 0;
        let F_n_minus_1 = 1;
        let F_n = 0;
        let F_n_Binet = 0;

        writeToConsole("<br/>Calculating Fibonacci numbers sequentially and using Binet's Formula<br/><br/>", "console");
        writeToConsole("Term Seq Binet OK?<br/>------------------<br/>", "console");

        writeToConsole("&nbsp;&nbsp;&nbsp;0" + padNumber(F_n_minus_2, 4) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;~<br/>", "console");
        writeToConsole("&nbsp;&nbsp;&nbsp;1" + padNumber(F_n_minus_1, 4) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;~<br/>", "console");

        for(let i = 2; i <= n; i++)
        {
            F_n = F_n_minus_2 + F_n_minus_1;

            F_n_Binet = BinetsFormula(i);

            writeToConsole(padNumber(i, 4) + padNumber(F_n, 4) + padNumber(F_n_Binet, 6), "console");

            if(F_n_Binet === F_n)
            {
                writeToConsole("&nbsp;&nbsp;Y<br/>", "console");
            }
            else
            {
                writeToConsole("&nbsp;&nbsp;N<br/>", "console");
            }

            F_n_minus_2 = F_n_minus_1;
            F_n_minus_1 = F_n;
        }
    }
}


function BinetsFormula(n)
{
    // pre-calculate Math.sqrt(5) as we use it three times
    let sqrt5 = Math.sqrt(5);

    return Math.round(( Math.pow((1 + sqrt5), n) - Math.pow((1 - sqrt5), n) ) / ( Math.pow(2, n) * sqrt5 ));
}


function padNumber(number, width)
{
    let padded = number.toString();

    for(let i = 0, l = width - padded.length; i < l; i++)
    {
        padded = "&nbsp;" + padded;
    }

    return padded;
}
