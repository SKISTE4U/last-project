import './Slider.css'

export default function BasicSlider() {
    var page = 0
    
    function goPage(){
        const sliders = document.querySelector('.Sliders')
        console.log(sliders)
        const left = document.querySelector('.left')
        const right = document.querySelector('.right')
        const max = parseInt(sliders.dataset.max)
        
        if (page < max){
            sliders.style.transform = 'translateX(-'+100*page+'%)'
    
            left.setAttribute('onclick','goPage('+(page-1)+')')
            right.setAttribute('onclick','goPage('+(page+1)+')')
        }
    }
    function rightPage() {
        const sliders = document.querySelector('.Sliders')
        const max = parseInt(sliders.dataset.max)
        if (page < max-1){
            page += 1
            sliders.style.transform = 'translateX(-'+100*page+'%)'
        }
    }
    function leftPage() {
        const sliders = document.querySelector('.Sliders')
        const max = parseInt(sliders.dataset.max)
        if (page >= 0){
            page -= 1
            sliders.style.transform = 'translateX(-'+100*page+'%)'
        }
    }
  return (
    <div>
        <span className='left' onClick={leftPage}>←</span>
        <span className='right' onClick={rightPage}>→</span>
        <div className='Sliders' data-max='4'>
        <div className='Slider'>
            <div className='pause'></div>
                <span className='bigText'>CREATE<span className='primaryText bigText'>X</span><br></br>CONSTRUCTION</span>
                <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, officia quia unde quibusdam aliquid dignissimos nemo tempora expedita recusandae beatae molestias velit! Voluptate nihil aliquam sequi, aperiam a dolorum ut.</span>
                <div className="SlidersButtons">
                    <input type="button" value={"LEARN MORE ABOUT US"}/>
                    <input type="button" value={"SUBMIT REQUEST"}/>
                </div>
            </div>
            <div className='Slider'>
                <div className='pause'></div>
                <span className='bigText'>CREATE<span className='primaryText bigText'>X</span><br></br>CONSTRUCTION</span>
                <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, officia quia unde quibusdam aliquid dignissimos nemo tempora expedita recusandae beatae molestias velit! Voluptate nihil aliquam sequi, aperiam a dolorum ut.</span>
                <div className="SlidersButtons">
                    <input type="button" value={"LEARN MORE ABOUT US"}/>
                    <input type="button" value={"SUBMIT REQUEST"}/>
                </div>
            </div>
            <div className='Slider'>
                <div className='pause'></div>
                <span className='bigText'>CREATE<span className='primaryText bigText'>X</span><br></br>CONSTRUCTION</span>
                <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, officia quia unde quibusdam aliquid dignissimos nemo tempora expedita recusandae beatae molestias velit! Voluptate nihil aliquam sequi, aperiam a dolorum ut.</span>
                <div className="SlidersButtons">
                    <input type="button" value={"LEARN MORE ABOUT US"}/>
                    <input type="button" value={"SUBMIT REQUEST"}/>
                </div>
            </div>
            <div className='Slider'>
                <div className='pause'></div>
                <span className='bigText'>CREATE<span className='primaryText bigText'>X</span><br></br>CONSTRUCTION</span>
                <span className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, officia quia unde quibusdam aliquid dignissimos nemo tempora expedita recusandae beatae molestias velit! Voluptate nihil aliquam sequi, aperiam a dolorum ut.</span>
                <div className="SlidersButtons">
                    <input type="button" value={"LEARN MORE ABOUT US"}/>
                    <input type="button" value={"SUBMIT REQUEST"}/>
                </div>
            </div>
        </div>
    </div>
  );
}
