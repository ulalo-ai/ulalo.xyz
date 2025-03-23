import MiddleLeft from "./MiddleLeft"
import MiddleRight from "./MiddleRight"
import TopRight from "./TopRight"
import TopLeft from "./UpperTop"
import BottomLeft from "./BottomLeft"
import BottomRight from "./BottomRight"


const UlaoIsRelevant = () => {
            return (
                <section id="smart-wallet" className='w-[100vw] bg-secondary p-5 pt-[100px] lg:p-[100px]'>
            <div className='container mx-auto max-w-[88rem] w-full  grid grid-cols-12 gap-[10px]'>
           <TopLeft/>
               <TopRight/>
               <MiddleLeft/>
                <MiddleRight/>
                <BottomLeft/>
                <BottomRight/>
            </div>

        </section>
    )
}

export default UlaoIsRelevant