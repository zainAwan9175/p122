arr=[
   ,"djhskfheruiiisdjhkbvdfhigu        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam vero reiciendis dolorum ad totam. Autem voluptate exercitationem iste quo, molestiae officia atque nihil ex repudiandae, sed earum voluptatem hic?","djkfsdbvhukfjdgbjksdhfkdsjfkhkj","fdhjkhafgvhkjhgyjuvfdshajmvsdfhmj        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam vero reiciendis dolorum ad totam. Autem voluptate exercitationem iste quo, molestiae officia atque nihil ex repudiandae, sed earum voluptatem hic?"
    ,"jhkdsafsghfujkbfuksjh","iklfdbsahjkf,sdh fds klfsdhi lfkjf sdjk        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam vero reiciendis dolorum ad totam. Autem voluptate exercitationem iste quo, molestiae officia atque nihil ex repudiandae, sed earum voluptatem hic?","fbsdjafuhhfkdhsfhkhf fksd fidkj filsdkhfkhdvofdl ","dbdfuiov7dgkyfnvdssdvkj d ygffgodfgsfdskf        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam vero reiciendis dolorum ad totam. Autem voluptate exercitationem iste quo, molestiae officia atque nihil ex repudiandae, sed earum voluptatem hic?","dfbhfvdvhuvhjhvbbbbbbb","bdjhbahjkbfdjhkhbfdjksvjfdsvj        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam vero reiciendis dolorum ad totam. Autem voluptate exercitationem iste quo, molestiae officia atque nihil ex repudiandae, sed earum voluptatem hic?"
]


let btn=document.querySelector(".btn")
btn.addEventListener("click",()=>{
    let input=document.querySelector(".para")

let container=document.querySelector(".container")

    let itr=parseInt(input.value)
    console.log(itr)
    container.innerHTML=""
    for(let i=0;i<=itr;i++)
    {
        let el=document.createElement("p")
        el.textContent=arr[i]
        container.append(el)
        console.log(i)

    }
    
})
