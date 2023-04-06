import { Avatar } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16  text-gray-800">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <div className="h-[70vh] max-h-full flex flex-col items-center justify-center gap-2">
                            <Avatar
                                src={"/404.svg"}
                                sx={{
                                    width: "90%",
                                    maxWidth: "780px",
                                    height: "auto",
                                }}
                                variant={"square"}
                            />
                        </div>
                        <Link to='/' className="px-8 py-3 mt-9 font-semibold rounded bg-gray-800 text-gray-200">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;