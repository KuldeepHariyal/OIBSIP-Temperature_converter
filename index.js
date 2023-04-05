const calculateTemp=()=>{
  const numberTemp = document.getElementById('temp').value;
  console.log(numberTemp);
  const tempSelected = document.getElementById('temptype');
  const valueTemp = temptype.options[tempSelected.selectedIndex].value;
  console.log(valueTemp);

  const celTofah=(cel)=>{
    let fahrenheit = parseFloat((cel*9/5)+32);
    return fahrenheit;
  }
  const fahTocel=(fah)=>{
    let celsius = parseFloat((fah-32)*5/9);
    return celsius;
  }

  let ans;

  if(valueTemp == 'cel'){
    ans = celTofah(numberTemp);
    document.getElementById('result_container').innerHTML= ans.toFixed(2) + '&deg;Fahrenheit';
  }else{
    ans = fahTocel(numberTemp);
    document.getElementById('result_container').innerHTML= ans.toFixed(2) + '&deg;Celsius';
  }
}