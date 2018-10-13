let defaultCity='上海'
try{
    //如果存储中有数据，就把存储中的数据附给默认数据展示出来
    if(localStorage.city){
        defaultCity=localStorage.city
    }
}catch(e){}

export default{
    city:defaultCity
}