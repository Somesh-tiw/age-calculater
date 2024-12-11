const inputbox=document.querySelectorAll('.inputbox')
const input=document.querySelector('input')
const result=document.getElementById("result")
console.log(input)
const button=document.querySelector('button')
inputbox.max=new Date().toISOString().split("T")[0]

function CalculatingAge(){
    let DOB= new Date(input.value)
    let d1= DOB.getDate();
    let m1=DOB.getMonth()+1
    let y1=DOB.getFullYear();

    let Today= new Date()
    let d2=Today.getDate()
    let m2=Today.getMonth()+1
    let y2=Today.getFullYear()

    let d3,m3,y3
    y3=y2-y1
    if(m2>=m1)
    {
        m3=m2-m1
    }
    else{
        y3--;
       m3=12+m2-m1
    }
    if(d2>=d1)
    {
         d3=d2-d1
    }
    else{
        m3--;
        d3=getDaysInMonths(y1,m1)+d2-d1
    }
    if(m3<0){
        m3=11
        y3--;
    }
    // console.log(y3,m3,d3)
    result.innerHTML=`You are ${y3}years,${m3}months${d3}Days olds`
}

function getDaysInMonths(year,month){
    return new Date(year,month,0).getDate()
}