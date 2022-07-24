import React from 'react';
import Link from 'next/link';
const index = ({ users }) => {

    return (
        <div>
            <h1>This is users page: {users.length}</h1>
            {
                users.map(user => <p>
                    {user.name}<br/><Link href={`users/${user.id}`}>Explore</Link>
                </p>)
            }
        </div>
    );
};

export default index;

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return {
        props: { users }
    }
}