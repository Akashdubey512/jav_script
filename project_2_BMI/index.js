const form = document.querySelector('form')
 form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const desc = document.querySelector('#description')
    if(height<0|| isNaN(height)){
        result.innerHTML = 'please give a valid height'
    } else if(weight<0 || isNaN(weight)){
        result.innerHTML = 'please give a valid weight'
     } else {
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        if(bmi<18.6){
            desc.innerHTML = "You are under weight"
        } else if(bmi<24.9) { 
            desc.innerHTML = "You are in normal range"
        } else {desc.innerHTML = "You are overweight"}
        result.innerHTML = `<span>${bmi}</span>`
     }
 })