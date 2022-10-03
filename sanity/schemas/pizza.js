export default{
    name:'pizza',
    title: 'pizza',
    type:"document",
    fields:[
        {
            name:'image',
            title:'image',
            type:'image',
            // to crop or edit data in the database
            options:{
                hotspot:true
            }
        },
        {
            name: 'name',
            title:'name',
            type:'string',
        },
        {
            // unique id 
            name:'slug',
            title:'slug',
            type:'slug',
            options:{
                source:'name',
                maxLength:90
            }
        }
    ]
}