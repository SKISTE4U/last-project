import './Slider.css'

export default function BasicSlider() {
    var page = 0
    
    function goPage(pagee,elem){
        const sliders = document.querySelector('.Sliders')
        page = pagee
        sliders.style.transform = 'translateX(-'+100*page+'%)'
        const navbars = document.querySelectorAll('.OneArticle')
        for (let x = 0; x < navbars.length; x++) {
            const element = navbars[x];
            element.classList.remove('active')
        }
        console.log(elem)
        elem.currentTarget.classList.add('active')
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
        <div className='NavBar'>
            <div className='OneArticle active' onClick={(event) => goPage(0, event)}>
                <div className='number'>01</div>
                <div className='ProgressBar'></div>
            </div>
            <div className='OneArticle' onClick={(event) => goPage(1, event)}>
                <div className='number'>02</div>
                <div className='ProgressBar'></div>
            </div>
            <div className='OneArticle' onClick={(event) => goPage(2, event)}>
                <div className='number'>03</div>
                <div className='ProgressBar'></div>
            </div>
            <div className='OneArticle' onClick={(event) => goPage(3, event)}>
                <div className='number'>04</div>
                <div className='ProgressBar'></div>
            </div>
        </div>
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
