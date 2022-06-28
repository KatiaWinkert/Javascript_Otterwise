import { format, compareAsc } from 'date-fns'

 const formatDate = format(new Date(), 'dd/MM/yyyy')
//=> '02/11/2014'
console.log(formatDate) 
console.log(new Date())


