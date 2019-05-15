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
                const error = true;
                
                if(!error){
                    resolve();
                }else{
                    reject('Error: exception');
                }

            }, 2000);

        } );
    }

    createPost({title:'Post three', body:'This is post3'})
    .then(getPosts)
    .catch(err => console.log(err));
       