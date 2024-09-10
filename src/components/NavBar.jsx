import React from 'react';
import {
    Navbar,
    NavTitle
} from 'framework7-react';

const NavBar = () => {
    return (
        <Navbar>
            <NavTitle className='logo'>
                <svg xmlns="http://www.w3.org/2000/svg" width="163" height="28" viewBox="0 0 1981 340"><path className="l" d="M866 1c18-2 37-1 54 6a72 72 0 0 1 32 27c9 14 13 31 12 48a73 73 0 0 1-16 40 81 81 0 0 1-36 25 86 86 0 0 1-58 0 80 80 0 0 1-42-34 76 76 0 0 1 10-89c11-12 28-20 44-23zm7 11c-11 3-21 11-26 22-8 16-10 34-9 52 1 14 4 28 13 40a38 38 0 0 0 27 14c10 1 21 0 30-6 8-6 13-14 16-23 3-11 4-23 4-34 0-14-1-27-6-40-3-8-9-16-18-21s-20-6-30-4zM1306 18a117 117 0 0 1 113-5 104 104 0 0 1 39 35c16 22 24 50 28 77h-23l-5-35a106 106 0 0 0-27-49 90 90 0 0 0-43-25c-15-4-31-3-45 3-18 8-32 22-41 38-16 28-22 60-22 91h205l1 15h-207a307 307 0 0 0 2 64c2 20 7 40 16 57 8 14 18 26 31 33 16 9 35 11 53 8a83 83 0 0 0 44-23c13-12 22-28 28-45 8-21 10-45 10-68h22c-1 23-5 46-12 67-6 17-14 33-26 46a102 102 0 0 1-63 35c-9 1-19 4-28 2a123 123 0 0 1-55-19c-41-26-68-72-73-120-2-19 1-38 2-56 3-23 7-46 17-66a160 160 0 0 1 59-60zM241 7c31-7 64-4 95 6 14 5 29 13 39 25 8 9 12 22 11 34-1 15-9 29-20 39-15 14-34 23-54 27-21 3-44 1-64-6-19-7-37-17-53-30l-1 220h38v9H118v-9h28V121c2-28 12-55 30-76 16-19 40-32 65-38zm20 11c-16 3-31 9-42 20-10 9-17 21-18 35-1 5 1 10 4 14 7 10 16 16 26 21 17 9 35 15 54 15 18 0 37-3 52-13 11-6 19-17 21-29 2-15-1-32-12-43a75 75 0 0 0-42-19c-14-2-29-3-43-1z" /><path className="l" d="M364 6h113v9h-35l121 307h22v8l-109 1v-8l36-1-30-75c-9 14-19 28-29 40-9 11-18 22-29 30a91 91 0 0 1-64 17c-15-2-30-9-40-21-9-11-13-25-12-38 0-18 6-35 14-51 7-14 18-26 29-39l33-41c10-14 19-29 25-45 4-13 4-26 0-38l-19-46h-26V6zm20 164l-17 22c-9 14-18 30-21 47-2 11-2 24 4 35 4 9 12 15 21 18 12 4 27 6 40 2 17-5 31-17 42-30 8-11 16-23 21-35l-49-127c-13 23-26 46-41 68z" /><path className="l" d="M521 38c8-18 26-29 44-32h219v10h-39c5 36 16 71 33 103 18 38 43 72 70 104h57c-14 38-34 73-55 107h-56c20-30 38-61 49-96H611c18 35 41 67 67 96h-60a536 536 0 0 1-69-107h52l3-2c22-25 42-53 57-84a325 325 0 0 0 33-121H573c-13 0-27 5-35 15a41 41 0 0 0-1 47 36 36 0 0 0 22 15c9 2 18 1 27-2l-1-3c-6-3-12-7-15-13-2-6 0-12 4-16a30 30 0 0 1 31-7c7 2 13 7 14 14 2 6 0 12-4 18a58 58 0 0 1-13 13c-14 7-31 9-46 5s-29-15-35-30a43 43 0 0 1 0-34zm103 185l159-1c-31-48-62-98-80-153-19 55-46 106-79 154zM965 16V7h119v9h-36l-1 57c14-10 30-18 47-17 16 0 31 7 43 17V17l-36-1V7h115v9h-26v306h26v9h-115v-9h36V91c-8-6-18-12-28-16a45 45 0 0 0-27-2c-13 4-24 11-35 18v231h37l-1 9H966l-1-10h34l-1-305h-33zM1477 10h109v9h-28c2 23 9 46 24 64 16 18 40 29 63 35V19h-22v-9h96v9h-23v99c20-1 41-7 58-18a90 90 0 0 0 32-37c6-14 10-29 12-44h-17v-9h103v9h-20c-11 30-32 57-58 75-33 22-72 32-110 36v53c37 2 75 11 107 32 25 17 43 43 53 72a211 211 0 0 1 8 35h20v10h-103v-10h26c-1-21-5-42-13-62-6-15-16-30-29-41-19-16-44-23-69-23v126h23v10l-96-1v-9h22V196c-17 7-34 15-48 27a103 103 0 0 0-29 37c-9 20-11 41-10 62h28v9h-109v-9h26a143 143 0 0 1 73-113c22-12 45-20 69-26l1-53c-19-3-38-7-56-14-19-7-37-17-51-30-19-18-31-42-36-67h-26v-9zM1889 100l92-78v58l-92 79v-59zM0 162l93-79v58L0 220zM1891 192l90-76v58l-93 79v-57c0-2 2-3 3-4zM0 256l93-79-1 57c1 1-1 2-2 3L0 314z" /></svg>
            </NavTitle>
        </Navbar>
    );
}

export default NavBar;