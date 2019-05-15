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

    // createPost({title:'Post three', body:'This is post3'})
    // .then(getPosts)
    // .catch(err => console.log(err));

    //Promise.all
    const promise1 = Promise.resolve("Resolve first");
    const promise2 = 100;
    const promise3 = new Promise((resolve, reject) => 
        setTimeout(resolve, 2000, 'Goodbye promise')
    );

    const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

    Promise.all([promise1, promise2, promise3, promise4])
    .then(values => console.log(values));
       