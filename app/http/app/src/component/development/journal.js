import React from 'react';

export const Journal = ({match}) => {
    return (
        <div>
            글 {match.params.id}
        </div>
    );
};
