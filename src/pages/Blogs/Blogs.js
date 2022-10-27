import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='lg:w-3/4 w-full mx-auto py-10 lg:px-0 px-4'>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold text-white'>Blogs</h2>
                </div>

                <div className='mt-5'>
                    <h2 className='text-2xl'>
                        1.  what is cors?
                    </h2>
                    <p>
                        Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell a browser to let a web application running at one origin (domain) have permission to access selected resources from a server at a different origin. A web application executes a cross-origin HTTP request when it requests a resource that has a different origin (domain, protocol, or port) from its own.
                    </p>
                </div>
                <div className='mt-5'>
                    <h2 className='text-2xl'>
                        2.  Why are you using firebase? What other options do you have to implement authentication?
                    </h2>
                    <p>
                        I am using firebase because it is easy to implement and it is free. I can use other options like Auth0, AWS Cognito, Okta, etc.
                    </p>
                </div>
                <div className='mt-5'>
                    <h2 className='text-2xl'>
                        3.  How does the private route work?
                    </h2>
                    <p>
                        Private route is a route that is only accessible to authenticated users. It is implemented by checking if the user is authenticated or not. If the user is authenticated, then the user is allowed to access the route. If the user is not authenticated, then the user is redirected to the login page.
                    </p>
                </div>
                <div className='mt-5'>
                    <h2 className='text-2xl'>
                        4. What is Node? How does Node work?
                    </h2>
                    <p>
                        Node.js, or Node is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;