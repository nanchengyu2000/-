import * as XLSX from 'xlsx'
 
// 把文件以二进制的方式读出来
let analyseExcelToByte=(file)=>{
    return new Promise(resolve=>{
        let reader=new FileReader();
        reader.readAsBinaryString(file);
        reader.onload=ev=>{
            resolve(ev.target.result);
        }
    })
}
 
// 转换得对应字段表：****这里需要根据自己的需要修改，一般是根据excel中的表头进行设置
let revertChart={
    sort:{
        text:"类别",
        type:"string"
    },
    type:{
        text:"类型",
        type:"string",
    },
    English:{
        text:"英文",
        type:"string",
    },
    Chinese:{
        text:"中文",
        type:"string",
    }
}
 // 把读取出来得数据变为组后可以传递给服务器的数据（姓名：name、联系电话：phone、年纪：age、籍贯：local）
let parseToServe=(outdata)=>{
    let arr=[];
    outdata.forEach(item=>{
        let obj={};
        for(let key in revertChart){
            // eslint-disable-next-line no-prototype-builtins
            if(!revertChart.hasOwnProperty(key)) break;
            let o=revertChart[key],
            text=o.text,
            type=o.type;
            o=item[text]||"";
            type==="string" ? (o=String(o)):null;
            type==="number" ? (o=Number(o)):null;
            obj[key]=o
        }
        arr.push(obj)
    })
    return arr
}
 
// 前端文件导入解析成传递给服务器的数据
export let resolveFile=async (file)=>{
    let data= await  analyseExcelToByte(file);
    // 将文件以二进制读出
    return new Promise(resolve=>{
        let workbook=XLSX.read(data,{type:"binary"})
        // 将文件中的第一个sheet以json的方式读出outdata
        let worksheets=workbook.Sheets[workbook.SheetNames[0]];
        let outdata=XLSX.utils.sheet_to_json(worksheets)
        let serveData=parseToServe(outdata)
        resolve(serveData)
    })
 }