// import React from 'react'

// import Lottie from 'react-lottie-player'

// import lottieJson404 from '/public/Animation404.json'
// export default function PageNotFound(){
//     return(
//         <Lottie
//         loop
//         animationData={lottieJson404}
//         play
//         style={{ height: '100vh' }}
        
//       />
      
//     )
// }

import React from 'react';
import Link from 'next/link';
import Lottie from 'react-lottie-player';
import Header from '@/components/header';
import lottieJson404 from '/public/Animation404.json';
import Footer from '@/components/footer';
export default function PageNotFound() {
  return (
    
    <div>
        <Header/>
        <Lottie
            loop
            animationData={lottieJson404}
            play
            style={{ height: '95vh' }}
        />
            <div className="flex justify-center" style={{height:'4vh'}}>
                <Link href="/">
                    <button className="btn-project">
                        홈으로 돌아가기
                    </button>
                </Link>
            </div>
        <Footer/>
    </div>
  );
}
