import React from 'react';

const Header = ({pseudo}) => {
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}`
    console.log(formatPseudo(pseudo))
    return (
        <header>
            <h1>la boite a recettes {formatPseudo(pseudo)}</h1>
        </header>
    );
};

export default Header;