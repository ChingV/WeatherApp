//Contains a default parameter
const someObj= (type, {label, group} = {})=>{
    console.log(type, label, group)
}

someObj('object',{label:'Bank', group:'Ally'})
someObj('object')

//No default parameter
const brokenObj=(type,{label,group})=>{
    console.log(type,label,group)
}

brokenObj('object',{label:'Bank', group:'Bank of America'})
brokenObj('object')