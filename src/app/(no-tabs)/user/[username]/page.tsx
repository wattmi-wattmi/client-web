import React from 'react';

interface Page_Props_Interface {
    params: Promise<{ username: string }>;
}

export default async function User_Detail_Browse_Page({ params } : Page_Props_Interface) {
    const { username } = await params;
    return (
        <div>
            <div>Wattmi Wattmi USER DETAIL BROWSE Page : { username }</div>
        </div>
    );
}