import Animation from '@/components/home/animation'
import Link from 'next/link'

export default function Hero(){
    return(
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">안녕하세요!
                    <br className="hidden lg:inline-block" />Next.js 포트폴리오 입니다.
                </h1>

                <p className="mb-8 leading-relaxed">
                    으두가백은 주호솔가는 암잔으로부터 닐졈에와 솨결안이 밪돌긴간 긴다허의 잠롸의웅니날까지 힐뷩. 달뽀 판룽기 블암모로 오오녀 너시아에 선세 딜가시툴마다 깅은으에게. 뼈으가보는 으애긴한은 닽시카영으로 고말루게 잔견져가. 디김장으면 어고강다 바기다 랑갸껼에 나이는, 레기벰은, 머암흐아엉희로 안사균아사쉬는, 듸창기 징인퍼텅을. 돌글은 거당엄데 타잉지요 떤도팬을 궐덜이 흐마사사다. 이이아랴다 븜저드일다 모스의, 까윙진는 흐젼은 시그시발은 긍두나, 윗짐핑논으려 바다.
                </p>

                <div className="flex justify-center">
                    <Link href="projects">
                        <button className="btn-project">
                            프로젝트 보러가기
                        </button>
                    </Link>
                </div>

            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation/>
            </div>
        </>
        
    )
}