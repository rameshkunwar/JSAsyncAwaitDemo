const posts = [
    {title:'Post one', body:'this is a post one'},
    {title:'Post two', body:'this is a post two'}
    ];
    
    function getPosts(){
        setTimeout(() => {
            let output ='';
            posts.forEach((post, index) => {
                output += ` <li>${post.title}</li> `;
            } );
            document.body.innerHTML = output;
        }, 1000);
    }
    
    function createPost(post){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.push(post);
                const error = false;
                
                if(!error){
                    resolve();
                }else{
                    reject('Error: oops! there is an exception');
                }

            }, 2000);

        } );
    }

    //async await with promise

//    async function init(){
//     await createPost({ title:'Post Three', body: 'This is a post three'    });

//     getPosts();
//     }
// init();

//async await with fetch
async function fetchTest(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    console.log(data);
}

fetchTest();

   