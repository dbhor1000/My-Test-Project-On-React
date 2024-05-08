import React from 'react'

export const TestElementOne = () => {

    const CustomHeader = () => {

        var x = 20
        const y = 20

        return x+y;
    };

    return (

        <div>
            {CustomHeader.call()}
        </div>
    )
}

