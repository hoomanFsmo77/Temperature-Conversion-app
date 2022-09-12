let $=document
let changeBtnTag=$.getElementById('change')
let resetBtnTag=$.getElementById('reset')
let converterBtnTag=$.getElementById('convert')
let inputBoxTag=$.getElementById('data-input')
let celcuisSpanTag=$.getElementById('celcius')
let farenheitSpanTag=$.getElementById('farenheit')
let answerTag=$.getElementById('answer')
let valueTag=$.getElementById('value')
let resultTag=$.getElementById('result')
let erorrMessageTag=$.querySelector('.error_message')
let isCelcius=true
let result
let result2Digit

function remove_value() {
    inputBoxTag.value=''
}
remove_value()
changeBtnTag.addEventListener('click',function () {
    if(isCelcius){
        inputBoxTag.setAttribute('placeholder','℉')
        document.title='℉ to ℃'
        celcuisSpanTag.innerText='℉'
        farenheitSpanTag.innerText='℃'
        remove_value()
        isCelcius=false
    }else{
        inputBoxTag.setAttribute('placeholder','℃')
        document.title='℃ to ℉'
        celcuisSpanTag.innerText='℃'
        farenheitSpanTag.innerText='℉'
        remove_value()
        isCelcius=true
    }
})
resetBtnTag.addEventListener('click',function () {
    answerTag.style.display='none'
    remove_value()
})
converterBtnTag.addEventListener('click',function () {
    let placeholderValue=inputBoxTag.getAttribute('placeholder')
    let inputValue=inputBoxTag.value
    console.log(isNaN(inputValue))
    answerTag.style.display='block'

    switch (true) {
        case inputValue==='':
            answerTag.style.display='none'
            erorrMessageTag.style.display='block'
            break
        case isNaN(inputValue)===true:
            answerTag.style.display='none'
            erorrMessageTag.innerHTML='&starf;Wrong Value!'
            erorrMessageTag.style.display='block'
            break
        case isNaN(inputValue)===false:
            erorrMessageTag.style.display='none'
            switch (placeholderValue) {
                case '℃':
                    result=((inputValue*9)/5)+32
                    result2Digit=result.toFixed(2)
                    valueTag.innerText=`${inputValue}℃`
                    resultTag.innerText=`${result2Digit}℉`
                    break
                case '℉':
                    result=((inputValue-32)*5)/9
                    result2Digit=result.toFixed(2)
                    valueTag.innerText=`${inputValue}℉`
                    resultTag.innerHTML=`${result2Digit}℃`
                    break
            }
            break
    }
    remove_value()
})
